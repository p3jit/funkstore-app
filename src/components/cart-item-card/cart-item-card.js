import React, { useContext, useRef } from 'react'
import { CartProvider } from '../../context/cartContext'
import "./cart-item-card.css"

const CartItemCard = ({data}) => {

  const {cart,setCart} = useContext(CartProvider);
  const qtyRef = useRef();
  
  const findProductAndSetQuantity = () => {
    let newCart = JSON.parse(JSON.stringify(cart));
    for(let x of newCart.products){
      if(x.productId === data.productId) {
        x.quantity = qtyRef.current.value;
      }
    }
    setCart(newCart);
  }

  const handleRemoveCartItem = () => {
    const newCart = {
      userId : cart.userId,
      products: [...cart.products.filter((item)=> item.productId !== data.productId)]
    };
    setCart(newCart);
  }

  return (
    <>
        <div className='cart-item-container 2-100 d-flex'>
            <div className='col-5 card-img-container'>
                <img src={`./assets/productImages/${data.productImg}`} alt="cart-item-img" className='img-fluid cart-item-img'></img>
            </div>
            <h3 className='fs-5 card-item-name'>{data.productName}</h3>
            <h5>Quantity: </h5>
            <input type="number" min="1" defaultValue={`${data.quantity}`} ref={qtyRef} onChange={findProductAndSetQuantity} className=""/>
            <button type="button" className="btn btn-outline-danger btn-remove" onClick={handleRemoveCartItem}>REMOVE ITEM</button>
        </div>
    </>
  )
}

export default CartItemCard