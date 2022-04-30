import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { IoCart } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import city from "../img/city.svg";


const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector((state) => state.cart);

  if (quantity === 0) {
    return (
      <div className="container big-cart">
        <div className="row">
          <div className="col-xs-4 mx-auto my-5">
            <h2 className="no-items">No items are in your cart...</h2>
              <div className="text-center mt-4 mx-5 px-5">
                <img src={city}/>
                <Marquee direction="right" speed={95} pauseOnHover={true}>
                  <IoCart className="fa-6x"/>
                </Marquee>
              </div>
          </div>
        </div>
      </div>);
  }

  return (
    <div className="container big-cart">
      <div className="row">
        <div className="col-xs-10 my-5">
        <h1 className="text-center">Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <h2 className="total">Total Amount: ${(totalAmount)}</h2>
        <button className="btn btn-info float-sm-right">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
