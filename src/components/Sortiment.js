import React, { useRef, useEffect } from "react";

import dreviny from "assets/sem.jpg";
import sale from "assets/sale.jpg";
import water from "assets/water.jpg";
import flower from "assets/fl.jpeg";
import onion from "assets/onion.jpg";
import decor from "assets/ladn1.jpg";

import Navbar from "./Navbar";
import Footer from "./Footer";
import categoriesData from "./categoriesData";

import { Link } from "react-router-dom";

function Sortiment() {
  return (
    <div>
      <Navbar /> {/* hero start */}
      <div className="my-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:px-72 md:text-start w-full mt-24 items-center md:items-start text-center ">
          <h1 className="text-black text-2xl font-bold uppercase opacity-100">
            Prodejna
          </h1>
          <h1 className="text-headerGreen text-2xl font-bold uppercase opacity-100 ">
            Náš sortiment
          </h1>
          <hr class="h-px w-44 my-4 bg-lineGrey border-0 " />
        </div>

        {/* hero end */}
        {/* cards start */}
        <div className="flex flex-wrap gap-5  py-10 md:py-24 md:px-36 mx-auto items-center justify-center">
          <Link to={`/category/${categoriesData[0].name}`} className="card">
            <img
              src={dreviny}
              alt="dřeviny"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  {categoriesData[0].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/category/${categoriesData[1].name}`} className="card">
            <img
              src={sale}
              alt="sortiment"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  {categoriesData[1].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/category/${categoriesData[2].name}`} className="card">
            <img
              src={decor}
              alt="sortiment"
              className=" object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  {categoriesData[2].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/category/${categoriesData[3].name}`} className="card">
            <img
              src={flower}
              alt="flowers"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  {categoriesData[3].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/category/${categoriesData[4].name}`} className="card">
            <img
              src={water}
              alt="projekty"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/category/${categoriesData[4].name}`} className="card">
            <img
              src={onion}
              alt="realizace"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/category/${categoriesData[4].name}`} className="card">
            <img
              src={onion}
              alt="realizace"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link to={`/category/${categoriesData[4].name}`} className="card">
            <img
              src={onion}
              alt="realizace"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  {categoriesData[4].name}
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link to={`/category/${categoriesData[4].name}`} className="card">
            <img
              src={onion}
              alt="realizace"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
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
