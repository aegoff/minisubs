import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/');
  };
  return (
    <div className="Error">
      <h1>404</h1>
      <p className="first">This page could not be found!</p>
      <p>
        Go back to&nbsp;
        <span
          className="home-redirect-button"
          onClick={handleClick}>
          Home
        </span>
        .
      </p>
    </div>
  );
};

export default Error;
