import CartCard from "./CartCard";
import CartListButtons from "./CartListButtons"

//exports the function so that other jsx files can import/call it
export default function CartListContainer({cart, removeFromCart, emptyCart, count}) {
    return (
        <div className="CartList-Container"> 
            <h2>
            {"Your cart"} {cart.length == 0 && "is empty" }
            </h2>
            <h3>
            {cart.length > 0 && "No. items: "} {cart.length > 0 && cart.length}
            </h3>

            {cart.length > 0 &&
                //any time {cart.length == 0 &&} is seen it's checking if the cart is empty
                //iterates through the cart array, mapping the values as it goes and rendering them as a new card for each iteration
                cart.map((i) => (
                    <CartCard key={i.id} id={i.id} productName={i.productName} price={i.price} removeFromCart={removeFromCart} />
                ))
            }

            {cart.length > 0 &&
                //renders the buy and empty cart buttons if the cart is not empty
                <CartListButtons count={count} emptyCart={emptyCart}></CartListButtons>
            }          
      </div>
      );
}