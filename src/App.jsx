import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./style.css";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [itemList, setItemList] = useState([]);

  return (
    <>
      <Navigation setInput={setPrompt} />
      <Routes>
        <Route path="/" element={<Home category={prompt} setItem={setItemList} />} />
        <Route path="/cart" element={<Cart list={itemList} buyItems={setItemList} />} />
      </Routes>
    </>
  );
}

export default App;