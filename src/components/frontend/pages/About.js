import React from "react";
// import { useTranslation } from "react-i18next";

function About() {
  // const { t } = useTranslation(["about"]);
  return (
    <>
      <section className="border-b py-12 min-h-screen">
        <div className="w-full mx-auto h-72 bg-bgBanner bg-cover">
          <h1 className="text-4xl font-bold text-yellow-500 sm:mt-4 lg:text-6xl text-center px-5 py-20">
            Welcome to Sample Limited
          </h1>
        </div>
        <div className="h-full grid grid-cols-1 content-center">
          <p className="text-xl lg:text-lg sm:mt-4 text-justify px-15 pb-10 mx-10 lg:mx-20 justify-center font-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            sed risus ultricies tristique nulla aliquet enim. Sit amet cursus
            sit amet dictum sit. Tempus urna et pharetra pharetra. Vulputate
            enim nulla aliquet porttitor lacus luctus accumsan tortor. Ultricies
            integer quis auctor elit sed vulputate mi sit amet. Malesuada proin
            libero nunc consequat interdum varius sit amet mattis. Arcu bibendum
            at varius vel pharetra vel turpis. Vel pretium lectus quam id leo in
            vitae. Mauris augue neque gravida in fermentum et sollicitudin ac
            orci.
          </p>
          {/* <img src="https://flagicons.lipis.dev/flags/4x3/bd.svg" alt="" /> */}
          <div className="container max-w-7xl h-full mx-auto flex flex-wrap justify-around">
            <img
              src="https://bizweb.dktcdn.net/100/236/257/files/factory-1-76f81edb-7712-47ee-9dc7-dc5e9de7ebbe.jpg?v=1578109005134"
              className="max-w-2xl overflow-hidden"
              alt=""
            />
          </div>
          <p className="text-xl lg:text-lg sm:mt-4 text-justify px-15 pb-10 mx-10 lg:mx-20 justify-center font-mono">
            Diam quis enim lobortis scelerisque fermentum dui. Egestas pretium
            aenean pharetra magna ac placerat vestibulum lectus. Sed sed risus
            pretium quam vulputate dignissim suspendisse in. Enim sit amet
            venenatis urna. Nulla aliquet enim tortor at auctor urna nunc id.
            Non nisi est sit amet facilisis magna etiam tempor. Posuere ac ut
            consequat semper. Dignissim convallis aenean et tortor at risus
            viverra. Vehicula ipsum a arcu cursus vitae congue. Id faucibus nisl
            tincidunt eget nullam non nisi est. Mauris a diam maecenas sed enim.
            Augue eget arcu dictum varius.
          </p>

          <p className="text-xl lg:text-lg sm:mt-4 text-justify px-15 pb-10 mx-10 lg:mx-20 justify-center font-mono">
            Libero id faucibus nisl tincidunt eget nullam non. In egestas erat
            imperdiet sed euismod. Erat imperdiet sed euismod nisi porta lorem
            mollis. Quisque egestas diam in arcu cursus euismod quis viverra
            nibh. Consequat interdum varius sit amet mattis vulputate enim
            nulla. Ut enim blandit volutpat maecenas volutpat blandit. Ut ornare
            lectus sit amet est. Placerat orci nulla pellentesque dignissim enim
            sit amet venenatis. Vivamus at augue eget arcu dictum varius duis at
            consectetur. Donec ac odio tempor orci dapibus ultrices in iaculis
            nunc. Lacus suspendisse faucibus interdum posuere lorem. Fames ac
            turpis egestas integer eget aliquet nibh praesent. Phasellus egestas
            tellus rutrum tellus pellentesque eu tincidunt tortor. Vitae aliquet
            nec ullamcorper sit amet risus nullam eget. Viverra aliquet eget sit
            amet tellus cras. Luctus venenatis lectus magna fringilla urna
            porttitor rhoncus dolor. Sit amet purus gravida quis. Dictum fusce
            ut placerat orci nulla pellentesque dignissim. Eu lobortis elementum
            nibh tellus molestie.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
