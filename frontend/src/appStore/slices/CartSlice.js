import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartItemStore = sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')) : []
const totalPriceStore = sessionStorage.getItem('totalPrice') ? JSON.parse(sessionStorage.getItem('totalPrice')) : 0
                    
// INITIAL STATE
const initialState = {
    cartItems: cartItemStore,
    totalPrice: totalPriceStore,
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
        removeCartItem: (state, action) => {
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    x => x.productId !== action.payload
                )
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

    sessionStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
    sessionStorage.setItem('totalPrice',JSON.stringify(getState().cart.totalPrice))
}

export const removeCartItemAsync = (id) => (dispatch, getState) => {
    
    dispatch(removeCartItem(id))
    dispatch(updateTotalPrice())

    sessionStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
    sessionStorage.setItem('totalPrice',JSON.stringify(getState().cart.totalPrice))
}


export const {addCartItem, removeCartItem, updateTotalPrice} = cartSlice.actions;

export default cartSlice.reducer;