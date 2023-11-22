export default function CartListButtons({ count, emptyCart }) {
    return (
        <div className="CartList-Card-Buttons">
            <button className="Remove-Button" onClick={() => emptyCart()}>
            Empty
            </button>
            <button id="Buy-Button"> Buy ({count}) </button>
        </div>
    );
  }
