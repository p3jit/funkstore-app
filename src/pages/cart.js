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
  const [total , setTotal] = useState(0);

  useEffect(()=>{
    console.log(cart);
    if(cart && cart.products && cart.products.length > 0) {
      let tempTotal = 0;
      cart.products.forEach((item)=>{
        tempTotal += parseInt(item.productPrice * parseInt(item.quantity));
      });
      console.log(tempTotal);
      setTotal(tempTotal);
    }
  },[cart])
 
  return (
    <>
        <Navbar/>
        <Subheader/>
        <div className='container pt-5 pb-5 mb-5'>
          <h3 className='cart-owner rounded-2'>{user.username.toUpperCase()}'S CART</h3>
          <div className='row'>
            <div className='col-12 col-md-8 cart-products'>
              <div className='d-flex flex-column '>
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
            { cart && cart.products.length ? (
              <div className='col-12 col-md-4 py-2 py-md-0'>
                <div>
                  <h3 className='cart-owner rounded-2'>SUMMARY</h3>
                  <div className='d-flex flex-column border border-dark p-4 gap-3'>
                    <div className='row'>
                      <div className='col text-start'>
                        <h5>SUBTOTAL: </h5>
                        <h5>SHIPPING: </h5>
                      </div>
                      <div className='col text-end'>
                        <h5>{total} /- Rs</h5>
                        <h5>251 /- Rs</h5>        
                      </div>
                    </div>

                    <button className='btn btn-warning'>CHECKOUT</button>
                  </div>
                </div>
              </div>
            ) : "" }

          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Cart