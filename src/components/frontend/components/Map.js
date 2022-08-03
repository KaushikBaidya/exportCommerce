import React from "react";

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956258.1151763771!2d106.51114547843919!3d20.572400286817068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a6265d9153727%3A0x99323ec3e2c5f73c!2sHai%20Phong%2C%20Vietnam!5e0!3m2!1sen!2sbd!4v1659500106400!5m2!1sen!2sbd"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
}

export default Map;
