import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemPage from "./components/shared/ItemPage";

function App() {
  return (
    <div className="h-screen">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="cart" element={<Cart/>}/>
      <Route path="item" element={<ItemPage/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
