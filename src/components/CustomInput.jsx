import { useEffect, useRef, useState } from "react";

// for genral use of all inputs
const CustomInput = ({ type, value, name, label, onChange, errors }) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (errors === "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors]);
  return (
    <div className="p-2 w-full">
      <label>{label}</label>
      <input
        className={`w-full p-2  border-2 border-solid rounded-xl border-gray-800  ${
          errors ? "border-red-600 hover:none" : ""
        }${isValid ? "border-green-600 " : ""}
        hover:border-blue-700 focus:outline-none `}
        type={type}
        placeholder={label}
        value={value}
        name={name}
        onChange={onChange}
      />
      {errors && <p className="text-red-500 text-sm">{errors}</p>}
    </div>
  );
};

export default CustomInput;

//How can I go to the next input by pressing the enter button?
