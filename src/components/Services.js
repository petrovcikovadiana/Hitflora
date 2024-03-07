import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import categoriesData from "./categoriesData";
import { Link } from "react-router-dom";
import CookieBanner from "./CookieBanner";

function Services() {
  return (
    <div>
      <Navbar />
      <CookieBanner /> {/* hero start */}
      <div className="my-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:px-56 md:text-start w-full mt-24 items-center lg:items-start text-center ">
          <h1 className="text-black text-2xl font-bold uppercase opacity-100">
            naše služby
          </h1>
          <h1 className="text-headerGreen text-2xl font-bold uppercase opacity-100 ">
            prodej{" "}
          </h1>
          <h1 className="text-black text-2xl font-bold uppercase opacity-100 ">
            a realizace{" "}
          </h1>
          <hr class="h-px w-44 my-4 bg-lineGrey border-0 " />
        </div>

        {/* hero end */}
      </div>
      <div className="flex flex-wrap gap-8 mx-auto max-w-[1440px] items-center justify-center lg:px-44 md:px-0 my-10">
        <div className="w-80 bg-white  h-[450px] rounded-lg shadow-xl">
          <img
            src={process.env.PUBLIC_URL + "/assets/man.jpg"}
            className="p-4 max-h-56 object-cover w-full "
            alt="dreviny"
            style={{ borderRadius: "1.375rem" }}
            loading="lazy"
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-headerGreen text-center">
              Vlastní produkce dřevin
            </h5>
            <div className="flex items-center mt-2.5 mb-5 text-center">
              <p>
                Dřevina je cévnatá vytrvalá rostlina se schopností druhotného
                tloustnutí dřevnatého stonku. Díky vrstvě dělivých buněk se
                mohou směrem dovnitř od této vrstvy tvořit buňky dřeva a vnějším
                směrem buňky lýka.
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 bg-white  h-[450px] rounded-lg shadow-2xl">
          <img
            src={process.env.PUBLIC_URL + "/assets/kosik.jpg"}
            className="p-4 max-h-56 object-cover w-full "
            alt="dreviny"
            style={{ borderRadius: "1.375rem" }}
            loading="lazy"
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-headerGreen text-center">
              Vlastní produkce dřevin
            </h5>
            <div className="flex items-center mt-2.5 mb-5 text-center">
              <p>
                Dřevina je cévnatá vytrvalá rostlina se schopností druhotného
                tloustnutí dřevnatého stonku. Díky vrstvě dělivých buněk se
                mohou směrem dovnitř od této vrstvy tvořit buňky dřeva a vnějším
                směrem buňky lýka.
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 bg-white  h-[450px] rounded-lg shadow-2xl">
          <img
            src={process.env.PUBLIC_URL + "/assets/sem.jpg"}
            className="p-4 max-h-56 object-cover w-full "
            alt="dreviny"
            style={{ borderRadius: "1.375rem" }}
            loading="lazy"
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-headerGreen text-center">
              Vlastní produkce dřevin
            </h5>
            <div className="flex items-center mt-2.5 mb-5 text-center">
              <p>
                Dřevina je cévnatá vytrvalá rostlina se schopností druhotného
                tloustnutí dřevnatého stonku. Díky vrstvě dělivých buněk se
                mohou směrem dovnitř od této vrstvy tvořit buňky dřeva a vnějším
                směrem buňky lýka.
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 bg-white  h-[450px] rounded-lg shadow-2xl">
          <img
            src={process.env.PUBLIC_URL + "/assets/water.jpg"}
            className="p-4 max-h-56 object-cover w-full "
            alt="dreviny"
            style={{ borderRadius: "1.375rem" }}
            loading="lazy"
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-headerGreen text-center">
              Vlastní produkce dřevin
            </h5>
            <div className="flex items-center mt-2.5 mb-5 text-center">
              <p>
                Dřevina je cévnatá vytrvalá rostlina se schopností druhotného
                tloustnutí dřevnatého stonku. Díky vrstvě dělivých buněk se
                mohou směrem dovnitř od této vrstvy tvořit buňky dřeva a vnějším
                směrem buňky lýka.
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 bg-white  h-[450px] rounded-lg shadow-2xl">
          <img
            src={process.env.PUBLIC_URL + "/assets/zahrada.jpeg"}
            className="p-4 max-h-56 object-cover w-full "
            alt="dreviny"
            style={{ borderRadius: "1.375rem" }}
            loading="lazy"
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-headerGreen text-center">
              Vlastní produkce dřevin
            </h5>
            <div className="flex items-center mt-2.5 mb-5 text-center">
              <p>
                Dřevina je cévnatá vytrvalá rostlina se schopností druhotného
                tloustnutí dřevnatého stonku. Díky vrstvě dělivých buněk se
                mohou směrem dovnitř od této vrstvy tvořit buňky dřeva a vnějším
                směrem buňky lýka.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="w-80 bg-white  h-[450px] rounded-lg shadow-2xl">
          <img
            src={process.env.PUBLIC_URL + "/assets/land.jpg"}
            className="p-4 max-h-56 object-cover w-full "
            alt="dreviny"
            style={{ borderRadius: "1.375rem" }}
            loading="lazy"
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-headerGreen text-center">
              Vlastní produkce dřevin
            </h5>
            <div className="flex items-center mt-2.5 mb-5 text-center">
              <p>
                Dřevina je cévnatá vytrvalá rostlina se schopností druhotného
                tloustnutí dřevnatého stonku. Díky vrstvě dělivých buněk se
                mohou směrem dovnitř od této vrstvy tvořit buňky dřeva a vnějším
                směrem buňky lýka.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
