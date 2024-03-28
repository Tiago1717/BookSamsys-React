import PropTypes from 'prop-types';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.title} - {item.quantity}</span>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button>Proceed to Checkout</button>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired 
};

export default Cart;
