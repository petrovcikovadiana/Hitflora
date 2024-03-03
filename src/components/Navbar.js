import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "assets/hitflora-(1).png";
import { LiaPhoneVolumeSolid, LiaPhoneSlashSolid } from "react-icons/lia";

const Navbar = () => {
  const [textColor, setTextColor] = useState("");
  const [fillColor, setFillColor] = useState("");
  const [phoneIcon, setPhoneIcon] = useState(
    <LiaPhoneVolumeSolid className="w-5 h-5" />
  );

  useEffect(() => {
    // Function to determine and set fill color and icon based on the current time
    const setColorAndIconBasedOnTime = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 7 && currentHour < 16) {
        setFillColor("#90CA3E");
        setPhoneIcon(
          <LiaPhoneVolumeSolid
            className="w-5 h-5"
            style={{ fill: fillColor }}
          />
        );
      } else {
        setFillColor("#CC0000");
        setPhoneIcon(
          <LiaPhoneSlashSolid className="w-5 h-5" style={{ fill: fillColor }} />
        );
      }
    };

    // Initial call to set fill color and icon
    setColorAndIconBasedOnTime();

    // Set up an interval to update the fill color and icon every minute (or adjust as needed)
    const intervalId = setInterval(setColorAndIconBasedOnTime, 60000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [fillColor]);

  useEffect(() => {
    // Function to determine and set text color based on the current time
    const setTextColorBasedOnTime = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 7 && currentHour < 16) {
        setTextColor("#90CA3E");
      } else {
        setTextColor("#CC0000");
      }
    };

    // Initial call to set text color
    setTextColorBasedOnTime();

    // Set up an interval to update the text color every minute (or adjust as needed)
    const intervalId = setInterval(setTextColorBasedOnTime, 60000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    // nav desktop
    <nav className="bg-navbarGreen text-white fixed top-0 left-0 right-0 z-40 mx-auto  md:max-w-[600px]  xl:max-w-[2560px]">
      <div className=" mx-auto px-7">
        <div className="flex justify-between md:justify-center items-center h-16 space-x-20  ">
          <div className="flex  items-center">
            {" "}
            {/* Logo */}
            <h3 className="pr-2 font-bold">HiT</h3>
            <Link to="/">
              {/* TEN STROM JE TURECKÁ LÍSKA */}
              <img src={logo} alt="logo" className="text-white h-8 w-8 " />
            </Link>
            <h3 className="text-logoRed pl-2 font-bold">FLORA s.r.o.</h3>
          </div>

          <div className="flex items-center">
            {/* nav list desktop*/}
            <ul className="hidden md:flex space-x-6 px-44 lg:px-22">
              <li>
                <Link to="/">
                  <a href="#home" className="text-white hover:text-accent">
                    Domů
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/aktualne">
                  <a href="#about" className="text-white hover:text-accent">
                    Aktuálně
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/sortiment">
                  <a href="/sortiment" className="text-white hover:text-accent">
                    Sortiment
                  </a>
                </Link>
              </li>
              <li>
                <a href="#work" className="text-white hover:text-accent">
                  Naše služby
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-accent">
                  O nás
                </a>
              </li>
              <li>
                {" "}
                <Link to="/kontakt">
                  <a href="#contact" className="text-white hover:text-accent">
                    Kontakt
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            {/* Phone number with icon */}
            <div className="flex items-center gap-2">
              {phoneIcon}
              <span style={{ color: textColor }}>+420 775 102 189</span>
            </div>
          </div>
          <div className="md:hidden ">
            {/* hamburger button mobile  */}
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none "
            >
              {mobileMenuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden  ">
          {/* hamburger list */}
          <ul className="flex flex-col space-y-5 pt-5 text-white items-center h-screen">
            <li>
              <a href="#home">Domů</a>
            </li>
            <li>
              <Link to="/aktualne">
                <a href="#about">Aktuálně</a>
              </Link>
            </li>
            <li>
              <Link to="/sortiment">
                <a href="#services">Sortiment</a>
              </Link>
            </li>
            <li>
              <a href="#work">Naše služby</a>
            </li>
            <li>
              <a href="#work">O nás</a>
            </li>
            <li>
              <Link to="/kontakt">
                <a href="#contact">Kontakt</a>
              </Link>
            </li>
            <div className="flex items-center gap-2 justify-center pt-10">
              {phoneIcon}
              <span style={{ color: textColor }}>+420 775 102 189</span>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
