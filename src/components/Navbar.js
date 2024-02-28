import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/hitflora (1).png";
import { BsTelephone } from "react-icons/bs";

const Navbar = () => {
  const [textColor, setTextColor] = useState("");
  const [fillColor, setFillColor] = useState("");
  useEffect(() => {
    // Function to determine and set fill color based on the current time
    const setFillColorBasedOnTime = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 7 && currentHour < 16) {
        setFillColor("green");
      } else {
        setFillColor("red");
      }
    };

    // Initial call to set fill color
    setFillColorBasedOnTime();

    // Set up an interval to update the fill color every minute (or adjust as needed)
    const intervalId = setInterval(setFillColorBasedOnTime, 60000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    // Function to determine and set text color based on the current time
    const setTextColorBasedOnTime = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 7 && currentHour < 16) {
        setTextColor("green");
      } else {
        setTextColor("red");
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
    <nav className="bg-navbarGreen text-white fixed top-0 left-0 right-0 z-40  mx-auto  md:max-w-[600px] xl:max-w-[2560px]">
      <div className=" mx-auto px-2">
        <div className="flex justify-between md:justify-center items-center h-16 space-x-20  ">
          <div className="flex items-center">
            {" "}
            {/* Logo */}
            <h3 className="pr-2">HiT</h3>
            <Link to="/">
              {/* TEN STROM JE TURECKÁ LÍSKA */}
              <img src={logo} alt="logo" className="text-white h-8 w-8 " />
              {/* Use appropriate styling for your logo */}
            </Link>
            <h3 className="text-logoRed pl-2">FLORA s.r.o.</h3>
          </div>

          <div className="flex items-center">
            {/* nav list desktop*/}
            <ul className="hidden md:flex space-x-6 px-44">
              <li>
                <Link to="/">
                  <a href="#home" className="text-white hover:text-accent">
                    Domů
                  </a>
                </Link>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-accent">
                  Aktuálně
                </a>
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
                <a href="#contact" className="text-white hover:text-accent">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center">
            {/* Phone number with icon */}
            <div className="flex items-center gap-2">
              <BsTelephone style={{ fill: fillColor }} />
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
        <div className="md:hidden bg-black/10	backdrop-blur-sm ">
          {/* hamburger list */}
          <ul className="flex flex-col space-y-5 text-white items-center h-screen">
            <li>
              <a href="#home">Domů</a>
            </li>
            <li>
              <a href="#about">Aktuálně</a>
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
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
