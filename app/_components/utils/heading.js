const Heading = ({ children, length, translate }) => {
  return (
    <div>
      <h1 className="text-[34px] phone:text-heading">{children}</h1>
      <div className={`${length} h-[2px] bg-white -mt-1`}></div>
      <div className={`w-3 h-3 rounded-full -mt-2 bg-white ${translate}`}></div>
    </div>
  );
};

export default Heading;
