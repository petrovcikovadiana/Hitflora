import React, { useRef, useEffect } from "react";

import location from "assets/location-38.svg";
import mail from "assets/mail.svg";

import dreviny from "assets/sem.jpg";
import sale from "assets/sale.jpg";
import water from "assets/water.jpg";
import flower from "assets/fl.jpeg";
import onion from "assets/onion.jpg";
import decor from "assets/ladn1.jpg";

import Navbar from "./Navbar";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import phone from "assets/phone.svg";
import logo from "assets/hitflora-(1).png";
import { Link } from "react-router-dom";

function Sortiment() {
  return (
    <div>
      <Navbar /> {/* hero start */}
      <div className="w-full h-44 ">
        <div className="flex flex-col px-64 md:text-start w-full mt-20 items-center md:items-start text-center ">
          <h1 className="text-black text-2xl font-bold uppercase opacity-100">
            Prodejna
          </h1>
          <h1 className="text-headerGreen text-2xl font-bold uppercase opacity-100 ">
            Náš sortiment
          </h1>
          <hr class="h-px w-44 my-8 bg-lineGrey border-0 " />
        </div>
      </div>
      {/* hero end */}
      {/* cards start */}
      <div className="flex flex-wrap gap-5 py-10 md:px-36 mx-auto items-center justify-center max-w-[1440px]">
        <div className="card">
          <img
            src={dreviny}
            alt="dřeviny"
            loading="lazy"
            className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="greenBox">
              <p className=" text-white text-sm  text-center font-medium">
                Rostliny
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src={sale}
            alt="sale"
            className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="greenBox">
              <p className=" text-white text-sm  text-center font-medium">
                Substráty{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src={decor}
            alt="sortiment"
            className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="greenBox">
              <p className=" text-white text-sm  text-center font-medium">
                Hnojiva
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src={flower}
            alt="flowers"
            className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="greenBox">
              <p className=" text-white text-sm  text-center font-medium">
                Postřiky{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src={water}
            alt="projekty"
            className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="greenBox">
              <p className=" text-white text-sm  text-center font-medium">
                Truhlíky{" "}
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="card">
          <img
            src={onion}
            alt="realizace"
            className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="greenBox">
              <p className=" text-white text-sm  text-center font-medium"></p>
            </div>
          </div>
        </div>
      </div>
      {/* cards end */}
      {/* footer start */}
      <div className="w-full md:h-44 bg-circleGreen md:px-44 text-sm mx-auto text-center">
        <div className="flex md:flex-row flex-col md:gap-12 gap-4 items-center justify-center py-8 ">
          {/* Logo */}
          <div className="flex flex-row gap-2 items-center justify-center ">
            {" "}
            <h3>HiT</h3>
            <Link to="/">
              <img src={logo} alt="logo" className="text-white h-8 w-8" />
              {/* Use appropriate styling for your logo */}
            </Link>
            <h3 className="text-logoRed">FLORA s.r.o.</h3>{" "}
          </div>
          <div className="text-sm flex md:flex-row flex-col gap-3 items-center justify-center  text-center ">
            <img src={location} alt="location" className="w-7 h-7" />
            <div className="">
              {" "}
              <p>HiT FLORA s.r.o.</p>
              <p>Vítězství 216</p>
              <p>405 02 Děčín 31</p>
              <p>Křešice</p>
            </div>
          </div>
          <div className="text-sm flex md:flex-row flex-col md:gap-5 gap-3 items-center justify-center text-center ">
            <img src={mail} alt="mail" className="w-6 h-6" />
            <div>
              {" "}
              <p>Ing. Břetislav Hons</p>
              <p className="pb-3">hitflora@hitflora.cz</p>
              <p>Ing. Renáta Tesárová</p>
              <p className="font-bold text-headerGreen">Zahradní architekt</p>
              <p>tesarova@hitflora.cz</p>
            </div>
          </div>{" "}
          <div className="text-sm flex md:flex-row flex-col md:gap-5 gap-3 items-center justify-center text-center">
            <img src={phone} alt="phone" className="w-6 h-6" />
            <div>
              {" "}
              <p className="font-bold text-headerGreen">Mobil</p>
              <p>+420 775 102 189</p>
              <p className="font-bold text-headerGreen">Prodejna</p>
              <p>+420 412 517 027</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p>Sledujte nás na sociálních sítích</p>
            <div className="flex flex-row items-center pt-3 justify-center">
              {" "}
              <SlSocialInstagram className="w-6 h-6 text-headerGreen" />
              <a
                href="https://www.facebook.com/profile.php?id=100046941041164"
                target="_blank"
              >
                <SlSocialFacebook className="w-7 h-7 text-headerGreen" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* footer end */}
    </div>
  );
}

export default Sortiment;
