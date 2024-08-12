import { ToastContainer } from "react-toastify";
import LeftPanel from "../components/leftPanel";
import RightPanel from "../components/rightPanel";
import useFormValidation from "../hooks/useFormValidation";

const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useFormValidation();
  return (
    <div className="flex w-full flex-row  h-screen">
      <div className="flex flex-col w-full h-screen md:w-1/2">
        <RightPanel
          title="ورود"
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={values}
          errors={errors}
          buttonTitle="ورود"
        />
        <a className="flex flex-row p-3
        text-left mb-10 justify-end font-shabnam text-gray-700" href="#" >
          رمز عبور خود را فراموش کردید؟
        </a>
      </div>
      <LeftPanel
        title="سلام دوست خوبم"
        label="عضویت"
        description="وارد حساب کاربری خود شوید و با ما به کشف جهان بپردازید"
      />
      <ToastContainer/>
    </div>
  );
};

export default Login;
