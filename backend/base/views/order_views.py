from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from ..serializers import OrderSerializer
from ..models import Product, Order, OrderItem, ShippingAddress
from datetime import datetime


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data = request.data

    orderItems = data['orderItems']

    if orderItems and len(orderItems) == 0:
        return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # STEP 1: CREATE ORDER
        order = Order.objects.create(
            user = user,
            paymentMethod = data['paymentMethod'],
            taxPrice = data['taxPrice'],
            shippingPrice = data['shippingPrice'],
            totalPrice = data['totalPrice'],
        )
        # STEP 2: CREATE SHIPPING ADDRESS
        shipping = ShippingAddress.objects.create(
            order = order,
            address = data['shippingAddress']['address'],
            city = data['shippingAddress']['city'],
            postalCode = data['shippingAddress']['postalCode'],
            country = data['shippingAddress']['country'],
        )
        # STEP 3: CREATE INDIVIDUAL ORDER ITEMS
        for i in orderItems:
            product = Product.objects.get(_id=i['productId'])

            item = OrderItem.objects.create(
                product = product,
                order = order,
                name = product.name,
                qty = i['quantity'],
                price = i['price'],
                image = product.image.url
            )

            # STEP 4: UPDATE STOCK
            # product.countInStock -= item.qty
            # product.save()

        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order_set.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

        

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):

    user = request.user

    try:
        order = Order.objects.get(_id=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            return Response(
                {'detail': 'Not authorized to view this order'},
                status=status.HTTP_400_BAD_REQUEST
            )

    except:
        return Response(
            {'detail': 'Order does not exist'},
            status=status.HTTP_400_BAD_REQUEST
        )



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToPaid(request, pk):
    order = Order.objects.get(_id=pk)

    order.isPaid = True
    order.paidAt = datetime.now()
    order.save()

    return Response('Payment Recieved')