import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import categoriesData from "../data/categoriesData";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

function Sortiment() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://hitflora.cz/sortiment" />
        <meta name="robots" content="index, follow" />
        <title>Sortiment</title>
        <meta
          name="description"
          content="Objevte široký sortiment okrasných rostlin i doplňkového zboží. Nabízíme špičkové produkty pro vaši zahradu - od trvalek až po ovocné stromky."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* hero start */}
        <div className="max-w-[1440px] mx-auto flex-grow">
          <div className="flex flex-col md:px-80 xl:text-start w-full pt-24 items-center xl:items-start text-center ">
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
          <div className="flex flex-wrap gap-5 pt-10 mb-16 md:px-24 lg:px-48 mx-auto items-center xxl:pb-20 justify-center max-w-[1440px]">
            <Link to={`/sortiment/${categoriesData[0].name}`} className="card">
              <img
                src={process.env.PUBLIC_URL + "/assets/avif/rostliny.avif"}
                alt="dřeviny"
                className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <div className="greenBoxs">
                  <p className=" text-white text-md capitalize text-center font-medium">
                    {categoriesData[0].URLname}
                  </p>
                </div>
              </div>
            </Link>
            <Link to={`/sortiment/${categoriesData[1].name}`} className="card">
              <img
                src={process.env.PUBLIC_URL + "/assets/avif/substraty.avif"}
                alt="sortiment"
                className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <div className="greenBoxs">
                  <p className=" text-white text-md capitalize text-center font-medium">
                    {categoriesData[1].URLname}
                  </p>
                </div>
              </div>
            </Link>
            <Link to={`/sortiment/${categoriesData[2].name}`} className="card">
              <img
                src={process.env.PUBLIC_URL + "/assets/avif/hnojiva.avif"}
                alt="sortiment"
                className=" object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <div className="greenBoxs">
                  <p className=" text-white text-md capitalize text-center font-medium">
                    {categoriesData[2].URLname}
                  </p>
                </div>
              </div>
            </Link>
            <Link to={`/sortiment/${categoriesData[3].name}`} className="card">
              <img
                src={process.env.PUBLIC_URL + "/assets/avif/postriky.avif"}
                alt="flowers"
                className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <div className="greenBoxs">
                  <p className=" text-white text-md capitalize text-center font-medium">
                    {categoriesData[3].URLname}
                  </p>
                </div>
              </div>
            </Link>
            <Link to={`/sortiment/${categoriesData[4].name}`} className="card">
              <img
                src={process.env.PUBLIC_URL + "/assets/avif/truhliky.avif"}
                alt="projekty"
                className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <div className="greenBoxs">
                  <p className=" text-white text-md capitalize text-center font-medium">
                    {categoriesData[4].URLname}
                  </p>
                </div>
              </div>
            </Link>
            <Link to={`/sortiment/${categoriesData[5].name}`} className="card">
              <img
                src={process.env.PUBLIC_URL + "/assets/avif/mulcovaci.avif"}
                alt="realizace"
                className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <div className="greenBoxs">
                  <p className=" text-white text-md text-center font-medium">
                    {categoriesData[5].URLname}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* Cards end */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Sortiment;
