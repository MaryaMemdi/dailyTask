import SimpleInput from "./simpleInput";

const SignIn = () => {
  return (
    <div className="w-80 items-center m-auto">
      <h1 className="font-sans font-bold text-black mb-3">ورود</h1>
      <p className="mt-0 mb-3 text-sm antialiased text-gray-400">
        با حساب خود وارد شوید
      </p>

      <div className="input">
        <SimpleInput type="email" placeHolder="ایمیل" />
      </div>

      <div className="input">
        <SimpleInput type="password" placeHolder="رمزعبور" />
      </div>
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
