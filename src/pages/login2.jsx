import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
let initialValues = { email: "", password: "" };
const signinSchema = yup.object().shape({
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password: yup
    .string()
    .min(8, "رمز عبور باید حداقل هشت کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

const SignIn = () => {
  const [passLength, setPassLength] = useState(0);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signinSchema}
      onSubmit={(value) => console.log(value)}
    >
      {({ handleChange, error, touched }) => (
        <Form>
          <Field
            type="email"
            name="email"
            className={`w-full p-2  border-2 border-solid rounded-xl
            hover:border-blue-700 ${error? "border-error" : "border-gray-900"} `}
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
          <Field
            type="password"
            name="password"
            onChange={handleChange}
            className={`w-full p-2  border-2 border-solid rounded-xl
            hover:border-blue-700 ${
              passLength.length <= 8 ? "border-red-600" : ""
            } `}
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
          <button
            type="submit"
            className=" flex bg-blue-600 text-white rounded-lg w-auto px-5 py-2   m-auto font-shabnam text-center"
          >
            ورود
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignIn;
