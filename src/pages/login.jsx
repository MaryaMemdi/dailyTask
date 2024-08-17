import { ToastContainer } from "react-toastify";
import LeftPanel from "../components/leftPanel";
import RightPanel from "../components/rightPanel";
import useFormValidation from "../hooks/useFormValidation";

const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useFormValidation();
  return (
    <div className="flex w-full flex-col  h-screen   sm:flex-row">
      <div className="flex flex-col w-full h-screen md:w-1/2 order-2 sm:order-1">
        
        <RightPanel
          title="ورود"
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={values}
          errors={errors}
          buttonTitle="ورود"
          fields={[
            { label: "نام کاربری", name: "userName", type: "text" },
            { label: "رمز عبور", name: "password", type: "password" },
          ]}
        />
      </div>
      <div className="order-1 w-full h-screen sm:order-2 md:w-1/2">
        <LeftPanel
          title="سلام دوست خوبم"
          label="عضویت"
          description="وارد حساب کاربری خود شوید و با ما به کشف جهان بپردازید"
          adress="/register"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

//how can i filter input
