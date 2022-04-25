import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios/axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/login');
  };

  return (
    <div className="Register">
      <form>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>Register</button>
      </form>
    </div>
  );
};

export default Register;
