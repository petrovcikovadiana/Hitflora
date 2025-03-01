import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LiaPhoneVolumeSolid, LiaPhoneSlashSolid } from "react-icons/lia";
import { SlSocialFacebook } from "react-icons/sl";
import { LuInstagram } from "react-icons/lu";

const Navbar = () => {
  // Function to change color of phone number
  const [textColor, setTextColor] = useState("");
  const [fillColor, setFillColor] = useState("");
  const [phoneIcon, setPhoneIcon] = useState(
    <LiaPhoneVolumeSolid className="w-5 h-5" />
  );
  const phoneNumber = "+420 775 102 189";
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Navbar links
  const navLinks = [
    { path: "/", label: "Domů" },
    { path: "/aktualne", label: "Aktuálně" },
    { path: "/sortiment", label: "Sortiment" },
    { path: "/nase-sluzby", label: "Naše služby", isAnchor: true },
    { path: "/o-nas", label: "O nás", isAnchor: true },
    { path: "/kontakt", label: "Kontakt" },
  ];

  useEffect(() => {
    // Function to determine and set fill color and icon based on the current time and day
    const setColorAndIconBasedOnTimeAndDay = () => {
      const currentHour = new Date().getHours();
      const currentDate = new Date();
      const currentDay = currentDate.getDay();

      if (currentDay === 0) {
        // Neděle
        setFillColor("#CC0000");
        setTextColor("#CC0000");
        setPhoneIcon(
          <LiaPhoneSlashSolid className="w-5 h-5" style={{ fill: "#CC0000" }} />
        );
      } else if (currentHour >= 7 && currentHour < 18) {
        setFillColor("#90CA3E");
        setTextColor("#90CA3E");
        setPhoneIcon(
          <LiaPhoneVolumeSolid
            className="w-5 h-5"
            style={{ fill: "#90CA3E" }}
          />
        );
      } else {
        setFillColor("#CC0000");
        setTextColor("#CC0000");
        setPhoneIcon(
          <LiaPhoneSlashSolid className="w-5 h-5" style={{ fill: "#CC0000" }} />
        );
      }
    };

    // Initial call to set fill color and icon
    setColorAndIconBasedOnTimeAndDay();

    // Set up an interval to update the fill color and icon every minute (or adjust as needed)
    const intervalId = setInterval(setColorAndIconBasedOnTimeAndDay, 60000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    // Nav desktop
    <nav className="bg-navbarGreen text-white fixed top-0 left-0 right-0 z-40 w-full">
      <div className=" mx-auto px-7 xl:px-0">
        <div className="flex justify-between lg:justify-center items-center h-16 space-x-20  ">
          <div className="flex  items-center">
            {" "}
            {/* Logo and company name */}
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/logo-white.svg"}
                alt="logo"
                className="text-white md:w-36 h-14"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            {/* Nav list desktop*/}
            <ul className="flex space-x-4 xl:space-x-6 xl:px-44 items-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.isAnchor ? (
                    <a
                      href={link.path}
                      className="text-white hover:text-headerGreen"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-white hover:text-headerGreen"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            {/* Phone icon and number */}
            <div className="flex items-center gap-2">
              {phoneIcon}
              <span style={{ color: fillColor }}>+420 775 102 189</span>
            </div>
          </div>
          <div className="md:block lg:hidden">
            {/* Hamburger button mobile  */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
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
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:block lg:hidden  ">
          {/* Hamburger links */}
          <ul className="flex flex-col space-y-5 pt-5 text-white items-center h-screen">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>
                  <a href={link.isAnchor ? link.path : null}>{link.label}</a>
                </Link>
              </li>
            ))}
            <div
              onClick={handlePhoneCall}
              className="flex items-center gap-2 justify-center pt-10"
            >
              {" "}
              {phoneIcon}
              <span style={{ color: textColor }}>{phoneNumber}</span>
            </div>
            <div className="flex flex-row items-center mx-auto gap-2 pt-3 justify-center">
              {" "}
              <a
                href="https://www.instagram.com/zahradnictvi_hit_flora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <LuInstagram className="w-10 h-10 text-headerGreen" />
              </a>
              <a
                href="https://www.facebook.com/Zahradnictv%C3%AD-Hit-Flora-105259054403271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialFacebook className="w-10 h-10 text-headerGreen" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
