import { Link } from "react-router-dom";
import logo from "../images/youtube.svg";
import cart from "../images/cart.svg";
import { useState } from "react";

function Navigation({ setInput }) {
    const [value, setValue] = useState("");

    const handleInputChange = (event) => {
        setValue(event.target.value);
        setInput(value);
    };

    return (
        <nav>
            <Link to="/">
                <img src={logo} />
            </Link>
            <input value={value} type="search" onChange={handleInputChange} />
            <Link to="/cart">
                <img src={cart} />
            </Link>
        </nav>
    );
}

export default Navigation;