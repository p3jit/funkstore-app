import { Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import Register from "./pages/register";
import Error from "./pages/error";
import Cart from "./pages/cart";
import SingleProduct from "./pages/singleProduct";
import PrivateRoutes from "./util/PrivateRoutes"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/products/*" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element= {<PrivateRoutes/>}>
          <Route path="/cart/" element={<Cart/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/404" element={<Error/>}/>
      </Routes>
    </>
  );
}
export default App;
