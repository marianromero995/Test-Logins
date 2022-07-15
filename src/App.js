import "./App.scss";
import React from "react";
import Login1 from "./components/Login1/Login1";
import Login2 from "./components/Login2/Login2";
import Login3 from "./components/Login3/Login3";

function App() {
  const [view, setView] = React.useState("Login1");

  const RenderView = () => {
    switch (view) {
      case "Login1":
        return <Login1 setView={setView} />;
        break;
      case "Login2":
        return <Login2 setView={setView} />;
        break;
      case "Login3":
        return <Login3 setView={setView} />;
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
    <Login2 setView={setView} />
    </div>
  );
}

export default App;
