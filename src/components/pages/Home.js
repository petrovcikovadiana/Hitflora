import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import categoriesData from "../data/categoriesData";

const items = [
  { text: "Nabízíme široký sortiment rostlin i doplňkového zboží" },
  { text: "Poradíme Vám s výběrem rostlin a veškerého zboží" },
  { text: "Po vzájemné dohodě Vám vybrané zboží doručíme" },
  { text: "Osázíme Vám truhlíky a nádoby /keramiku, mísy apod./" },
];

const cards = [
  {
    src: "/assets/avif/zahrada.avif",
    alt: "sortiment",
    text: "Široký sortiment rostlin",
  },
  {
    src: "/assets/avif/vysadby.avif",
    alt: "dekorace",
    text: "Realizace sadových úprav",
  },
  { src: "/assets/avif/zelen.avif", alt: "flowers", text: "Údržba zeleně" },
  {
    src: "/assets/avif/yard.avif",
    alt: "projekty",
    text: "Projekty zahrad",
  },
  {
    src: "/assets/avif/main-horse.avif",
    alt: "minizoo",
    text: "Dětský koutek a mini ZOO",
  },
];

function Home() {
  return (
    <>
      <Navbar />
      {/* hero start */}
      <div
        className="relative md:h-96 w-full flex z-20 pt-20 md:pt-0 "
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/assets/avif/kosik.avif"
          })`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-heroGreen opacity-75"></div>
        <div className="relative z-10 top-1/3 left-1/2 transform -translate-x-1/2 text-center  py-10 md:py-0 px-2  ">
          <h1 className="text-shadeWhite text-3xl md:text-4xl">
            Zahradnictví Děčín |{" "}
            <span className="text-headerGreen opacity-100">Křešice</span>
          </h1>
          <hr class="h-px w-56 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
          <p className="text-shadeWhite tracking-widest text-medium font-normal opacity-100 w-96">
            Na našich stránkách najdete klíčové informace o našem zahradnictví,
            práci a nabídce.
          </p>
        </div>
      </div>
      {/* hero end */}
      {/* content start */}
      <div className="bg-lightYellow w-full md:h-96 flex items-center justify-center">
        <div className="flex md:flex-row gap-32 xl:px-48 mx-auto max-w-[1440px]">
          {/* left container */}
          <div className="flex flex-col md:w-1/2 px-5 justify-center md:pl-16 mx-auto items-center md:items-start py-10 md:py-0">
            <p className="text-sm text-logoRed ">Od roku 1992</p>
            <h2 className="text-3xl font-bolder pb-5 text-center md:text-start">
              Sadovnické úpravy a{" "}
              <span className="text-headerGreen"> prodej okrasných dřevin</span>
            </h2>
            <p className="text-sm tracking-widest pb-5 text-center md:text-start">
              Naše firma se specializuje nejen na běžný provoz gardencentra, ale
              také na komplexní péči o zahradní prostředí. Zabýváme se
              sadovnickými úpravami, odborným projektováním zahrad a údržbou
              zeleně.
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
              src={process.env.PUBLIC_URL + "/assets/avif/circle.avif"}
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
        <Link to={`/sortiment/${categoriesData[0].name}`} className="circle">
          {categoriesData[0].icon ? (
            <img
              src={categoriesData[0].icon}
              alt="plant"
              className="w-14 h-14"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen capitalize">
            {categoriesData[0].name}
          </h3>
        </Link>
        <Link to={`/sortiment/${categoriesData[1].name}`} className="circle">
          {categoriesData[1].icon ? (
            <img
              src={categoriesData[1].icon}
              alt="plant"
              className="w-14 h-14"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen capitalize">
            {categoriesData[1].name}
          </h3>
        </Link>
        <Link to={`/sortiment/${categoriesData[2].name}`} className="circle">
          {categoriesData[2].icon ? (
            <img
              src={categoriesData[2].icon}
              alt="plant"
              className="w-14 h-14"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen capitalize">
            {categoriesData[2].name}
          </h3>
        </Link>
        <Link to={`/sortiment/${categoriesData[3].name}`} className="circle">
          {categoriesData[3].icon ? (
            <img
              src={categoriesData[3].icon}
              alt="plant"
              className="w-14 h-14"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h2 className="text-darkGreen capitalize">
            {categoriesData[3].name}
          </h2>
        </Link>
        <Link to={`/sortiment/${categoriesData[4].name}`} className="circle">
          {categoriesData[4].icon ? (
            <img
              src={categoriesData[4].icon}
              alt="plant"
              className="w-14 h-14"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14" />
          )}
          <h3 className="text-darkGreen capitalize">
            {categoriesData[4].name}
          </h3>
        </Link>
      </div>
      {/* circles end */}
      {/* services start */}
      <div className=" w-full h-full bg-white max-w-[1440px] mx-auto">
        {/* title */}
        <div className="flex flex-col md:items-start xl:px-72 lg:ml-16 md:ml-10 xl:ml-6 items-center mx-3 pt-6 ">
          <h2 className="font-bold text-xl uppercase md:text-start text-center">
            V našem zahradnictví{" "}
            <span className="text-headerGreen">nabízíme</span>
          </h2>
          {/* horizontal rule */}
          <hr class="h-px w-44 my-4 bg-lineGrey border-0 mx-auto md:mx-0" />
        </div>
        {/* cards start */}
        <div className="flex flex-wrap gap-5 py-5 md:px-24 lg:px-48 mx-auto items-center justify-center">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img
                src={process.env.PUBLIC_URL + card.src}
                alt={card.alt}
                className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
                data-src={process.env.PUBLIC_URL + card.src}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <div className="greenBoxh">
                  <p className="text-white text-sm text-center font-medium">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cards end */}
      </div>
      {/* Services end */} {/* About start */}
      <div className="flex md:flex-row flex-col md:gap-24 lg:items-center py-10  max-w-screen-xl mx-auto md:px-16 lg:px-24 xl:px-48">
        <div className="flex flex-col  items-center md:items-start">
          <h2 className="text-bold text-xl uppercase font-bold ">
            O našem <span className="text-headerGreen">zahradnictví</span>
          </h2>
          {/* horizontal rule */}
          <hr class="h-px w-20 md:w-44 my-4 bg-lineGrey border-0 " />
        </div>
        <div className="md:w-1/2">
          <p className="text-textGrey  text-center md:text-start px-4 md:px-0">
            Firma se nachází v Děčíně, části zvané Křešice. Zahradnictví se
            rozkládá na ploše cca 4 ha, z toho půl hektaru zabírají skleníky,
            foliovníky a kontejnerové plochy.
          </p>
        </div>
      </div>
      {/* About end */}
      {/* Two images in row start*/}
      <div className="md:flex hidden flex-row gap-16 px-64 md:items-center mx-auto  max-w-screen-xl  md:px-16 lg:px-24 xl:px-48">
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/home-about-vertical.avif"}
          alt="sklenik"
          className="rounded-2xl object-cover lg:w-[280px] lg:h-[350px] md:w-[180px] md:h-[250px]"
          loading="lazy"
        />
        <img
          src={
            process.env.PUBLIC_URL + "/assets/avif/home-about-horizontal.avif"
          }
          alt="man"
          className="rounded-2xl object-cover lg:w-[654px] lg:h-[350px] md:w-[554px] md:h-[250px]"
          loading="lazy"
        />
      </div>
      {/* two images in row end*/}
      {/* services and sale start */}
      <div className="flex md:flex-row flex-col md:pt-10 items-center md:items-start md:text-start text-center z-10 mx-auto  max-w-screen-xl  md:px-16 lg:px-24 xl:px-48">
        {/* left container */}
        <div className="flex flex-col lg:pl-0 ">
          <h2 className="text-bold text-xl uppercase font-bold">naše služby</h2>
          <h2 className="text-bold text-xl uppercase font-bold text-headerGreen">
            prodej
          </h2>
          <h3 className="text-bold text-xl uppercase font-bold">a realizace</h3>
          {/* horizontal rule */}
          <hr class="h-px w-44 my-4 bg-lineGrey border-0 " />
        </div>
        {/* right container */}
        <div className="lg:pl-40 md:pl-16 px-4 ">
          <div>
            {items.map((item, index) => (
              <div key={index} className="flex flex-row gap-3 pb-2">
                <div className="h-4 w-4 rounded-full bg-headerGreen"></div>
                <p className="tracking-wider text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* services and sale end */}
      {/* opening hours start */}
      <div className="flex md:w-1/2 justify-center items-center mx-auto text-center py-10">
        <div className="container-hours flex flex-col bg-lightGrey w-80 h-80 justify-center items-center text-center">
          {/* icon forest */}
          <img
            src={process.env.PUBLIC_URL + "/assets/svg/forest.svg"}
            alt="forest-icon"
            className="w-24 h-24 "
            loading="lazy"
          />
          <h5 className="font-bolder py-2">Otevírací doba</h5>
          {/* dot with times */}
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-3 w-3 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">po - pá 7 - 16 hodin</p>
          </div>
          {/* dot with times */}
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-3 w-3 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">so 7 - 13 hodin</p>
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
    </>
  );
}

export default Home;
