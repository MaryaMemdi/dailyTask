const LeftPanel = ({ title, description, label, handleClick }) => {
  return (
    <div className="bg-blue-600 text-white w-full md:w-1/2 p-10 content-center flex flex-col justify-center h-screen ">
      <h1 className="text-center font-extrabold text-5xl mb-20">{title}</h1>
      <p className="mb-10 text-xl text-center font-shabnam">{description}</p>
      <a
        href="#"
        className="flex text-white rounded-full w-auto px-5 py-2 border-2 border-solid border-white m-auto font-shabnam text-center"
        onClick={handleClick}
      >
        {label}
      </a>
    </div>
  );
};
export default LeftPanel;
