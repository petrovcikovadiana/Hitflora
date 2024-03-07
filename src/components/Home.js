import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import main from "assets/sklenik.jpg";
import sprays from "assets/sprays.svg";
import fertilizers from "assets/fertilizers.svg";
import substrates from "assets/substrates.svg";
import planters from "assets/planters.svg";
import plants from "assets/plants.svg";
import forest from "assets/forest.svg";
import location from "assets/location-38.svg";
import mail from "assets/mail.svg";
import phone from "assets/phone.svg";
import logo from "assets/hitflora-(1).png";

import dreviny from "assets/sem.jpg";
import sale from "assets/sale.jpg";
import water from "assets/water.jpg";
import flower from "assets/fl.jpeg";
import onion from "assets/onion.jpg";
import decor from "assets/ladn1.jpg";
import man from "assets/man.jpg";
import sklenik from "assets/sklenik.jpg";
import kosik from "assets/kosik.jpg";
import Navbar from "./Navbar";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";

import categoriesData from "./categoriesData";

function Home() {
  return (
    <div>
      <Navbar />
      <CookieBanner />
      {/* hero start */}
      <div
        className="relative md:h-96 w-full flex z-20 pt-20 md:pt-0 "
        style={{
          background: `url(${kosik})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-heroGreen opacity-75"></div>
        <div className="relative z-10 top-1/3 left-1/2 transform -translate-x-1/2 text-center  py-10 md:py-0 px-4   ">
          <h1 className="text-shadeWhite text-3xl">
            Zahradnictví Děčín |{" "}
            <span className="text-headerGreen opacity-100">Křešice</span>
          </h1>
          <hr class="h-px w-56 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
          <p className="text-shadeWhite tracking-widest text-sm font-thin opacity-100 w-96">
            Na našich stránkách najdete nejdůležitější informace o našem
            zahradnictví, naší práci a naší nabídce.
          </p>
        </div>
      </div>
      {/* hero end */}
      {/* content start */}
      <div className="bg-lightYellow w-full md:h-96 flex items-center justify-center">
        <div className="flex md:flex-row gap-32 md:px-44 mx-auto max-w-[1440px]">
          {/* left container */}
          <div className="flex flex-col md:w-1/2 px-5 justify-center mx-auto items-center md:items-start py-10 md:py-0">
            <p className="text-sm text-logoRed ">Od roku 1992</p>
            <h1 className="text-3xl font-bolder pb-5 text-center md:text-start">
              Sadovnické úpravy a{" "}
              <span className="text-headerGreen"> prodej okrasných dřevin</span>
            </h1>
            <p className="text-sm tracking-widest pb-5 text-center md:text-start">
              Naše firma se specializuje nejen na běžný provoz gardencentra, ale
              také na komplexní péči o zahradní prostředí. Zabýváme se sadovými
              úpravami, kvalitním projektováním zahrad a údržbou zeleně.
            </p>
            {/* text with dots start*/}
            <div className="flex flex-row gap-3 items-center pb-2">
              <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
              <p className="tracking-wider text-sm">Jaro 2024 v zahradnictví</p>
            </div>
            <div className="flex flex-row gap-3 items-center pb-2">
              <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
              <p className="tracking-wider text-sm">
                Nová jarní otevírací doba
              </p>
            </div>{" "}
            <div className="flex flex-row gap-3 items-center ">
              <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
              <p className="tracking-wider text-sm">
                Sledujte nás na Facebooku a Instagramu
              </p>
            </div>
            {/* text with dots end*/}
          </div>
          {/* right container */}
          <div className="lg:flex hidden w-1/2 justify-center items-center mx-auto text-center">
            <img
              src={main}
              alt="main"
              className="main w-80 h-80 "
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* content end */}
      {/* circles start */}
      <div className="bg-lightYellow flex md:flex-row flex-wrap gap-10 mx-auto items-center justify-center pb-20 lg:pt-5">
        <Link to={`/category/${categoriesData[0].name}`} className="circle">
          {categoriesData[0].icon ? (
            <img
              src={categoriesData[0].icon}
              alt="plant"
              className="w-14 h-14"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen">{categoriesData[0].name}</h3>
        </Link>
        <Link to={`/category/${categoriesData[1].name}`} className="circle">
          {categoriesData[1].icon ? (
            <img
              src={categoriesData[1].icon}
              alt="plant"
              className="w-14 h-14"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen">{categoriesData[1].name}</h3>
        </Link>
        <Link to={`/category/${categoriesData[2].name}`} className="circle">
          {categoriesData[2].icon ? (
            <img
              src={categoriesData[2].icon}
              alt="plant"
              className="w-14 h-14"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen">{categoriesData[2].name}</h3>
        </Link>
        <Link to={`/category/${categoriesData[3].name}`} className="circle">
          {categoriesData[3].icon ? (
            <img
              src={categoriesData[3].icon}
              alt="plant"
              className="w-14 h-14"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen">{categoriesData[3].name}</h3>
        </Link>
        <Link to={`/category/${categoriesData[4].name}`} className="circle">
          {categoriesData[4].icon ? (
            <img
              src={categoriesData[4].icon}
              alt="plant"
              className="w-14 h-14"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen">{categoriesData[4].name}</h3>
        </Link>
      </div>
      {/* circles end */}
      {/* carousel start */}
      {/* carousel end */}
      {/* services start */}
      <div className=" w-full h-full bg-white max-w-[1440px] mx-auto">
        {/* title */}
        <div className="flex flex-col md:px-64 mx-3 pt-6 ">
          <h1 className="font-bold text-xl uppercase md:text-start text-center">
            V našem zahradnictví{" "}
            <span className="text-headerGreen">nabízíme</span>
          </h1>
          {/* horizontal rule */}
          <hr class="h-px w-44 my-4 bg-lineGrey border-0 mx-auto md:mx-0" />
        </div>
        {/* cards start */}
        <div className="flex flex-wrap gap-5 py-5 md:px-36 mx-auto items-center justify-center">
          <div className="card">
            <img
              src={dreviny}
              alt="dřeviny"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  Vlastní produkce dřevin
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src={sale}
              alt="sortiment"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  Široký sortiment rostlin
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src={decor}
              alt="sortiment"
              className=" object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  Doručení zboží
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src={flower}
              alt="flowers"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  Údržba zeleně
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src={water}
              alt="projekty"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  Projekty zahrad{" "}
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="card">
            <img
              src={onion}
              alt="realizace"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBox">
                <p className=" text-white text-sm  text-center font-medium">
                  Realizace sadových úprav{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Cards end */}
      </div>
      {/* Services end */} {/* About start */}
      <div className="flex md:flex-row flex-col md:gap-24 md:items-center  py-10  max-w-screen-xl mx-auto md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:ml-4  items-center md:items-start">
          <h1 className="text-bold text-xl uppercase font-bold ">
            O našem <span className="text-headerGreen">zahradnictví</span>
          </h1>
          {/* horizontal rule */}
          <hr class="h-px w-20 md:w-44 my-4 bg-lineGrey border-0 " />
        </div>
        <div className="md:w-1/2">
          <p className="text-textGrey  text-center md:text-start px-4 md:px-0">
            Firma se nachází v Děčíně, části zvané Křešice. Zahradnictví se
            rozkládá na ploše cca 3 ha, z toho 1 ha zabírají skleníky,
            foliovníky a kontejnerové plochy.
          </p>
        </div>
      </div>
      {/* About end */}
      {/* Two images in row start*/}
      <div className="md:flex hidden flex-row gap-20 px-64 mx-3 md:items-center mx-auto  max-w-screen-xl  md:px-8 lg:px-16 xl:px-32">
        <img
          src={sklenik}
          alt="sklenik"
          className="rounded-2xl  lg:w-[280px] lg:h-[350px] md:w-[180px] md:h-[250px]"
          loading="lazy"
        />
        <img
          src={man}
          alt="man"
          className="rounded-2xl lg:w-[654px] lg:h-[350px] md:w-[554px] md:h-[250px]"
          loading="lazy"
        />
      </div>
      {/* two images in row end*/}
      {/* services and sale start */}
      <div className="flex md:flex-row flex-col pt-10  items-center md:items-start md:text-start text-center z-10 mx-auto  max-w-screen-xl  md:px-8 lg:px-16 xl:px-32">
        {/* left container */}
        <div className="flex flex-col lg:pl-0 md:ml-3 ">
          <h1 className="text-bold text-xl uppercase font-bold">naše služby</h1>
          <h1 className="text-bold text-xl uppercase font-bold text-headerGreen">
            prodej
          </h1>
          <h1 className="text-bold text-xl uppercase font-bold">a realizace</h1>
          {/* horizontal rule */}
          <hr class="h-px w-44 my-4 bg-lineGrey border-0 " />
        </div>
        {/* right container */}
        <div className="lg:pl-40 md:pl-16 px-4 ">
          <div className="flex flex-row gap-3 pb-2 ">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Nabízíme široký sortiment rostlin i doplňkového zboží
            </p>
          </div>
          <div className="flex flex-row gap-3 pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Poradíme Vám s výběrem rostlin a veškerého zboží{" "}
            </p>
          </div>
          <div className="flex flex-row gap-3 pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Po vzájemné dohodě Vám vybrané zboží doručíme{" "}
            </p>
          </div>{" "}
          <div className="flex flex-row gap-3 pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Osázíme Vám truhlíky a nádoby /keramiku, mísy apod./{" "}
            </p>
          </div>
        </div>
      </div>
      {/* services and sale end */}
      {/* opening hours start */}
      <div className="flex md:w-1/2 justify-center items-center mx-auto text-center py-10">
        <div className="container-hours flex flex-col bg-lightGrey w-80 h-80 justify-center items-center text-center">
          {/* icon forest */}
          <img
            src={forest}
            alt="forest-icon"
            className="w-24 h-24 "
            loading="lazy"
          />
          <h3 className="font-bolder py-2">Otevírací doba</h3>
          {/* dot with times */}

          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-3 w-3 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">po - pá od 7 - 16 hodin</p>
          </div>
          {/* dot with times */}
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-3 w-3 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">so od 7 - 13 hodin</p>
          </div>
          {/* horizontal rule */}
          <hr class="h-px w-44 my-4 bg-dotGreen border-0 mx-auto" />
          <div className="text-sm">
            {" "}
            <p>HiT FLORA s.r.o.</p>
            <p>Vítězství 216</p>
            <p>405 02 Děčín 31</p>
            <p>Křešice</p>
          </div>
        </div>
      </div>
      {/* opening hours end */}
      <Footer />
    </div>
  );
}

export default Home;
