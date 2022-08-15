import { Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import Register from "./pages/register";
import Error from "./pages/error";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}
export default App;
