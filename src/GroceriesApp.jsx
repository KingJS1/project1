//we will be using states to track changes to values we create
import { useState } from "react";
//unique user id, so we can retrieve individual items from the arrays by ID
import { v4 as uuid } from "uuid";
import products from "./data/products.js";
import ItemCardsContainer from "./ItemCardsContainer.jsx";
import CartListContainer from "./CartListContainer.jsx";

export default function GroceryApp() {
  //initializes cart and count to an empty array and 0, respectively
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  //function that modifiers cart by adding a new array item to the end of the cart array
  //also modifies count by converting the price string of the item to a number and adding it to the existing count
  const addToCart = (newProductName, newPrice) => {
    {
      setCount((prevCount) => prevCount + Number(newPrice.substring(1)));
    }
    return setCart((prevCart) => [
      ...prevCart,
      { id: uuid(), productName: newProductName, price: newPrice },
    ]);
  };

  //function that filters the cart array, removing items based on their uuid
  const removeFromCart = (id, price) => {
    {
      setCount((prevCount) => prevCount - Number(price.substring(1)));
    }
    return setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //this sets cart to an empty array and subtracts the count from itself to get 0
  const emptyCart = () => {
    {
      setCount((prevCount) => prevCount - prevCount);
    }
    return setCart([]);
  };

  return (
    //main container for the app, followed by inventory and cart containers
    <div className="GroceriesApp-Container">
      <ItemCardsContainer products={products} addToCart={addToCart} />
      <CartListContainer cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} count={count} />
    </div>
  );
}