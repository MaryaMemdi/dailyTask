const SimpleInput = ({ type, placeHolder, value, name, lableText }) => {
  return (
    <>
      <label className="text-black font-medium ">
        <input
          // className="border-gray-500 rounded-md hover:border-blue-700 border-solid"
          type={type}
          placeholder={placeHolder}
          value={value}
          name={name}
        />
        {lableText}
      </label>
    </>
  );
};

export default SimpleInput;
