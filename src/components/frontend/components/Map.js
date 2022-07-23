import React from "react";

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29201.708079160955!2d90.39795519253049!3d23.811005558892933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64ae543ffab%3A0x26f2bfdabd0dc0da!2sOrange%20Property!5e0!3m2!1sen!2sbd!4v1655804350575!5m2!1sen!2sbd"
        width="100%"
        height="450"
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
}

export default Map;
