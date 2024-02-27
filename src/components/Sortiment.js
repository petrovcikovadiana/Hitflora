import React from "react";
import hero from "../assets/land.jpg";
import circle from "../assets/ladn1.jpg";
import hand from "../assets/sem.jpg";
import bonsai from "../assets/bonsai.svg";

import land from "../assets/land.jpg";
import main from "../assets/sklenik.jpg";
import planty from "../assets/planty.svg";
import forest from "../assets/forest.svg";
import location from "../assets/location-38.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import facebook from "../assets/fb.svg";

import dreviny from "../assets/sem.jpg";
import sale from "../assets/sale.jpg";
import water from "../assets/water.jpg";
import flower from "../assets/fl.jpeg";
import onion from "../assets/onion.jpg";
import decor from "../assets/ladn1.jpg";
import man from "../assets/man.jpg";
import sklenik from "../assets/sklenik.jpg";
import Navbar from "./Navbar";

function Sortiment() {
  return (
    <div>
      <Navbar /> {/* hero start */}
      <div></div>
      <div className="w-full h-44">
        <div className="flex flex-col px-64 text-start w-full mt-20 ">
          <h1 className="text-black text-2xl font-bold uppercase opacity-100">
            Prodejna{" "}
          </h1>
          <h1 className="text-headerGreen text-2xl font-bold uppercase opacity-100 ">
            Náš sortiment
          </h1>
          <hr class="h-px w-44 my-8 bg-lineGrey border-0 " />
        </div>
      </div>
      {/* hero end */}
      {/* cards start */}
      <div className="flex flex-wrap gap-5 px-36 mx-auto items-center justify-center">
        <div className="w-72 h-56 relative ">
          <img src={dreviny} alt="dřeviny" className="w-72 h-56 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
              <p className=" text-white text-sm  text-center font-medium">
                Hnojiva
              </p>
            </div>
          </div>
        </div>
        <div className="w-72 h-56 relative">
          <img src={sale} alt="sortiment" className="w-72 h-56 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
              <p className=" text-white text-sm  text-center font-medium">
                Substráty{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-72 h-56 relative">
          <img src={decor} alt="sortiment" className="w-72 h-56 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
              <p className=" text-white text-sm  text-center font-medium">
                Postřiky{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-72 h-56 relative">
          <img src={flower} alt="flowers" className="w-72 h-56 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
              <p className=" text-white text-sm  text-center font-medium">
                Keramika{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-72 h-56 relative">
          <img src={water} alt="projekty" className="w-72 h-56 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
              <p className=" text-white text-sm  text-center font-medium">
                Truhlíky{" "}
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="w-72 h-56 relative">
          <img src={onion} alt="realizace" className="w-72 h-56 rounded-2xl" />
          <div className="absolute bottom-0 left-0 w-full">
            <div className="bg-boxGreen opacity-85 absolute w-full h-14 bottom-0 left-0 rounded-2xl flex items-center justify-center">
              <p className=" text-white text-sm  text-center font-medium">
                Skleníky{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* cards end */}
    </div>
  );
}

export default Sortiment;
