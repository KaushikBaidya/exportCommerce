import React from "react";
import { useTranslation } from "react-i18next";
import Form from "./Form";

function Contact() {
  const { t } = useTranslation(["contact"]);

  return (
    <>
      <section id="seeContact" className="border-b py-20 bg-gray-100 h-full">
        <div className="text-center font-semibold text-4xl text-[#ED1A37]">
          Contact Us
        </div>
        <div className="container max-w-4xl mx-auto overflow-hidden flex flex-col px-5">
          <Form />
        </div>
      </section>
    </>
  );
}

export default Contact;
