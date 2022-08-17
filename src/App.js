import { Routes , Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import Register from "./pages/register";
import Error from "./pages/error";
import Cart from "./pages/cart";
import SingleProduct from "./pages/singleProduct";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/products/*" element={<Product/>}/>
        <Route path="/cart/" element={<Cart/>}/>
        {/* <Route path="/products/mobiles" element={<Product/>}/>
        <Route path="/products/men" element={<Product/>}/>
        <Route path="/products/women" element={<Product/>}/>
        <Route path="/products/laptop" element={<Product/>}/>
        <Route path="/products/camera" element={<Product/>}/>
        <Route path="/products/jewellery" element={<Product/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/404" element={<Error/>}/>
      </Routes>
    </>
  );
}
export default App;
