// for genral use of all inputs
const CustomInput = ({
  type,
  value,
  name,
  lable,
  onChange,
  errors,
  id,
  isValid
}) => {
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
        id={id}
        
        
      />
      {errors && <p className="text-red-500 text-sm">{errors}</p>}
      
    </div>
  );
};

export default CustomInput;
