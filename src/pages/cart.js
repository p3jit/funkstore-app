import React, { useContext, useEffect, useState } from 'react';
import CartItemCard from '../components/cart-item-card/cart-item-card';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Subheader from '../components/subheader/subheader';
import { AuthProvider } from '../context/authContext';
import { CartProvider } from '../context/cartContext';
import "./cart.css";

const Cart = () => {
  const {cart} = useContext(CartProvider);
  const {user} = useContext(AuthProvider);
 
  return (
    <>
        <Navbar/>
        <Subheader/>
        <div className='container pt-5 pb-5 mb-5'>
          <h3 className='cart-owner'>{user.username.toUpperCase()}'S CART</h3>
          <div className='d-flex flex-column'>
            {
              !cart || cart.products.length === 0 ? <div>NO PRODUCTS IN THE CART</div> : ""
            }
            {
              cart && cart.products.length ? cart.products.map((each) => {
                return <CartItemCard key={cart.products.indexOf(each)} data={each}/>
              }) : ""
            }
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Cart