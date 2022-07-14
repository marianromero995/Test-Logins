import "./_login3.scss";
import buttonArrow from "../../login3/button-arrow.svg";
import countrylines from "../../login3/COUNTRYLINES.svg";

const Login = ({ setView }) => {
  const time = () => {
    setTimeout(() => {
      setView("Login1");
    }, 4000);
  };
  return (
    <div className="Login3" onClick={() => time()}>
      <div className="countrylines">
        <img src={countrylines} alt="" />
      </div>
      <div className="Login-container3">
        <div className="Left-container">
          <div className="logo">
            <div className="title">HELLO!</div>
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
        <div className="Right-container">
          <div className="title">WELCOME BACK!</div>
          <div className="content">
            We are a full-services portfolio management and financial consulting
            company that focuses on small to medium enterprises.{" "}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
