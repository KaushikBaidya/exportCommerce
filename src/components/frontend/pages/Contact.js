import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation(["contact"]);
  const form = useRef();
  const [done, setDone] = useState(false);
  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fqk7rmj",
        "template_vm309r1",
        form.current,
        "2BDbTiYm0NQIRtv7O"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setDone(true);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="border-b py-12 min-h-screen">
        <div className="w-full mx-auto h-72 bg-bgBanner bg-cover">
          <h1 className="text-4xl font-bold text-yellow-500 sm:mt-4 lg:text-6xl text-center px-5 py-20">
            {t("title")}
          </h1>
        </div>
        <div className="container max-w-4xl mx-auto overflow-hidden flex flex-col px-5">
          <form className="mt-20" ref={form} onSubmit={send}>
            <input
              className="input"
              type="text"
              name="user_name"
              placeholder={t("name")}
            />
            <input
              className="input"
              type="text"
              name="user_email"
              placeholder={t("email")}
            />
            <input
              className="input"
              type="text"
              name="user_subject"
              placeholder={t("subject")}
            />
            <textarea
              className="textarea"
              rows="5"
              name="message"
              placeholder={t("your-message")}
            />
            <button className="button hover:bg-red-600" type="submit">
              {t("button")}
            </button>

            {done && (
              <div className="alert">
                <br />
                {t("message")}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
