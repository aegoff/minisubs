import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/');
  };
  return (
    <div className="container-fluid big-cart">
      <div className="row mx-auto">
        <div className="col-5 my-5 mx-auto text-center">
          <h1>Error 404</h1>
          <p>This page could not be found!</p>
          <FontAwesomeIcon icon={faHouseUser} size="6x" className="my-5"/>
          <br></br>
            <button
              className="btn btn-info"
              onClick={handleClick}>
              Return to Home
            </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
