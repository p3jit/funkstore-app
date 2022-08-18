import React, { createContext , useContext, useEffect, useState } from 'react'
import { createSearchParams } from 'react-router-dom';
import { AuthProvider } from './authContext';
let isFirstFetchDone = false;

export const CartProvider = createContext();

const CartContext = ({children}) => {
    const {user} = useContext(AuthProvider);
    const [cart,setCart] = useState(null);
    

    //Initial Cart Fetch
    useEffect(()=>{
        if(cart !== null || !user.username) return;
        const fetchCart = async ()=>{
            const res = await fetch(`http://localhost:5000/api/carts/${user.userId}`,{
                headers: {
                    'token' : `Bearer ${user.accessToken}`
                },
            });
            const data = await res.json();
            setCart(data);
            return;
        }
        
         if(!cart) {
            fetchCart();
            isFirstFetchDone = true;
         }
    },[]);

    //Update Cart on every local cart state change
    useEffect(()=>{
        if(cart === null || !user.username) return;
        const fetchUpdateCart = async () => {
            const JsonProducts = [];
            cart.products.forEach(element => {
                console.log(JSON.stringify(element));
                JsonProducts.push(JSON.stringify(element));
            });
            const res = await fetch(`http://localhost:5000/api/carts/${user.userId}` , {
                method : 'PUT',
                headers : {
                    'token' : `Bearer ${user.accessToken}`,
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    userId : user.userId,
                    products: [...cart.products]
                })
            });
        }
        fetchUpdateCart();
        
    },[cart])

    return (
        <CartProvider.Provider value = {{cart , setCart}}>{children}</CartProvider.Provider>
    )
}

export default CartContext