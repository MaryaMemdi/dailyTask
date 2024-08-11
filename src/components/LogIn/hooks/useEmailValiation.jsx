import { useEffect, useState } from "react";

const useEmailValidation = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    setError("");
  };
  
  return { value, error, handleChange };
};
export default useEmailValidation;
