"use client";

import { useState } from "react";

import classNames from "classnames";
import Button from "../utils/button";

const inputStyles =
  "bg-white text-[20px] text-black placeholder-black/75 border-[3px] border-blue italic px-2 py-1 focus:bg-blue focus:placeholder-black focus:not-italic focus:text-white";

const ContactForm = ({ cssClasses }) => {
  const [showName, setShowName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className={classNames(`${cssClasses}`, {
        "tabletLarge:row-span-2": showName,
      })}
    >
      <section>
        <form
          action="https://formsubmit.co/755ff4c1c39fc0732bfe193e1513ef66"
          method="POST"
          className="flex flex-col gap-8"
        >
          <input type="hidden" name="_gotcha" className="hidden" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[22px] font-bold">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Email address"
                className={inputStyles}
              />
            </div>
            {!showMessage && !showName ? (
              <Button
                form
                onClick={() => setShowName(true)}
                cssClasses="mr-auto mt-4 tabletLarge:mt-0"
              >
                Next
              </Button>
            ) : (
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[22px] font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Full name"
                  className={inputStyles}
                />
              </div>
            )}
          </div>
          {!showMessage && showName && (
            <Button
              form
              onClick={() => setShowMessage(true)}
              cssClasses="mr-auto mt-4 tabletLarge:mt-0"
            >
              Next
            </Button>
          )}
          {showMessage && (
            <>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[22px] font-bold">
                  Message:
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  name="message"
                  placeholder="Type your message here..."
                  className={inputStyles}
                ></textarea>
              </div>
              <Button
                form
                cssClasses="mr-auto mt-4 tabletLarge:mt-0"
                type="submit"
              >
                Submit
              </Button>
            </>
          )}
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
