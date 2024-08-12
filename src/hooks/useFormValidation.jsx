// Validates user input for first name, last name, email, and password.
// Returns an object containing any validation errors.

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useFormValidation = () => {
  //Initialize form state with empty values
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // Initialize state for validation errors
  const [errors, setErrors] = useState({});
  // Function to perform form validation
  const validate = () => {
    // Create an empty object to store errors
    let errors = {};
    // Check for empty first name
    if (!values.firstName.trim()) {
      errors.firstName = "وارد کردن نام الزامی است";
    }
    // Check for empty last name
    if (!values.lastName.trim()) {
      errors.lastName = "وارد کردن نام خانوادگی الزامی است";
    }
    // Check for empty email
    if (!values.email.trim()) {
      errors.email = "وارد کردن ایمیل الزامی است";
    }
    // Check for valid email format
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "ایمیل نامعتبر است";
    }
    // Check for empty password
    if (!values.password.trim()) {
      errors.password = "وارد کردن رمز عبور الزامی است";
    }
    // Check for minimum password length
    else if (values.password.length < 6) {
      errors.password = "رمز عبور باید حداقل شامل 6 حرف باشد";
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
    if (Object.keys(ValidationErrors).length === 0) {
      toast.success("فرم با موفقیت ارسال شد");
    } else {
      toast.error("لطفا فرم را کامل پر کنید");
    }
  };
  // Return form state, errors, and event handlers
  return { values, errors, handleChange, handleSubmit };
};
export default useFormValidation;
