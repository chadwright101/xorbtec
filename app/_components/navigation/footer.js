const Footer = () => {
  return (
    <>
      <div className="h-[5px] mb-14 w-full bg-white tablet:mb-8 max-w-[1550px] desktop:mx-auto"></div>
      <footer className="pb-8 mx-[30px] max-w-[1400px] tablet:flex tablet:justify-between tablet:items-center desktop:mx-auto">
        <div>
          <img
            src="https://ik.imagekit.io/thewrightdesigns/xorbtec/logo/tr:ar-1-1,h-116/logo-white.png"
            alt="Xorbtec logo"
            className="h-[60px] w-auto hidden tablet:block"
            width={60}
            height={60}
            loading="lazy"
          />
          <p className="text-[14px] gap-2 mt-4 hidden tablet:flex">
            Designed & developed by:
            <a
              href="https://www.thewrightdesigns.co.za"
              target="_blank"
              className="-m-4 p-4 tabletLarge:m-0 tabletLarge:p-0 text-blue text-[14px] tablet:hover:underline underline-offset-4"
            >
              The Wright Designs
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center tablet:gap-0">
          <h2 className="text-[32px] tablet:-mb-2">
            <span className="text-blue">Xorb</span>tec
          </h2>
          <hr className="w-[54px] mb-1 tablet:hidden" />
          <a
            href="https://www.xorbtec.co.za"
            className="-m-2 p-2 tabletLarge:m-0 tabletLarge:p-0 tablet:place-self-end"
          >
            www.xorbtec.co.za
          </a>
          <hr className="w-[54px] mt-1.5 mb-2 tablet:hidden" />
          <a
            href="/terms-and-conditions"
            className="-m-2 p-2 tabletLarge:m-0 tabletLarge:p-0 text-blue text-[16px] tablet:place-self-end"
          >
            Terms & Conditions
          </a>
          <hr className="w-[54px] mt-1.5 mb-1.5 tablet:hidden" />
          <div className="grid place-items-center gap-1 tablet:hidden">
            <p className="text-[14px]">Designed & developed by:</p>
            <a
              href="https://www.thewrightdesigns.co.za"
              target="_blank"
              className="-m-4 p-4 text-blue text-[14px] tabletLarge:m-0 tabletLarge:p-0"
            >
              The Wright Designs
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
