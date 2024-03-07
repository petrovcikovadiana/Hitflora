import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram, SlLocationPin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* footer start */}
      <div className="w-full md:h-44 bg-circleGreen lg:px-44 md:px-16 text-sm mx-auto text-center">
        <div className="flex md:flex-row flex-col md:gap-12 gap-4 items-center justify-center xl:py-5 md:py-0 lg:py-0 py-6 ">
          {/* Logo */}
          <div className="flex flex-row gap-2 items-center justify-center   ">
            {" "}
            <h3 className="font-bold">HiT</h3>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/hitflora-(1).png"}
                alt="logo"
                className="text-white h-8 w-8"
                loading="lazy"
              />
              {/* Use appropriate styling for your logo */}
            </Link>
            <h3 className="text-logoRed font-bold">FLORA s.r.o.</h3>{" "}
          </div>
          <div className="text-sm flex md:flex-row flex-col gap-3 items-center justify-center  text-center ">
            <SlLocationPin className="w-7 h-7 text-headerGreen" />
            <a href="https://maps.app.goo.gl/6PH2jkcUEqDBQejL7" target="_blank">
              <div className="">
                {" "}
                <p>HiT FLORA s.r.o.</p>
                <p>Vítězství 216</p>
                <p>405 02 Děčín 31</p>
                <p>Křešice</p>
              </div>
            </a>
          </div>
          <div className="text-sm flex md:flex-row flex-col md:gap-5 gap-3 items-center justify-center text-center ">
            <GoMail className="w-7 h-7 text-headerGreen" />
            <div>
              {" "}
              <p>Ing. Břetislav Hons</p>
              <p className="font-bold text-headerGreen">Jednatel firmy</p>{" "}
              <p className="pb-3">hitflora@hitflora.cz</p>
              <p>Ing. Renáta Tesárová</p>
              <p className="font-bold text-headerGreen">Zahradní architekt</p>
              <p>tesarova@hitflora.cz</p>
            </div>
          </div>{" "}
          <div className="text-sm flex md:flex-row flex-col md:gap-5 gap-3 items-center justify-center text-center">
            <BsTelephone className="w-7 h-7 text-headerGreen" />
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
            <div className="flex flex-row items-center gap-2 pt-3 justify-center">
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

export default Footer;
