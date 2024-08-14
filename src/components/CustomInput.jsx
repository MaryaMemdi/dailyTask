import { useState } from "react";

// for genral use of all inputs
const CustomInput = ({ type, value, name, lable, onChange, errors }) => {
  // const [inputValue, setInputValue] = useState("");
  // const [valid, setvalid] = useState(false);
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  //   setvalid(false);
  // };
  // const handleBlur = () => {
  //   if (valid) {
  //     setvalid(true);
  //   }
  // };
  // let borderColor = "border-gray-300";
  // if (!valid) {
  //   borderColor = "border-red-500";
  // } else {
  //   borderColor = "border-green-500";
  // }
  return (
    <div className="p-2 w-full">
      <input
        className={`w-full p-2  border-2 border-solid rounded-xl border-gray-800  ${
          errors ? "invalid: border-red-500" : " "
        }
        hover:border-blue-700 `}
        type={type}
        placeholder={lable}
        value={value}
        name={name}
        onChange={onChange}
        
      />
      {errors && <p className="text-red-500 text-sm">{errors}</p>}
    </div>
  );
};

export default CustomInput;
// problem with change border color for password and other
//you use not Isvalid
//please morgen try harder
