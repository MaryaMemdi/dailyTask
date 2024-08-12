import { ToastContainer } from "react-toastify";
import LeftPanel from "../components/leftPanel";
import RightPanel from "../components/rightPanel";
import useFormValidation from "../hooks/useFormValidation";

const Register = () => {
  const { values, errors, handleChange, handleSubmit } = useFormValidation();
  return (
    <div className="flex flex-row m-auto content-center w-full h-screen">
      <LeftPanel
        title="خوش آمدید"
        description="برای برقراری ارتباط با ما لطفا حساب کاربری خود را ایجاد کنید
        "
        label="ورود"
      />
      <RightPanel
        title="ایجاد حساب"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        buttonTitle="عضویت"
        value={values}
        errors={errors}
      />
      <ToastContainer />
    </div>
  );
};

export default Register;
