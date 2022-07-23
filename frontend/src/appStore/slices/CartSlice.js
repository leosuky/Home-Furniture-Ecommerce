import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartItemStore = sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')) : []
const totalPriceStore = sessionStorage.getItem('totalPrice') ? JSON.parse(sessionStorage.getItem('totalPrice')) : 0
const shippingPriceStore = sessionStorage.getItem('shippingPrice') ? JSON.parse(sessionStorage.getItem('shippingPrice')) : 0
const taxStore = sessionStorage.getItem('tax') ? JSON.parse(sessionStorage.getItem('tax')) : 0
const shippingStore = sessionStorage.getItem('shipping') ? JSON.parse(sessionStorage.getItem('shipping')) : {}
const paymentStore = sessionStorage.getItem('payment') ? JSON.parse(sessionStorage.getItem('payment')) : ''
                    
// INITIAL STATE
const initialState = {
    cartItems: cartItemStore,
    totalPrice: totalPriceStore,
    shippingPrice: shippingPriceStore,
    tax: taxStore,
    shippingInfo: shippingStore,
    paymentMethod: paymentStore
}

// PRODUCT DETAIL SLICE
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const item = action.payload
            const existItem = state.cartItems.find(
                x => x.productId === item.productId
            )

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(
                        x => x.productId === existItem.productId ? item : x
                    )
                }
            }else {
                return {
                    ...state,
                    cartItems:[...state.cartItems, item]
                }
            }
        },
        updateTotalPrice: (state) => {
            return {
                ...state,
                totalPrice: state.cartItems.reduce(
                    (acc, x) => acc + x.quantity * x.price, 0 
                ).toFixed(2)
            }
        },
        updateShippingPrice: (state) => {
            const price = state.totalPrice
            const shipping = price > 500 ? 0 : (price*0.085)
            return {
                ...state,
                shippingPrice: shipping.toFixed(2)
            }
        },
        updateTax: (state) => {
            const price = state.totalPrice
            return {
                ...state,
                tax: (price*0.12).toFixed(2)
            }
        },
        updateShippingInfo: (state, action) => {
            return {
                ...state,
                shippingInfo: action.payload
            }
        },
        updatePaymentMethod: (state, action) => {
            return {
                ...state,
                paymentMethod: action.payload
            }
        },
        removeCartItem: (state, action) => {
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    x => x.productId !== action.payload
                )
            }
        },
        clearCartItems: (state) => {
            sessionStorage.removeItem('cartItems')
            sessionStorage.removeItem('totalPrice')
            sessionStorage.removeItem('shippingPrice')
            sessionStorage.removeItem('tax')
            return {
                ...state,
                cartItems: [],
                totalPrice: 0,
                shippingPrice: 0,
                tax: 0
            }
        },
        clearShippingDetails: (state) => {
            sessionStorage.removeItem('payment')
            sessionStorage.removeItem('shipping')
            return {
                ...state,
                shippingInfo: {},
                paymentMethod: ''
            }
        }
    }
})

// ACTION CREATOR FUNCTIONS
export const addCartItemAsync = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/shop/products/${id}`)

    dispatch(addCartItem(
        {
            productId: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            quantity: quantity
        }
    ))

    dispatch(updateTotalPrice())
    dispatch(updateShippingPrice())
    dispatch(updateTax())

    sessionStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
    sessionStorage.setItem('totalPrice',JSON.stringify(getState().cart.totalPrice))
    sessionStorage.setItem('shippingPrice',JSON.stringify(getState().cart.shippingPrice))
    sessionStorage.setItem('tax',JSON.stringify(getState().cart.tax))
}

export const removeCartItemAsync = (id) => (dispatch, getState) => {
    
    dispatch(removeCartItem(id))
    dispatch(updateTotalPrice())
    dispatch(updateShippingPrice())
    dispatch(updateTax())

    sessionStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
    sessionStorage.setItem('totalPrice',JSON.stringify(getState().cart.totalPrice))
    sessionStorage.setItem('shippingPrice',JSON.stringify(getState().cart.shippingPrice))
    sessionStorage.setItem('tax',JSON.stringify(getState().cart.tax))
}

export const saveShippingInformation = (data) => (dispatch) => {
    dispatch(updateShippingInfo(data))
    sessionStorage.setItem('shipping',JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch(updatePaymentMethod(data))
    sessionStorage.setItem('payment',JSON.stringify(data))
}


export const {
    addCartItem, removeCartItem, clearCartItems,
    updateTotalPrice, updateShippingPrice, clearShippingDetails,
    updateTax, updateShippingInfo, updatePaymentMethod
} = cartSlice.actions;

export default cartSlice.reducer;