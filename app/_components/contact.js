"use client";

import { useState } from "react";
import { lazy, Suspense } from "react";

import Heading from "./utils/heading";
import Layout from "./utils/layout";
import ContactForm from "./contact/contact-form";
import {
  showEmailAddress,
  showLanEmailAddress,
  showPhoneNumber,
} from "../actions";

const LazyContactMap = lazy(() => import("./contact/contact-map"));

const Contact = () => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showGeneralEmail, setShowGeneralEmail] =
    useState("Show email address");
  const [showLanEmail, setShowLanEmail] = useState("Show email address");
  const [hoverIcon, setHoverIcon] = useState("#FBF9FB");

  const handleShowPhoneNumber = async () => {
    const phoneNumber = await showPhoneNumber();
    setShowPhone(phoneNumber);
  };

  const handleShowEmailAddress = async () => {
    const emailAddress = await showEmailAddress();
    setShowGeneralEmail(emailAddress);
  };

  const handleShowLanEmailAddress = async () => {
    const emailAddress = await showLanEmailAddress();
    setShowLanEmail(emailAddress);
  };

  return (
    <section className="py-20 max-w-[1550px] mx-auto bg-[url('https://ik.imagekit.io/thewrightdesigns/xorbtec/graphics/tr:w-450,q-5/textured-background-4-mobile.png')] min-[450px]:bg-[url('https://ik.imagekit.io/thewrightdesigns/xorbtec/graphics/tr:w-800,q-5/textured-background-4-mobile.png')] bg-cover bg-center overflow-hidden tablet:bg-[url('https://ik.imagekit.io/thewrightdesigns/xorbtec/graphics/tr:w-1050,q-5/textured-background-4.png')] tabletLarge:bg-[url('https://ik.imagekit.io/thewrightdesigns/xorbtec/graphics/tr:w-1400,q-5/textured-background-4.png')]">
      <Layout cssClasses="desktopSmall:grid grid-cols-2 gap-x-10">
        <div>
          <Heading
            length="w-[215px] phone:w-[251px]"
            translate="translate-x-[215px] phone:translate-x-[251px]"
          >
            Contact Us
          </Heading>
          <ul className="flex flex-col gap-8 mt-10">
            <li className="grid gap-2 tablet:gap-0 tablet:grid-cols-[240px_1fr]">
              <h6 className="text-[22px]">Tel:</h6>
              {showPhone === "Show phone number" ? (
                <button
                  className="text-[22px] mr-auto tablet:hover:underline underline-offset-8"
                  onClick={handleShowPhoneNumber}
                >
                  {showPhone}
                </button>
              ) : (
                <a
                  href={`tel:${showPhone}`}
                  className="text-[22px] p-3 -m-3 tabletLarge:m-0 tabletLarge:p-0 tabletLarge:hover:text-blue ease-in-out duration-300 mr-auto"
                >
                  {showPhone}
                </a>
              )}
            </li>
            <li className="grid gap-2 tablet:gap-0 tablet:grid-cols-[240px_1fr]">
              <h6 className="text-[22px]">General Enquiries:</h6>
              {showGeneralEmail === "Show email address" ? (
                <button
                  className="text-[22px] mr-auto tablet:hover:underline underline-offset-8"
                  onClick={handleShowEmailAddress}
                >
                  {showGeneralEmail}
                </button>
              ) : (
                <a
                  href={`mailto:${showGeneralEmail}`}
                  className="text-[22px] p-3 -m-3 tabletLarge:m-0 tabletLarge:p-0 tabletLarge:hover:text-blue ease-in-out duration-300 mr-auto"
                >
                  {showGeneralEmail}
                </a>
              )}
            </li>
            <li className="grid gap-2 tablet:gap-0 tablet:grid-cols-[240px_1fr]">
              <h6 className="text-[22px]">LAN Enquiries:</h6>
              {showLanEmail === "Show email address" ? (
                <button
                  className="text-[22px] mr-auto tablet:hover:underline underline-offset-8"
                  onClick={handleShowLanEmailAddress}
                >
                  {showLanEmail}
                </button>
              ) : (
                <a
                  href={`mailto:${showLanEmail}`}
                  className="text-[22px] p-3 -m-3 tabletLarge:m-0 tabletLarge:p-0 tabletLarge:hover:text-blue ease-in-out duration-300 mr-auto"
                >
                  {showLanEmail}
                </a>
              )}
            </li>
            <li className="grid gap-2 tablet:gap-0 tablet:grid-cols-[240px_1fr]">
              <h6 className="text-[22px]">Address:</h6>
              <address className="text-[22px] flex flex-col text-left">
                3, Beacon Island Center, Beacon Isle Drive, Plettenberg Bay,
                6600
              </address>
            </li>
            <ul className="items-start gap-8 flex flex-col phone:grid tablet:grid-cols-[205px_1fr] place-items-start phone:items-center">
              <li>
                <a
                  href="https://www.facebook.com/Xorbtec/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="60px"
                    height="60px"
                    fill={hoverIcon}
                    onMouseEnter={() => setHoverIcon("#0DB8EC")}
                    onMouseLeave={() => setHoverIcon("#FBF9FB")}
                    className="-ml-1 tablet:w-[54px] h-auto"
                    aria-label="Facebook"
                  >
                    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="http://get.teamviewer.com/xorbtec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/xorbtec/logo/teamviewer-logo.png"
                    alt="Team Viewer logo"
                    height={60}
                    width={264}
                    className="h-[48px] w-auto tabletLarge:hover:opacity-80 ease-in-out duration-300 tablet:h-[48px]"
                    loading="lazy"
                  />
                </a>
              </li>
              <li className="col-span-2">
                <p>Join our Xorbtec Gaming Tribe Discord Channel!</p>
                <a
                  href="https://discord.gg/SQjEfm9aqj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/xorbtec/discord-branding-2.png"
                    alt="Discord logo"
                    width={200}
                    height={100}
                    className="-ml-2 tabletLarge:hover:opacity-80 ease-in-out duration-300"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </ul>
          <hr className="my-12" />
          <h6>Get in touch...</h6>
          <ContactForm cssClasses="mt-8 mb-16" />
        </div>
        <Suspense
          fallback={
            <div
              className={
                "border-2 bg-white text-black border-black text-[30px] grid place-items-center py-16 w-full h-full"
              }
            >
              Map loading...
            </div>
          }
        >
          <LazyContactMap cssClasses="w-full h-[400px] phone:h-[450px] tablet:h-[500px] tabletLarge:h-full" />
        </Suspense>
      </Layout>
    </section>
  );
};

export default Contact;
