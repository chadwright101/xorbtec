"use client";

import { useState, useRef, useEffect } from "react";

import classNames from "classnames";
import Button from "../utils/button";
import Recaptcha from "@/app/_lib/Recaptcha";
import { sendEmail } from "@/app/actions";

const inputStyles =
  "bg-white text-[20px] text-black placeholder-black/75 border-[3px] border-blue italic px-2 py-1 focus:bg-blue focus:placeholder-black focus:not-italic focus:text-white";

const ContactForm = ({ cssClasses }) => {
  const [showName, setShowName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [submissionStartTime, setSubmissionStartTime] = useState();
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("email-submitted");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value) => {
    const elapsedTime = new Date().getTime() - submissionStartTime;
    if (elapsedTime < 4000) {
      console.error("Form submitted too quickly. Possible bot activity.");
      return;
    } else {
      setValidateRecaptcha(!!value);
    }
  };

  return (
    <div
      className={classNames(`${cssClasses}`, {
        "tabletLarge:row-span-2": showName,
      })}
    >
      {showEmailSubmitted ? (
        <>
          <div id="email-submitted"></div>
          <p className="italic mb-8">
            Your email has been sent, we will be in touch soon.
          </p>
          <Button
            type="button"
            className=""
            onClick={() => setShowEmailSubmitted(false)}
          >
            Go back
          </Button>
        </>
      ) : (
        <section>
          <form
            ref={ref}
            action={async (formData) => {
              await sendEmail(formData);
              ref.current.reset();
              setShowEmailSubmitted(true);
            }}
            className="flex flex-col gap-8"
          >
            <input type="hidden" name="_honey" className="hidden" />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[22px] font-bold">
                  Email:
                </label>
                <input
                  type="email"
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
                  cssClasses={classNames("mr-auto mt-4 tabletLarge:mt-0", {
                    "opacity-50 cursor-not-allowed": !validateRecaptcha,
                  })}
                  disabled={!validateRecaptcha}
                  type="submit"
                >
                  Submit
                </Button>
                <Recaptcha onChange={handleRecaptchaChange} />
              </>
            )}
          </form>
        </section>
      )}
    </div>
  );
};

export default ContactForm;
