import { Routes , Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Subheader from "./components/subheader/subheader";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar/>
      <Subheader/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
