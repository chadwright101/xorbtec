"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const BrandsSlider = ({ row1Data, row2Data, cssClasses }) => {
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 10,
          gap: "2rem",
          interval: 0,
          speed: 235000,
          direction: "rtl",
          drag: false,
          arrows: false,
          pauseOnHover: false,
          pagination: false,
        }}
        className={`${cssClasses}`}
      >
        {row1Data?.map(({ url, alt, whiteBackground }, index) => (
          <SplideSlide
            key={index}
            className={`h-[50px]  min-w-[108px] max-w-[108px] grid place-items-center ${
              whiteBackground && "bg-white p-2"
            }`}
          >
            <img
              src={`https://ik.imagekit.io/thewrightdesigns/xorbtec/brands/tr:h-75,q-60/${url}`}
              alt={alt}
              className="h-auto max-h-[50px] w-auto"
              width={100}
              height={50}
              loading="lazy"
            />
          </SplideSlide>
        ))}
      </Splide>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 10,
          gap: "2rem",
          interval: 0,
          speed: 375000,
          direction: "rtl",
          drag: false,
          arrows: false,
          pauseOnHover: false,
          pagination: false,
        }}
        className={`mt-10 ${cssClasses}`}
      >
        {row2Data?.map(({ url, alt, whiteBackground }, index) => (
          <SplideSlide
            key={index}
            className={`h-[50px]  min-w-[108px] max-w-[108px] grid place-items-center  ${
              whiteBackground && "bg-white p-2"
            }`}
          >
            <img
              src={`https://ik.imagekit.io/thewrightdesigns/xorbtec/brands/tr:h-60,q-60/${url}`}
              alt={alt}
              className="h-auto w-auto max-h-[50px]"
              width={100}
              height={50}
              loading="lazy"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BrandsSlider;
