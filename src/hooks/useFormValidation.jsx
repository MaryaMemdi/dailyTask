// Validates user input for first name, last name, email, and password.
// Returns an object containing any validation errors.

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useFormValidation = () => {
  //Initialize form state with empty values
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  // Initialize state for validation errors
  const [errors, setErrors] = useState({});

  //regex
  const userNameRegex = /^[A-z0-9\-]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // Function to perform form validation
  const validate = () => {
    // Create an empty object to store errors
    let errors = {};

    //check for empty username
    if (!values.userName.trim()) {
      errors.userName = "وارد کردن نام کاربری الزامی است";
    } else if (!userNameRegex.test(values.userName)) {
      errors.userName = "نام کاربری نامعتبر است";
    } else {
      errors.userName = "";
    }
    // Check for empty password
    if (!values.password.trim()) {
      errors.password = "وارد کردن رمز عبور الزامی است";
    }
    // Check for minimum password length
    else if (values.password.length < 6) {
      errors.password = "رمز عبور باید حداقل شامل 6 حرف باشد";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "رمزعبور باید شامل حرف بزرگ،کوچک و علائم باشد";
    } else {
      errors.password = "";
    }
    // Return the object containing any validation errors
    return errors;
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are no errors
    const ValidationErrors = validate();
    setErrors(ValidationErrors);

    // Show error toast notification
    if (
      Object.keys(ValidationErrors).length === 0 ||
      errors.password === "" ||
      errors.userName === ""
    ) {
      toast.success("فرم با موفقیت ارسال شد");
    } else {
      toast.error("لطفا فرم را کامل پر کنید");
    }
  };
  // Return form state, errors, and event handlers
  return { values, errors, handleChange, handleSubmit };
};
export default useFormValidation;
