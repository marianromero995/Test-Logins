import "./_login1.scss";
import logo from "../../login1/runway-logo.svg";
import buttonArrow from "../../login1/button-arrow.svg";

const LoginForm = () => {
  return (
    <div className="Login-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="title">Sign into Your account</div>
      <div className="form">
        <div className="input-container">
          <div className="input-label">Enter user</div>
          <input />
        </div>
        <div className="input-container">
          <div className="input-label">Password</div>
          <input type="password" />
        </div>
        <div className="end-container">
          <div className="checkbox-container">
            <input type="checkbox" />
            <label className="label">Remember me</label>
          </div>
          <div className="fp-container">
            <a className="link" href="/">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className="button">
        <button onClick={() => {}}>
          Enter
          <img src={buttonArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

const Login1 = ({ setView }) => {
  const time = () => {
    setTimeout(() => {
      setView("Login2");
    }, 4000);
  };

  return (
    <div className="Login1" onClick={() => time()}>
      <div className="Left-container">
        <div className="title">WELCOME BACK!</div>
        <div className="content">
          We are a full-services portfolio management and financial consulting
          company that focuses on small to medium enterprises.{" "}
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login1;
