import React from "react";

function AboutImages() {
  return (
    <div className="md:flex hidden flex-row gap-16 px-64 md:items-center mx-auto  max-w-screen-xl  md:px-16 lg:px-24 xl:px-48">
      <img
        src={process.env.PUBLIC_URL + "/assets/avif/home-about-vertical.avif"}
        alt="sklenik"
        className="rounded-2xl object-cover lg:w-[280px] lg:h-[350px] md:w-[180px] md:h-[250px]"
        loading="lazy"
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/avif/home-about-horizontal.avif"}
        alt="man"
        className="rounded-2xl object-cover lg:w-[654px] lg:h-[350px] md:w-[554px] md:h-[250px]"
        loading="lazy"
      />
    </div>
  );
}

export default AboutImages;
