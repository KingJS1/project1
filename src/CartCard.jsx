export default function CartCard({ id, productName, price, removeFromCart }) {
    return (
      <div className=".CartList-Card-Info">
        <div className="CartList-Card">
          <p>{productName}</p>
          <p>{price}</p>
          <button
            className="Remove-Button"
            onClick={() => removeFromCart(id, price)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }