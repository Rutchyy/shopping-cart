import React, { useState } from "react";

function Item({image, title, setItem, cart}) {
    const [bought, setBought] = useState(false);

    function updateToCart() {
        setItem(previousState => 
            [...previousState, {image: image, title: title}]
        )
        setBought(!bought)
    }

    return(
        <section className="item">
            <img src={image} />
            <div className="desc">
                <h4>{title}</h4>
                {!cart && <button className="add" onClick={updateToCart}>{bought ? "Remove from" : "Add to"} Cart</button>}
            </div>
        </section>
    );
}

export default Item;