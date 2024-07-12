import Item from "../Item";

function Cart({ list, buyItems }) {
    function buy() {
        buyItems([]);
    }

    return (
        <>
            <h4>Your cart:</h4>
            {list.map((element) => {
                    return (
                        <Item 
                            image={element.image} 
                            title={element.title}
                            cart={true}
                        />
                    );
                })}
            <button onClick={buy}>Buy items</button>
        </>
    );
}

export default Cart;