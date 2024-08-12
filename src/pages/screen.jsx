import { useContext } from "react";
import { AppContext } from "../context";
import Register from "./register";
import Login from "./login";
// change between login and register page
const Screen = () => {
  const { register } = useContext(AppContext);
  return <>
  {register ? <Register /> : <Login />}</>;
};

export default Screen;