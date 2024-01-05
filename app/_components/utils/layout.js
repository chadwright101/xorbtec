const Layout = ({ children, cssClasses }) => {
  return (
    <div className={`max-w-[1400px] mx-[30px] desktop:mx-auto ${cssClasses}`}>
      {children}
    </div>
  );
};

export default Layout;
