import { NavLink } from "react-router-dom";
import Login from "./login";

const Home = () => {
  return (
    <div className="w-full h-screen bg-blue-600 text-white content-center m-auto p-5">
      <h1 className="font-vazir text-5xl p-2">
         
         به <span className="text-gray-700">تسک های روزانه</span> خوش آمدید
      </h1>
      <p className="text-lg ">بیا و عضوی از ما باش</p>
      <NavLink to='/register'>عضویت</NavLink>
      <p className="text-lg">/</p>
      <NavLink to='/login'>ورود</NavLink>
      <NavLink to='login2'>ورود 2</NavLink>
    </div>
  );
};

export default Home;
