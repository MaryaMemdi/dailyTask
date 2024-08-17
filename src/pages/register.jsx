import { ToastContainer } from "react-toastify";
import LeftPanel from "../components/leftPanel";
import RightPanel from "../components/rightPanel";
import useFormValidation from "../hooks/useFormValidation";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";

const Register = () => {
  const { values, errors, handleChange, handleSubmit } = useFormValidation();
  return (
    <div className="flex flex-col  w-full h-screen sm:flex-row ">
      <div className="flex flex-col w-full h-screen md:w-1/2 ">
        <NavLink to="/">
          <ImHome />
        </NavLink>
        <LeftPanel
          title="خوش آمدید"
          description="برای برقراری ارتباط با ما لطفا حساب کاربری خود را ایجاد کنید
          "
          label="ورود"
          adress="/login"
        />
      </div>
      <div className=" w-full h-screen md:w-1/2 ">
        <RightPanel
          title="ایجاد حساب"
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          buttonTitle="عضویت"
          value={values}
          errors={errors}
          fields={[
            { label: "نام ", name: "firstName", type: "text" },
            { label: "نام خانوادگی", name: "lastName", type: "text" },
            { label: "ایمیل", name: "email", type: "email" },
            { label: "رمز عبور", name: "password", type: "password" },
          ]}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
