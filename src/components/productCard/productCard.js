import React, { useContext, useRef } from 'react'
import { AuthProvider } from '../../context/authContext';
import { CartProvider } from '../../context/cartContext';
import "./productCard.css"

function ProductCard({data , id}) {
  const {cart,setCart} = useContext(CartProvider);
  const {user} = useContext(AuthProvider);

  const qtyRef = useRef();


  const handleAddItem = () => {
    if(!user.username) return;
    const newProduct = {
      productId:id,
      quantity:qtyRef.current.value,
      productImg:data.img,
      productName:data.title,
      productPrice:data.price
    }
    if(!cart.products.find(obj=>obj.productId === id)) {
      const newCart = {
        userId : cart.userId,
        products: [...cart.products,newProduct]
      };
      setCart(newCart);
    }
  }

  return (
    <>
      <div className="product-container">
        <div className='row gap-sm-5 gap-md-0'>
          <div className='col-md-5 product-img-container p-5 d-flex'>
            <img src={`/assets/productImages/${data.img}`} className='product-img img-fluid flex-grow-1' alt='productImage'></img>
          </div>
          <div className='product-desc p-4 col-md-7 d-flex flex-column justify-content-center'>
            <h2 className='display-6'>{data.title}</h2>
            <h4 className='text-muted product-desc-text'>{ data.desc ? data.desc.substr(0,550) + "..." : ""}</h4>
            <h4 className='pt-2'>PRICE: {data.price}/- Rs</h4>
            <div className="quantity-group d-flex pt-2 align-items-center">
              <h5 className='pt-1'>QUANTITY:</h5>
              <input type={'number'} min={"1"} defaultValue="1" className='mx-4 w-100' ref={qtyRef}/> 
            </div>
            <button className='btn btn-outline-secondary btn-sm mt-3' onClick={handleAddItem}>ADD TO CART</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard