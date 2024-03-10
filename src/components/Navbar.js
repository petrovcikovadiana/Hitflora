import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LiaPhoneVolumeSolid, LiaPhoneSlashSolid } from "react-icons/lia";

const Navbar = () => {
  // Function to change color of phone number
  const [textColor, setTextColor] = useState("");
  const [fillColor, setFillColor] = useState("");
  const [phoneIcon, setPhoneIcon] = useState(
    <LiaPhoneVolumeSolid className="w-5 h-5" />
  );

  // Navbar links
  const navLinks = [
    { path: "/", label: "Domů" },
    { path: "/aktualne", label: "Aktuálně" },
    { path: "/sortiment", label: "Sortiment" },
    { path: "/nase_sluzby", label: "Naše služby", isAnchor: true },
    { path: "/o_nas", label: "O nás", isAnchor: true },
    { path: "/kontakt", label: "Kontakt" },
  ];

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
    // Nav desktop
    <nav className="bg-navbarGreen text-white fixed top-0 left-0 right-0 z-40 w-full">
      <div className=" mx-auto px-7">
        <div className="flex justify-between lg:justify-center items-center h-16 space-x-20  ">
          <div className="flex  items-center">
            {" "}
            {/* Logo and company name */}
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/logo-black.svg"}
                alt="logo"
                className="text-white h-24 w-24"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            {/* Nav list desktop*/}
            <ul className="hidden lg:flex space-x-4 xl:space-x-6 xl:px-44 items-center">
              {" "}
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>
                    <a
                      href={link.isAnchor ? link.path : null}
                      className="text-white hover:text-headerGreen"
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center">
            {/* Phone icon and number */}
            <div className="flex items-center gap-2">
              {phoneIcon}
              <span style={{ color: textColor }}>+420 775 102 189</span>
            </div>
          </div>
          <div className="md:block lg:hidden">
            {/* Hamburger button mobile  */}
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
