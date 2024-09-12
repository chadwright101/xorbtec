"use client";

import { useState } from "react";

import useInView from "./utils/use-in-view";
import { scrollIntoView } from "./navigation/header/desktop-header";
import ImageComponent from "./utils/image-component";
import Layout from "./utils/layout";
import Image from "next/image";

const Hero = () => {
  const [inView, setInView] = useState(false);
  const handleInView = () => setInView(true);
  const elementRef = useInView(handleInView);

  return (
    <section className="tabletLarge:pt-[115px] h-[685px] min-[350px]:h-[725px] phone:h-[760px] w-full max-w-[1550px] mx-auto bg-[url('https://ik.imagekit.io/thewrightdesigns/xorbtec/graphics/tr:h-760,q-1/textured-background-4-mobile.png')] bg-cover bg-center overflow-hidden tablet:h-[480px] tablet:bg-[url('https://ik.imagekit.io/thewrightdesigns/xorbtec/graphics/tr:w-1050,q-1/textured-background-4.png')] tabletLarge:h-[701px] tabletLarge:bg-[url('https://ik.imagekit.io/thewrightdesigns/xorbtec/graphics/tr:w-1400,q-1/textured-background-4.png')] desktop:h-[790px]">
      <div className="tablet:flex flex-col items-center tablet:pt-8">
        <div className="tablet:flex">
          <div
            ref={elementRef}
            className={
              inView
                ? "translate-x-0 ease-in-out duration-[2250ms]"
                : "-translate-x-full tablet:translate-x-0"
            }
          >
            <Layout
              cssClasses={`translate-y-[460px] min-[350px]:translate-y-[480px] phone:translate-y-[500px] max-w-[246px]
             mx-auto min-[350px]:-translate-x-2 min-[350px]:max-w-[290px] phone:max-w-[329px] tablet:translate-y-[120px] tablet:mx-0 tablet:translate-x-0 tablet:min-w-[430px] tablet:ml-10 tabletLarge:min-w-[483px] tabletLarge:translate-y-[185px] desktop:min-w-[724px]`}
            >
              <h2 className="-translate-y-[95px] text-[46px] hero-fallback leading-[3.5rem] min-[350px]:text-[54px] min-[350px]:leading-[4rem] phone:text-[61px] phone:leading-[4.5rem] tablet:leading-[5.5rem] tablet:text-[80px] tabletLarge:text-[90px] tabletLarge:leading-[6rem] desktop:text-[135px] desktop:leading-[8.25rem]">
                Your Preferred{" "}
                <span className="font-bold text-blue">IT Supplier</span>
              </h2>
              <h6 className="font-code font-bold text-[20px] -translate-y-[97px] text-right tablet:hidden">
                Est 2012
              </h6>
            </Layout>
          </div>
          <div className="tablet:z-10">
            <h6 className="hidden font-code font-bold text-[30px] text-right tablet:block absolute tablet:translate-y-[285px] tablet:-translate-x-[110px] tabletLarge:text-[40px] tabletLarge:translate-y-[380px] tabletLarge:-translate-x-[145px] desktop:text-[45px] desktop:-translate-x-[165px] desktop:translate-y-[475px] z-10">
              Est 2012
            </h6>
            <div
              ref={elementRef}
              className={
                inView
                  ? "mt-0 opacity-100 tablet:translate-x-0 ease-in-out duration-1000"
                  : "mt-[500px] tablet:translate-x-full tablet:mt-0 tablet:mb-0 tablet:translate-y-0 opacity-0"
              }
            >
              <ImageComponent
                file="laptop-3.png"
                upToTabletFile="laptop-3-with-lines.png"
                pictureCssClasses="flex justify-center -mt-[475px] tablet:mt-0 tablet:block tablet:-ml-[120px] tabletLarge:-ml-[150px] desktop:-ml-[155px]"
                cssClasses="min-w-[800px] ml-2 tablet:min-w-[450px] tablet:ml-0 tablet:max-w-[450px] tabletLarge:min-w-[450px] tabletLarge:max-w-[600px] desktop:min-w-[725px] desktop:max-w-[725px] h-auto"
                alt="Xorbtec Computer Services - Laptop"
                smallest={800}
                phone={800}
                tablet={800}
                tabletLarge={475}
                desktopSmall={600}
                desktop={725}
                loading="eager"
                width={800}
                height={726}
              />
            </div>
          </div>
        </div>
      </div>
      <picture className="w-full grid place-items-center mt-[150px] min-[350px]:mt-[170px] tablet:-mt-16 tablet:-ml-[160px] tabletLarge:-mt-[110px] tabletLarge:-ml-[230px] desktop:-ml-[295px]">
        <a
          href={undefined}
          onClick={() => scrollIntoView("who-we-are")}
          className="hover:cursor-pointer"
        >
          <Image
            src="/icons/down-arrows.svg"
            alt="Down arrows icon"
            className="w-[40px] h-[43px] animate-bounce"
            height={43}
            width={40}
          />
        </a>
      </picture>
    </section>
  );
};

export default Hero;
