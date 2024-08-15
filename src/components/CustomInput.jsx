import { useEffect, useState } from "react";

// for genral use of all inputs
const CustomInput = ({ type, value, name, lable, onChange, errors }) => {
  const [isValid, setIsValid] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);
  useEffect(() => {
    if (type === "password") {
      setPasswordLength(value.length);
    }
  }, [value, type]);
  useEffect(() => {
    if (errors === "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors]);
  return (
    <div className="p-2 w-full">
      <input
        className={`w-full p-2  border-2 border-solid rounded-xl border-gray-800  ${
          errors ? "border-red-600" : ""
        }${isValid ? "border-green-600" : ""}${
          passwordLength < 6 ? "border-gray-700" : "border-green-700"
        }
        hover:border-blue-700 forced-colors:none `}
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
