import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./style.css";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <>
      <Navigation setInput={setPrompt} />
      <Routes>
        <Route path="/" element={<Home category={prompt} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;