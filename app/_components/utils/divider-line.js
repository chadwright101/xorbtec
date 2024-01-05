const DividerLine = ({ rightToLeft, cssClasses }) => {
  return (
    <div
      className={`w-full h-[5px] ${
        rightToLeft
          ? "bg-gradient-to-l from-white to-blue"
          : "bg-gradient-to-r from-white to-blue"
      } ${cssClasses}`}
    ></div>
  );
};

export default DividerLine;
