import Carousel from "./components/carousel/Carousel";
import Navbar from "./components/navbar/navbar";
import Subheader from "./components/subheader/subheader";

function App() {
  return (
    <div className="App bg-light">
      <Navbar/>
      <Subheader/>
      <div className="container">
        <Carousel/>
      </div>
    </div>
  );
}

export default App;
