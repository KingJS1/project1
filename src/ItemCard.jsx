function ItemCard({
  id,
  productName,
  brand,
  quantity,
  image,
  price,
  addToCart,
}) {
  return (
    <div className="Inventory-Card">
      <img src={image} alt={id} />
      <h1>{productName}</h1>
      <h2>{brand}</h2>
      <p>{quantity}</p>
      <h3>{price}</h3>
      <button onClick={() => addToCart(productName, price)}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;
