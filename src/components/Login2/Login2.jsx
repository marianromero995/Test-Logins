import "./_login2.scss";
import logo from "../../login2/axenlight-logo.svg";
import buttonArrow from "../../login2/button-arrow.svg";
import man from "../../login2/man.svg";

const Login = ({setView}) => {
  const time = () => {
    setTimeout(() => {
      setView("Login3");
    }, 4000);
  };
  return (
    <div className="Login-container2" onClick={() => time()}>
      <div className="Left-container">
        <div className="title">WELCOME BACK!</div>
        <div className="content">
          We are a full-services portfolio management and financial consulting
          company that focuses on small to medium enterprises.{" "}
        </div>
        <img src={man} alt="" />
      </div>
      <div className="Right-container">
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
              <div className="label">Remember me</div>
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
    </div>
  );
};

export default Login;
