"use client";

import { useState } from "react";

import useInView from "./utils/use-in-view";
import Heading from "./utils/heading";
import Layout from "./utils/layout";

import data from "../_data/general-data.json";
import BrandsSlider from "./utils/brands-slider";
import ImageComponent from "./utils/image-component";

const {
  images: {
    brands: { row1, row2 },
  },
} = data;

const OurBrands = () => {
  const [inView, setInView] = useState(false);
  const handleInView = () => setInView(true);
  const elementRef = useInView(handleInView);
  return (
    <section className="py-20 bg-cover bg-center overflow-hidden max-w-[1550px] mx-auto bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:w-425,q-45/textured-background-mobile.png')] phone:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:w-800,q-45/textured-background-mobile.png')] tablet:h-[520px] tablet:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:w-1050,q-25/textured-background.png')] tabletLarge:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:w-1400,q-45/textured-background.png')]">
      <Layout cssClasses="mb-10">
        <Heading
          length="w-[230px] phone:w-[264px]"
          translate="translate-x-[230px] phone:translate-x-[264px]"
        >
          Our Brands
        </Heading>
      </Layout>
      <BrandsSlider
        row1Data={row1}
        row2Data={row2}
        cssClasses="tablet:w-3/4 min-[1550px]:ml-[75px]"
      />
      <div className="tablet:-translate-y-32" ref={elementRef}></div>
      <ImageComponent
        file="laptop-22.png"
        alt="Our Brands - Xorbtec Computer Services"
        width={800}
        height={550}
        pictureCssClasses={`flex justify-center mt-10 ${
          inView
            ? "translate-x-0 ease-in-out duration-1000"
            : "-translate-x-full tablet:translate-x-full"
        }`}
        cssClasses="max-w-[500px] max-h-[382px] -translate-x-40 tablet:translate-x-72 tablet:-translate-y-[300px] tabletLarge:translate-x-0 tabletLarge:-mr-[600px] desktopSmall:-mr-[680px] min-[1350px]:-mr-[750px] desktop:-mr-[900px]"
        smallest={550}
        phone={550}
        tablet={550}
        tabletLarge={550}
        desktopSmall={550}
        desktop={550}
      />
    </section>
  );
};

export default OurBrands;
