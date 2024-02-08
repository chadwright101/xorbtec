import { useFormStatus } from "react-dom";

const Button = ({
  cssClasses,
  onClick,
  children,
  url,
  type,
  form,
  disabled,
}) => {
  const { pending } = useFormStatus();

  if (!form) {
    return (
      <button
        className={`${cssClasses}`}
        onClick={onClick}
        type={type || "button"}
      >
        <a
          href={url}
          className="font-prototype text-[24px] tabletLarge:text-[20px] text-blue py-3 px-12 bg-white drop-shadow-md border-[3px] border-black rounded-full tabletLarge:py-2 tabletLarge:px-8 tabletLarge:hover:bg-blue tabletLarge:hover:text-white tabletLarge:ease-in-out tabletLarge:duration-500"
          target="_blank"
        >
          {children}
        </a>
      </button>
    );
  } else {
    return (
      <button
        className={`font-prototype text-[24px] tabletLarge:text-[20px] text-blue py-3 px-12 bg-white drop-shadow-md border-[3px] border-black rounded-full tabletLarge:py-2 tabletLarge:px-8 ${
          !disabled
            ? " tabletLarge:hover:bg-blue tabletLarge:hover:text-white"
            : ""
        } tabletLarge:ease-in-out tabletLarge:duration-500 ${cssClasses}`}
        onClick={onClick}
        type={type || "button"}
        disabled={disabled || pending}
      >
        {pending ? (
          <div className="flex justify-center items-center h-[36px] w-[73px] tabletLarge:w-[61px] tabletLarge:h-[30px]">
            <div className="animate-spin h-6 w-6 border-t-2 border-blue-500 rounded-full"></div>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
};

export default Button;
