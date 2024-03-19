import React from "react";

const MapComponent = () => {
  return (
    <div
      className="relative w-full md:w-1/2 overflow-hidden"
      style={{ paddingTop: "56.25%" }}
    >
      {" "}
      {/* This padding-top percentage results in a 16:9 aspect ratio */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.094339780966!2d14.197217776388367!3d50.755284371652046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47099e105f53b54d%3A0x308f460d0697a269!2sHiT%20FLORA%20s.r.o.!5e0!3m2!1scs!2scz!4v1709317901187!5m2!1scs!2scz"
        width="100%"
        height="100%"
        style={{ border: 0, position: "absolute", top: 0, left: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapComponent;
