import "./login.css";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
const LogIn = () => {
  return (
    <form method="POST" action="#">
      <img
        src="./public/images/login/Group.png"
        
      />
      <div className="input-div">
        <FiUser />
        <input type="text" placeholder="USERNAME" />
      </div>
      <div className="input-div">
        <FiLock />
        <input type="password" placeholder="PASSWORD" />
      </div>
      <div className="login-dev">
        <input type="submit" value="LOGIN" />
        <p></p>
      </div>
    </form>
  );
};
export default LogIn;
