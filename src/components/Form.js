import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Form = ({ title = "" }) => {
  const form = useRef();
  const { t } = useTranslation(["contact"]);
  // const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1caltje",
        "template_clw0189",
        form.current,
        "3TU1Pd0ABt2oTCuC-"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Message sent successfully");
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          // console.log(error.text);
          toast.error("Response : " + error.response.data);
        }
      );
  };
  return (
    <form className="mt-10" ref={form} onSubmit={send}>
      {title && (
        <div>
          <label>{title}</label>
          <input type="hidden" name="product_title" value={title} />
        </div>
      )}
      <input
        required
        className="input"
        type="text"
        name="user_name"
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder={t("name")}
      />
      <input
        required
        className="input"
        type="text"
        name="user_email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        placeholder={t("email")}
      />
      <input
        required
        className="input"
        type="text"
        name="user_phone"
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
        placeholder={t("phone")}
      />
      <input
        required
        className="input"
        type="text"
        name="user_subject"
        onChange={(event) => setSubject(event.target.value)}
        value={subject}
        placeholder={t("subject")}
      />
      <textarea
        required
        className="textarea"
        rows="5"
        name="message"
        onChange={(event) => setMessage(event.target.value)}
        value={message}
        placeholder={t("your-message")}
      />
      <button className="button hover:bg-[#f8982b]" type="">
        {t("button")}
      </button>
    </form>
  );
};

export default Form;
