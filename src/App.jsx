import "./App.css";
import LogIn from "./components/LogIn/login";
import icon from "../public/images/icon.png";
import container from "../public/images/container.png";
import SignIn from "./components/LogIn/signIn";
function App() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid-row-2">
        <div className="logo row-span-4">
          <img src={icon} width="20px" />
          <h3>Revolutie</h3>
        </div>
        <div className="col-span-4">
          <SignIn />
        </div>
      </div>
      <div className="row-span-1">
        <img src={container} />
      </div>
    </div>
  );
}

export default App;
