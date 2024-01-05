"use client";

import { useState } from "react";

import useInView from "../../utils/use-in-view";

import data from "../../../_data/general-data.json";
import { scrollIntoView } from "./desktop-header";
import { usePathname } from "next/navigation";

const { navigation } = data;

const MobileHeader = ({ cssClasses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [inView, setInView] = useState(false);
  const handleInView = () => setInView(true);
  const elementRef = useInView(handleInView);
  return (
    <header className="bg-black pt-6 z-20 mb-8 tabletLarge:hidden">
      <div className="mx-[30px] max-w-[1400px] flex justify-between items-center overflow-hidden">
        <a
          className={`flex items-center gap-x-4 ${
            inView
              ? "translate-y-0 opacity-100 ease-in-out duration-[750ms]"
              : "translate-y-full opacity-0"
          }`}
          href="/"
          ref={elementRef}
        >
          <div>
            <h1 className="text-[34px] phone:text-[48px]">
              <span className="text-blue">Xorb</span>tec
            </h1>
            <img
              src="/icons/dashed-lines-mobile.png"
              alt="Dashed lines"
              className="phone:hidden -mt-[5px] mb-1"
              width={142}
              height={2}
            />
            <img
              src="/icons/dashed-lines-tablet.png"
              alt="Dashed lines"
              className="hidden phone:block -mt-2 mb-1"
              width={201}
              height={2}
            />
            <h3 className="text-[15.5px] phone:text-[21.8px] font-code">
              Computer Services
            </h3>
          </div>
        </a>
        {pathname === "/" ? (
          <div className={`${cssClasses}`}>
            <div onClick={() => setIsOpen(true)} className="p-6 -m-6 z-10">
              <img
                src="/icons/menu-icon.svg"
                alt="Open menu"
                width={37}
                height={25}
              />
            </div>
            <nav
              className={`fixed bg-black top-0 left-0 px-[30px] pt-28 w-full h-screen flex justify-between ease-in-out duration-500 overflow-hidden z-40  ${
                !isOpen ? " -translate-y-full" : ""
              }`}
            >
              <ul className="flex flex-col gap-y-8">
                {navigation.map(
                  ({ title, url }, index) =>
                    index >= 1 && (
                      <li
                        key={index}
                        className=" text-subheading font-code font-bold p-4 -m-4 hover:cursor-pointer"
                        onClick={() => {
                          setIsOpen(false);
                          scrollIntoView(url);
                        }}
                      >
                        {title}
                      </li>
                    )
                )}
              </ul>
              <div onClick={() => setIsOpen(false)} className="p-6 -m-6">
                <img
                  src="/icons/close-icon.svg"
                  alt="Close menu"
                  className="translate-x-1.5 -translate-y-[62px]"
                  width={48}
                  height={48}
                />
              </div>
            </nav>
          </div>
        ) : (
          <a
            href="/"
            className="text-subheading font-prototype uppercase -m-4 p-4 hover:text-blue"
          >
            Back
          </a>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
