import CustomInput from "./CustomInput";

const RightPanel = ({
  title,
  handleSubmit,
  buttonTitle,
  handleChange,
  value,
  errors,
  fields,
}) => {
  const inputs = [ ...fields ];

  return (
    <div className="w-full md:w-1/2 p-5 m-auto flex flex-col justify-center text-black content-center h-screen">
      <h1 className="text-5xl mt-0 font-bold font-vazir">{title}</h1>
      <br />
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <CustomInput
            key={input.name}
            name={input.name}
            type={input.type}
            lable={input.label}
            value={value[input.name]}
            onChange={handleChange}
            errors={errors[input.name]}
          />
        ))}
        <button className=" flex bg-blue-600 text-white rounded-lg w-auto px-5 py-2   m-auto font-shabnam text-center">
          {buttonTitle}
        </button>
      </form>
    </div>
  );
};

export default RightPanel;
