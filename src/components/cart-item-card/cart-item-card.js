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
        <div className='cart-item-container d-flex rounded-2'>
            <div className='col-6 card-img-container'>
                <img src={`./assets/productImages/${data.productImg}`} alt="cart-item-img" className='img-fluid cart-item-img'></img>
            </div>
            <div className='col-6 d-flex flex-column py-3 gap-3'>
              <h3 className='fs-2 card-item-name'>{data.productName}</h3>
              <div className='d-flex flex-column'>
              <h3 className='fs-5 card-item-name'>PRICE: {data.productPrice} /- Rs</h3>
                <h5>Quantity: </h5>
                <input type="number" min="1" defaultValue={`${data.quantity}`} ref={qtyRef} onChange={findProductAndSetQuantity}/>
              </div>
              <button type="button" className="btn btn-outline-danger" onClick={handleRemoveCartItem}>REMOVE ITEM</button>
            </div>
        </div>
    </>
  )
}

export default CartItemCard