"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const ReviewsSlider = ({ reviews, cssClasses }) => {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        gap: "2rem",
        interval: 5000,
        speed: 1000,
        drag: true,
        arrows: true,
        pauseOnHover: true,
        pagination: false,
        dragMinThreshold: 100,
        breakpoints: {
          1049: {
            arrows: false,
          },
        },
      }}
      className={`${cssClasses}`}
    >
      {reviews.map(({ name, review }, index) => {
        return (
          <SplideSlide key={index}>
            <blockquote className="font-myriadpro text-black">
              "{review}"
              <br />
              <br />
              <cite className="font-code font-bold">{name}</cite>
            </blockquote>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default ReviewsSlider;
