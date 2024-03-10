import React, { useRef, useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import categoriesData from "./categoriesData";

import { Link } from "react-router-dom";
import CookieBanner from "./CookieBanner";

function Sortiment() {
  return (
    <div>
      <Navbar />
      <CookieBanner />
      {/* hero start */}
      <div className="my-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:px-80 md:text-start w-full mt-24 items-center md:items-start text-center ">
          <h1 className="text-black text-2xl font-bold uppercase opacity-100">
            Prodejna
          </h1>
          <h1 className="text-headerGreen text-2xl font-bold uppercase opacity-100 ">
            Náš sortiment
          </h1>
          <hr class="h-px w-44 mt-4 bg-lineGrey border-0 " />
        </div>

        {/* hero end */}
        {/* cards start */}
        <div className="flex flex-wrap gap-5 pt-10  md:px-24 lg:px-48 mx-auto items-center justify-center max-w-[1440px]">
          <Link to={`/sortiment/${categoriesData[0].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/barvy.avif"}
              alt="dřeviny"
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[0].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/sortiment/${categoriesData[1].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/barvy.avif"}
              alt="sortiment"
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[1].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/sortiment/${categoriesData[2].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/onion.avif"}
              alt="sortiment"
              className=" object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[2].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/sortiment/${categoriesData[3].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/sale.avif"}
              alt="flowers"
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[3].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/sortiment/${categoriesData[4].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/water.avif"}
              alt="projekty"
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/sortiment/${categoriesData[4].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/sklenik.avif"}
              alt="realizace"
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/sortiment/${categoriesData[4].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/land.avif"}
              alt="realizace"
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link to={`/sortiment/${categoriesData[4].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/onion.avif"}
              alt="realizace"
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link to={`/sortiment/${categoriesData[4].name}`} className="card">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/path.avif"}
              alt="realizace"
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxs">
                <p className=" text-white text-md  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* Cards end */}
      </div>
      <Footer />
    </div>
  );
}

export default Sortiment;
