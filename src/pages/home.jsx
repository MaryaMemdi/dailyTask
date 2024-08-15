import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen bg-blue-600 text-white content-center m-auto p-5">
      <div className="m-auto w-2/3 content-center text-center">
        <h1 className="font-vazir text-5xl p-2 mb-10">
          به <span className="text-gray-700">تسک های روزانه</span> خوش آمدید
        </h1>
        <p className="text-lg ">بیا و عضوی از ما باش</p>
        <p className="text-lg">
          <NavLink to="/register">عضویت </NavLink> / 
          <NavLink to="/login"> ورود </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Home;
