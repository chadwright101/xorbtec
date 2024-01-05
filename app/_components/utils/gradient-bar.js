const GradientBar = ({ cssClasses, leftToRight }) => {
  return (
    <div
      className={`hidden min-[1550px]:block ${
        leftToRight ? "bg-gradient-to-r" : "bg-gradient-to-l"
      }  from-black to-transparent h-screen w-[75px] ${cssClasses}`}
    ></div>
  );
};

export default GradientBar;
