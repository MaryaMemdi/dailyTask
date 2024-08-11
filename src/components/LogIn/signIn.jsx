import { useEffect, useState } from "react";
import SimpleInput from "./simpleInput";
import useEmailValidation from "./hooks/useEmailValiation";

const SignIn = () => {
  // const { value, error, handleChange } = useEmailValidation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pass, setPass] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [error, setError] = useState("");

  const validatedEmail = () => {
    if (!email.includes("@")) {
      setEmailError("ایمیل نامعتبر");
    } else {
      setEmailError("");
    }
    if (pass.length < 6) {
      setErrorPass("رمز عبور کوتاه است");
    } else {
      setErrorPass("");
    }
  };
  useEffect(() => {
    validatedEmail();
  }, []);

  return (
    <div className="w-80 items-center m-auto">
      <h1 className="font-sans font-bold text-black mb-3">ورود</h1>
      <p className="mt-0 mb-3 text-sm antialiased text-gray-400">
        با حساب خود وارد شوید
      </p>

      <div className="input">
        <SimpleInput
          type="email"
          value={email}
          placeHolder="ایمیل"
          handleChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {emailError && <p className="error">{emailError}</p>}

      <div className="input">
        <SimpleInput
          type="password"
          value={pass}
          placeHolder="رمزعبور"
          handleChange={(e) => setPass(e.target.value)}
        />
      </div>
      {errorPass && <p className="error">{errorPass}</p>}
      <a href="#" className="text-gray-700 font-thin -mt-5">
        رمز خود را فراموش کرده اید؟
      </a>
      <br />

      <SimpleInput type="checkbox" lableText="مرا به خاطر بسپار" />
      <div className="submit">
        <SimpleInput type="submit" value="ورود" />
      </div>
    </div>
  );
};
export default SignIn;
