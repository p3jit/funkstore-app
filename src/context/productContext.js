import {createContext , useState } from 'react'

export const Products = createContext();

const ProductsContext = ({children}) => {

  const [allProduct, setAllProduct] = useState([]);
  return (
    <Products.Provider value={{allProduct , setAllProduct }}>  
      {children}
    </Products.Provider>
  )
}

export default ProductsContext