function Item({image, title}) {
    return(
        <section className="item">
            <img src={image} />
            <div className="desc">
                <h4>{title}</h4>
                <button className="add">Add to Cart</button>
            </div>
        </section>
    );
}

export default Item;