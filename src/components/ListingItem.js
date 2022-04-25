import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const ListingItem = ({ id, image, title, price }) => {
  const {zip}=useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/listing/${zip}/${id}`);
  };

  return (
      
    <div className="product">
      <div className="image-container ">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <h3>${price}/mth</h3>
      </div>
      <div className="buttons">
        <button className="btn btn-info" onClick={handleClick}>
          <IoInformationCircleOutline/>{' '}
          More info
        </button>
        <button className="btn btn-dark"
          onClick={() => dispatch(addToCart({ id, image, title, price }))}
        >
          + Add to cart
        </button>
      </div>
    </div>
  );
};

export default ListingItem;
