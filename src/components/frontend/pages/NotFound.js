import React from "react";

function NotFound() {
  return (
    <>
      <section id="about" className="py-20 min-h-full">
        <div className="container max-w-6xl h-full border-b-2 mx-auto mt-10 flex flex-wrap justify-around">
          <img
            src="/images/404.svg"
            className="w-[80%] lg:w-[50%] h-full overflow-hidden mt-5 lg:pl-5"
            alt="not found the page"
          />
        </div>
      </section>
    </>
  );
}

export default NotFound;
