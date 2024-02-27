import React from "react";
import { Link } from "react-router-dom";

import main from "../assets/sklenik.jpg";
import planty from "../assets/planty.svg";
import forest from "../assets/forest.svg";
import location from "../assets/location-38.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import facebook from "../assets/fb.svg";
import logo from "../assets/hitflora (1).png";

import dreviny from "../assets/sem.jpg";
import sale from "../assets/sale.jpg";
import water from "../assets/water.jpg";
import flower from "../assets/fl.jpeg";
import onion from "../assets/onion.jpg";
import decor from "../assets/ladn1.jpg";
import man from "../assets/man.jpg";
import sklenik from "../assets/sklenik.jpg";
import kosik from "../assets/kosik.jpg";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      {/* hero start */}
      <div
        className="relative h-96 w-screen flex z-20 "
        style={{
          background: `url(${kosik})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-heroGreen opacity-75"></div>
        <div className="relative z-10 top-1/3 left-1/2 transform -translate-x-1/2 text-center w-96  ">
          <h1 className="text-shadeWhite text-3xl ">
            Zahradnictví Děčín |{" "}
            <span className="text-headerGreen opacity-100">Křešice</span>
          </h1>
          <hr class="h-px w-56 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
          <p className="text-shadeWhite tracking-widest text-sm font-thin opacity-100">
            Na našich stránkách najdete nejdůležitější informace o našem
            zahradnictví, naší práci a naší nabídce.
          </p>
        </div>
      </div>
      {/* hero end */}
      {/* content start */}
      <div className="bg-lightYellow w-full h-96 flex items-center justify-center">
        <div className="flex md:flex-row gap-32 mx-auto px-44">
          {/* left container */}
          <div className="flex flex-col w-1/2 justify-center mx-auto ">
            <p className="text-sm text-logoRed ">Od roku 1992</p>
            <h1 className="text-3xl font-bolder pb-5">
              Sadovnické úpravy a{" "}
              <span className="text-headerGreen"> prodej okrasných dřevin</span>
            </h1>
            <p className="text-sm tracking-widest pb-5">
              Naše firma se specializuje nejen na běžný provoz gardencentra, ale
              také na komplexní péči o zahradní prostředí. Zabýváme se sadovými
              úpravami, kvalitním projektováním zahrad a údržbou zeleně.
            </p>
            {/* text with dots start*/}
            <div className="flex flex-row gap-3 items-center pb-2">
              <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
              <p className="tracking-wider">Jaro 2024 v zahradnictví</p>
            </div>
            <div className="flex flex-row gap-3 items-center pb-2">
              <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
              <p className="tracking-wider">Nová jarní otevírací doba</p>
            </div>{" "}
            <div className="flex flex-row gap-3 items-center">
              <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
              <p className="tracking-wider">
                Sledujte nás také na Facebooku a Instagramu
              </p>
            </div>
            {/* text with dots end*/}
          </div>
          {/* right container */}
          <div className="flex w-1/2 justify-center items-center mx-auto text-center">
            <img src={main} alt="main" className="main w-80 h-80 " />
          </div>
        </div>
      </div>
      {/* content end */}
      {/* circles start */}
      <div className="bg-lightYellow flex flex-row gap-10 mx-auto items-center justify-center pb-20">
        <div className="flex flex-col w-32 h-32 rounded-full bg-circleGreen items-center justify-center">
          <img src={planty} alt="plant" className="w-14 h-14 " />
          <h3 className="text-darkGreen">Rostliny</h3>
        </div>
        <div className="flex flex-col w-32 h-32 rounded-full bg-circleGreen items-center justify-center">
          <img src={planty} alt="plant" className="w-14 h-14 " />
          <h3 className="text-darkGreen">Substráty</h3>
        </div>{" "}
        <div className="flex flex-col w-32 h-32 rounded-full bg-circleGreen items-center justify-center">
          <img src={planty} alt="plant" className="w-14 h-14 " />
          <h3 className="text-darkGreen">Hnojiva</h3>
        </div>{" "}
        <div className="flex flex-col w-32 h-32 rounded-full bg-circleGreen items-center justify-center">
          <img src={planty} alt="plant" className="w-14 h-14 " />
          <h3 className="text-darkGreen">Postřiky</h3>
        </div>{" "}
        <div className="flex flex-col w-32 h-32 rounded-full bg-circleGreen items-center justify-center">
          <img src={planty} alt="plant" className="w-14 h-14 " />
          <h3 className="text-darkGreen">Truhlíky</h3>
        </div>
      </div>
      {/* circles end */}
      {/* carousel start */}
      {/* carousel end */}
      {/* services start */}
      <div className=" w-full h-full bg-white">
        {/* title */}
        <div className="flex flex-col px-64 mx-3 pt-16 ">
          <h1 className="font-bold text-xl uppercase">
            V našem zahradnictví{" "}
            <span className="text-headerGreen">nabízíme</span>
          </h1>
          {/* horizontal rule */}
          <hr class="h-px w-44 my-8 bg-lineGrey border-0 " />
        </div>
        {/* cards start */}
        <div className="flex flex-wrap gap-5 py-10 px-36 mx-auto items-center justify-center">
          <div className="w-72 h-56 relative ">
            <img
              src={dreviny}
              alt="dřeviny"
              className="w-72 h-56 rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
                <p className=" text-white text-sm  text-center font-medium">
                  Vlastní produkce dřevin
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 h-56 relative">
            <img src={sale} alt="sortiment" className="w-72 h-56 rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
                <p className=" text-white text-sm  text-center font-medium">
                  Široký sortiment rostlin
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 h-56 relative">
            <img
              src={decor}
              alt="sortiment"
              className="w-72 h-56 rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
                <p className=" text-white text-sm  text-center font-medium">
                  Doručení zboží
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 h-56 relative">
            <img src={flower} alt="flowers" className="w-72 h-56 rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
                <p className=" text-white text-sm  text-center font-medium">
                  Údržba zeleně
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 h-56 relative">
            <img src={water} alt="projekty" className="w-72 h-56 rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
                <p className=" text-white text-sm  text-center font-medium">
                  Projekty zahrad{" "}
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="w-72 h-56 relative">
            <img
              src={onion}
              alt="realizace"
              className="w-72 h-56 rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
                <p className=" text-white text-sm  text-center font-medium">
                  Realizace sadových úprav{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* cards end */}
      </div>
      {/* services end */}{" "}
      <div className="flex flex-row gap-44 py-16">
        <div className="flex flex-col ml-4 pl-64 ">
          <h1 className="text-bold text-xl uppercase font-bold">
            O našem <span className="text-headerGreen">zahradnictví</span>
          </h1>
          {/* horizontal rule */}
          <hr class="h-px w-44 my-8 bg-lineGrey border-0 " />
        </div>
        <div className="w-1/3">
          <p className="text-textGrey ">
            Firma se nachází v Děčíně, části zvané Křešice. Zahradnictví se
            rozkládá na ploše cca 3 ha, z toho 1 ha zabírají skleníky,
            foliovníky a kontejnerové plochy.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-20 px-64 mx-3">
        <img
          src={sklenik}
          alt="sklenik"
          className="rounded-2xl  w-[280px] h-[350px]"
        />
        <img src={man} alt="man" className="rounded-2xl w-[654px] h-[350px]" />
      </div>
      {/* services and sale start */}
      <div className="flex flex-row pt-16">
        {/* left container */}
        <div className="flex flex-col pl-64 ml-3 ">
          <h1 className="text-bold text-xl uppercase font-bold">naše služby</h1>
          <h1 className="text-bold text-xl uppercase font-bold text-headerGreen">
            prodej
          </h1>
          <h1 className="text-bold text-xl uppercase font-bold">a realizace</h1>
          {/* horizontal rule */}
          <hr class="h-px w-44 my-8 bg-lineGrey border-0 " />
        </div>
        {/* middle container */}
        <div className="pl-40">
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Nabízíme široký sortiment rostlin i doplňkového zboží
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Poradíme Vám s výběrem rostlin a veškerého zboží{" "}
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Po vzájemné dohodě Vám vybrané zboží doručíme{" "}
            </p>
          </div>{" "}
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Osázíme Vám truhlíky a nádoby /keramiku, mísy apod./{" "}
            </p>
          </div>
        </div>
      </div>
      {/* services and sale end */}
      {/* opening hours start */}
      <div className="flex w-1/2 justify-center items-center mx-auto text-center py-10">
        <div className="container-hours flex flex-col bg-lightGrey w-80 h-80 justify-center items-center text-center">
          {/* icon forest */}
          <img src={forest} alt="forest-icon" className="w-24 h-24 " />
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
      {/* footer start */}
      <div className="w-full h-44 bg-circleGreen px-44 text-sm">
        <div className="flex flex-row gap-12 items-center justify-center py-10">
          {/* Logo */}
          <div className="flex flex-row gap-2 items-center justify-center">
            {" "}
            <h3>HiT</h3>
            <Link to="/">
              <img src={logo} alt="logo" className="text-white h-8 w-8" />
              {/* Use appropriate styling for your logo */}
            </Link>
            <h3 className="text-logoRed">FLORA s.r.o.</h3>{" "}
          </div>
          <div className="text-sm flex flex-row gap-5 items-center justify-center  text-center">
            <img src={location} alt="location" className="w-6 h-6" />
            <div className="">
              {" "}
              <p>HiT FLORA s.r.o.</p>
              <p>Vítězství 216</p>
              <p>405 02 Děčín 31</p>
              <p>Křešice</p>
            </div>
          </div>
          <div className="text-sm flex flex-row gap-5 items-center justify-center">
            <img src={mail} alt="mail" className="w-6 h-6" />
            <div>
              {" "}
              <p>Ing. Břetislav Hons</p>
              <p className="pb-3">hitflora@hitflora.cz</p>
              <p>Ing. Renáta Tesárová</p>
              <p>Zahradní architekt</p>
              <p>tesarova@hitflora.cz</p>
            </div>
          </div>{" "}
          <div className="text-sm flex flex-row gap-5 items-center justify-center">
            <img src={phone} alt="phone" className="w-6 h-6" />
            <div>
              {" "}
              <p>Mobil</p>
              <p>+420 775 102 189</p>
              <p>Prodejna</p>
              <p>+420 412 517 027</p>
            </div>
          </div>
          <div>
            <p>Sledujte nás na sociálních sítích</p>
            <img src={facebook} alt="facebook" className="w-6 h-6" />
          </div>
        </div>
      </div>
      {/* footer end */}
    </div>
  );
}

export default Home;
