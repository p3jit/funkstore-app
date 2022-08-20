import React, { createContext , useContext, useEffect, useState } from 'react'
import { AuthProvider } from './authContext';

export const CartProvider = createContext();

const CartContext = ({children}) => {
    const {user} = useContext(AuthProvider);
    const [cart,setCart] = useState(null);

    const fetchCart = async ()=>{
        const res = await fetch(`${process.env.REACT_APP_API_URL}carts/${user.userId}`,{
            headers: {
                'token' : `Bearer ${user.accessToken}`
            },
        });
        const data = await res.json();
        setCart(data);
        return;
    }
    

    //Initial Cart Fetch
    useEffect(()=>{
        if(cart !== null || !user.username) return;

        if(!cart) {
            fetchCart();
        }
    },[]);

    //Update Cart on every local cart state change
    useEffect(()=>{
        if(cart === null || !user.username) return;
        const fetchUpdateCart = async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}carts/${user.userId}` , {
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
        <CartProvider.Provider value = {{cart , setCart , fetchCart}}>{children}</CartProvider.Provider>
    )
}

export default CartContext