import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CookieBanner from "./CookieBanner";

const cardsData = [
  {
    image: "/assets/avif/man.avif",
    alt: "dreviny",
    text: "Dřevina je cévnatá vytrvalá rostlina se schopností druhotného tloustnutí dřevnatého stonku. ",
  },
  {
    image: "/assets/avif/kosik.avif",
    alt: "dreviny",
    text: "Dřevina je cévnatá vytrvalá rostlina se schopností druhotného tloustnutí dřevnatého stonku. ",
  },
  {
    image: "/assets/avif/kosik.avif",
    alt: "dreviny",
    text: "Dřevina je cévnatá vytrvalá rostlina se schopností druhotného tloustnutí dřevnatého stonku.",
  },
  {
    image: "/assets/avif/water.avif",
    alt: "dreviny",
    text: "Dřevina je cévnatá vytrvalá rostlina se schopností druhotného tloustnutí dřevnatého stonku. ",
  },
  {
    image: "/assets/avif/zahrada.avif",
    alt: "dreviny",
    text: "Dřevina je cévnatá vytrvalá rostlina se schopností druhotného tloustnutí dřevnatého stonku. ",
  },
  {
    image: "/assets/avif/man.avif",
    alt: "dreviny",
    text: "Dřevina je cévnatá vytrvalá rostlina se schopností druhotného tloustnutí dřevnatého stonku.",
  },
];

function Services() {
  return (
    <div>
      <Navbar />
      <CookieBanner /> {/* hero start */}
      <div className=" max-w-[1440px] mx-auto">
        <div className="flex flex-col md:px-80 md:text-start w-full mt-24 items-center lg:items-start text-center ">
          <h1 className="text-black text-2xl font-bold uppercase opacity-100">
            naše služby
          </h1>
          <h1 className="text-headerGreen text-2xl font-bold uppercase opacity-100 ">
            prodej{" "}
          </h1>
          <h1 className="text-black text-2xl font-bold uppercase opacity-100 ">
            a realizace{" "}
          </h1>
          <hr class="h-px w-44 mt-4 bg-lineGrey border-0 " />
        </div>

        {/* hero end */}
      </div>
      <div className="flex flex-wrap gap-8 pt-10 mx-auto max-w-[1440px] items-center justify-center lg:px-44 md:px-0 mb-16">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-64 bg-white h-[400px] rounded-lg shadow-2xl"
          >
            <img
              src={process.env.PUBLIC_URL + card.image}
              className="p-4 h-48 object-cover w-full"
              alt={card.alt}
              style={{ borderRadius: "1.375rem" }}
              loading="lazy"
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-headerGreen text-center">
                Vlastní produkce dřevin
              </h5>
              <div className="flex items-center mt-2.5 mb-5 text-center">
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Services;
