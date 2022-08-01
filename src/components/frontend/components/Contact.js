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
        "service_fqkds7rmjf",
        "template_vm30dsd9r1f",
        form.current,
        "2BDbTiYm0NQIsddRtv7Of"
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
      <section id="seeContact" className="border-b py-20 bg-gray-100 h-full">
        <div className="text-center font-semibold text-4xl text-[#ED1A37]">
          Contact Us
        </div>
        <div className="container max-w-4xl mx-auto overflow-hidden flex flex-col px-5">
          <form className="mt-10" ref={form} onSubmit={send}>
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
            <button className="button hover:bg-[#201A59]" type="">
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
