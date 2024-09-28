"use client";

import { useState } from "react";

import useInView from "./utils/use-in-view";
import Heading from "./utils/heading";
import ImageComponent from "./utils/image-component";
import Layout from "./utils/layout";

const WhoWeAre = () => {
  const [inView, setInView] = useState(false);
  const handleInView = () => setInView(true);
  const elementRef = useInView(handleInView);
  return (
    <main className="py-20 max-w-[1550px] mx-auto bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:w-450,q-5/textured-background-1-mobile.png')] min-[450px]:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:w-800,q-5/textured-background-1-mobile.png')] bg-cover bg-center overflow-hidden tablet:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:w-1050,q-5/textured-background-1.png')] tabletLarge:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:w-1400,q-5/textured-background-1.png')]">
      <Layout>
        <div className="tabletLarge:grid grid-cols-[1fr_515px] gap-x-8 mb-10">
          <div>
            <ImageComponent
              file="logo-blue.png"
              alt="Xorbtec Computer Services logo"
              pictureCssClasses="opacity-[7%] flex justify-center"
              cssClasses="max-w-[295px] h-auto -mb-[290px] phone:hidden"
              smallest={295}
              phone={295}
              width={295}
              height={295}
            />
            <Heading
              length="w-[230px] phone:w-[264px]"
              translate="translate-x-[230px] phone:translate-x-[264px]"
            >
              Who We Are
            </Heading>
            <h3 className="text-[24px] mt-8 font-prototype">
              <span className="text-blue">Xorb</span>tec
            </h3>
            <p className=" font-code font-bold mt-4">noun /zorb.tec/</p>
            <p className="mt-4">
              1. A Gaming Oriented computer repair company located in
              Plettenberg Bay, South Africa. Specialising in Building
              Personalised Computers to suit you and your pocket. After sales
              service a priority.
            </p>
          </div>
          <ImageComponent
            file="shop-1a.png"
            cssClasses="-mr-[30px] h-auto w-auto my-10 tabletLarge:my-0 tabletLarge:w-[515px]"
            desktopSmall={600}
            desktop={600}
            alt="Xorbtec Computer Services - Shop"
            width={1000}
            height={600}
          />
        </div>
        <div className="tabletLarge:grid grid-cols-2 gap-x-8 items-center">
          <div
            ref={elementRef}
            className={
              inView
                ? "translate-x-0 opacity-100 ease-in-out duration-1000"
                : "-translate-x-full opacity-0"
            }
          >
            <ImageComponent
              file="laptop-11.png"
              cssClasses="hidden w-[684px] h-auto tabletLarge:block"
              alt="Xorbtec Computer Services - Laptop"
              desktopSmall={575}
              desktop={700}
              width={684}
              height={317}
            />
          </div>
          <div>
            <div className="grid grid-cols-2 tablet:flex justify-between gap-x-6 items-end tabletLarge:items-start">
              <div>
                <h4 className="mb-8">Services:</h4>
                <ul className="list-disc ml-4">
                  <li className="font-bold">Repairs</li>
                  <li className="font-bold">Networking</li>
                  <li className="font-bold">IT Retails</li>
                  <ul className="list-disc ml-8">
                    <li>Desktop</li>
                    <li>PCs</li>
                    <li>Laptops</li>
                    <li>Hardware</li>
                    <li>Software</li>
                    <li>Peripherals</li>
                    <li>Cables</li>
                    <li>Adapters</li>
                  </ul>
                </ul>
              </div>
              <div
                ref={elementRef}
                className={
                  inView
                    ? "translate-x-0 tablet:translate-y-0 opacity-100 ease-in-out duration-1000"
                    : "translate-x-full tablet:translate-x-0 tablet:translate-y-16 opacity-0"
                }
              >
                <ImageComponent
                  file="speakers-1.png"
                  cssClasses="max-w-[325px] h-auto translate-x-12 tablet:translate-x-0 tabletLarge:hidden"
                  smallest={325}
                  phone={325}
                  tablet={325}
                  tabletLarge={325}
                  alt="Xorbtec Computer Services - Speakers"
                  width={325}
                  height={301}
                />
              </div>
              <div className="col-span-2 my-10 tablet:my-0 desktop:flex gap-x-6">
                <ImageComponent
                  file="IMG_1591e.png"
                  cssClasses="w-full tablet:h-[300px] tabletLarge:h-[365px] max-w-[740px] tabletLarge:object-cover"
                  tabletLarge={200}
                  desktopSmall={250}
                  desktop={250}
                  alt="Xorbtec Computer Services - Shop"
                  width={740}
                  height={1110}
                />
                <ImageComponent
                  file="shop-3a.png"
                  cssClasses="hidden w-auto desktop:block desktop:h-[365px] desktop:object-cover"
                  tabletLarge={200}
                  desktopSmall={250}
                  desktop={250}
                  alt="Xorbtec Computer Services - Shop"
                  width={245}
                  height={365}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default WhoWeAre;
