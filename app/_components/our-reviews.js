"use client";

import { useState } from "react";

import useInView from "./utils/use-in-view";
import Heading from "./utils/heading";
import Layout from "./utils/layout";
import Button from "./utils/button";
import ReviewsSlider from "./utils/reviews-slider";
import ImageComponent from "./utils/image-component";

import data from "../_data/general-data.json";

const { reviews } = data;

const OurReviews = () => {
  const [inView, setInView] = useState(false);
  const handleInView = () => setInView(true);
  const elementRef = useInView(handleInView);

  return (
    <article className="pt-20 -left tabletLarge:grid grid-cols-2 gap-10 tabletLarge:mx-[30px] max-w-[1400px] desktop:mx-auto overflow-hidden">
      <div className="tabletLarge:order-1">
        <Layout cssClasses="tabletLarge:mx-0">
          <Heading
            length="w-[240px] phone:w-[277px]"
            translate="translate-x-[240px] phone:translate-x-[277px]"
          >
            Our Reviews
          </Heading>
        </Layout>
        <div className="bg-white px-[30px] py-10 my-10" ref={elementRef}>
          <ReviewsSlider reviews={reviews} cssClasses="mb-10" />
          <div className="flex justify-center">
            <Button url="https://www.google.com/search?q=xorbtec&oq=xorbtec+&aqs=chrome.0.69i59jhttps://www.google.com/search?q=xorbtec+plettenberg+bay#lrd=0x1e78e27294d860e7:0xa3ffeeb04efd36,1,,,,">
              View More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <ImageComponent
          file="shop-4b.png"
          alt="Storefront - Xorbtec Computer Services"
          width={680}
          height={306}
          pictureCssClasses={`hidden tabletLarge:block h-[200px] ${
            inView
              ? "translate-x-0 opacity-100 ease-in-out duration-[750ms]"
              : "-translate-x-full opacity-0"
          }`}
          cssClasses="w-full"
          desktopSmall={550}
          desktop={680}
        />
        <div
          ref={elementRef}
          className={
            inView
              ? "tablet:translate-y-0 opacity-100 ease-in-out duration-[1150ms]"
              : "tablet:translate-y-16 opacity-0"
          }
        >
          <ImageComponent
            file="device-1a.png"
            alt="PC unit - Xorbtec Computer Services"
            width={800}
            height={868}
            pictureCssClasses="flex flex-col items-center overflow-hidden"
            cssClasses="max-w-[400px] phone:max-w-[550px] tablet:max-w-[800px] tabletLarge:max-w-[400px]"
            smallest={400}
            tablet={550}
            tabletLarge={800}
          />
        </div>
      </div>
    </article>
  );
};

export default OurReviews;
