

const LeftPanel = ({ title, description, label, adress }) => {
  return (
    <div className="bg-blue-600 text-white w-full  p-10 content-center flex flex-col justify-center h-screen  ">
      <h1 className="text-center font-extrabold text-5xl mb-20 m-10">
        {title}
      </h1>
      <p className="mb-10 text-xl text-center font-shabnam">{description}</p>
    </div>
  );
};
export default LeftPanel;
