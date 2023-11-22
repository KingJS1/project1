import ItemCard from "./ItemCard";

export default function ItemCardsContainer({ products, addToCart }) {
  return (
    <div className="Inventory-Container">
      {products.map((i) => (
        <ItemCard key={i.id} {...i} addToCart={addToCart} />
      ))}
    </div>
  );
}
