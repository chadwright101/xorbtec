"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import useInView from "../../utils/use-in-view";

import data from "../../../_data/general-data.json";
import GradientBar from "@/app/_components/utils/gradient-bar";
import Link from "next/link";

const { navigation } = data;

export const scrollIntoView = (section) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const DesktopHeader = () => {
  const pathname = usePathname();
  const [inView, setInView] = useState(false);
  const handleInView = () => setInView(true);
  const elementRef = useInView(handleInView);
  return (
    <header className="fixed w-full bg-black z-20 pt-2 hidden tabletLarge:block">
      <div className="max-w-[1550px] mx-auto">
        <GradientBar cssClasses="fixed" leftToRight />
        <GradientBar cssClasses="fixed translate-x-[1475px]" />
      </div>
      <div className="mx-[30px] max-w-[1400px] flex justify-between items-end desktop:mx-auto overflow-hidden">
        <Link
          className={`flex items-center gap-x-4 hover:opacity-90 hover:scale-[98%] ease-in-out duration-300 ${
            inView
              ? "translate-y-0 opacity-100 ease-in-out duration-[750ms]"
              : "translate-y-full opacity-0"
          }`}
          href="/"
          ref={elementRef}
        >
          <Image
            src="https://ik.imagekit.io/thewrightdesigns/tr:ar-1-1,h-116/logo-blue.png"
            alt="Xorbtec logo"
            className="h-[58px] w-auto translate-y-1"
            loading="eager"
            width={58}
            height={58}
          />
          <div>
            <h1 className="text-[36px]">
              <span className="text-blue">Xorb</span>tec
            </h1>
            <Image
              src="/icons/dashed-lines-desktop.png"
              alt="Dashed lines"
              className="-mt-1 mb-1"
              width={151}
              height={2}
            />
            <h3 className="font-code text-[16.05px] font-bold">
              Computer Services
            </h3>
          </div>
        </Link>
        {pathname === "/" ? (
          <nav>
            <ul className="flex gap-x-6">
              {navigation.map(({ title, url }, index) => (
                <li
                  key={index}
                  className="font-code font-bold hover:text-blue hover:cursor-pointer"
                  onClick={() => scrollIntoView(url)}
                >
                  {title}
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <Link
            href="/"
            className="text-subheading font-prototype uppercase hover:text-blue"
          >
            Back
          </Link>
        )}
      </div>
      <hr className="max-w-[1550px] desktop:mx-auto bg-blue h-[2px] text-blue -mx-[30px] mt-2" />
    </header>
  );
};

export default DesktopHeader;
