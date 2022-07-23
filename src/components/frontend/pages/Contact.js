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
      <section className="border-b py-20 min-h-screen">
        <div className="w-full mx-auto h-72 bg-[url('https://images.unsplash.com/photo-1622649396178-b56dfd532226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80')] bg-cover">
          <h1 className="text-4xl font-bold text-white sm:mt-4 lg:text-6xl text-center px-5 py-20">
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
            <button className="button" type="submit">
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
