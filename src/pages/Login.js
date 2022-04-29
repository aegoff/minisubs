import {LoginForm} from "../components/LoginForm"

const Login = () => {
  return (
    <div className="container-fluid big-cart">
      <div className="row">
        <div className="col-10 my-5 mx-auto text-center">
          <h1>Login</h1>
          <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export default Login;
