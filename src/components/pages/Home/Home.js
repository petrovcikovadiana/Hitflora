import React, { useEffect, useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import axios from "axios";

import { IoCloseOutline } from "react-icons/io5";
import OpeningHours from "./OpeningHours";
import ServiceCards from "./ServiceCards";
import Hero from "./Hero";
import IntroText from "./IntroText";
import Circles from "./Circles";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import AboutImages from "./AboutImages";

const items = [
  { text: "Nabízíme široký sortiment rostlin i doplňkového zboží" },
  { text: "Poradíme Vám s výběrem rostlin a veškerého zboží" },
  { text: "Po vzájemné dohodě Vám vybrané zboží doručíme" },
  { text: "Osázíme Vám truhlíky a nádoby (keramiku, mísy apod.)" },
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
  const [hours, setHours] = useState([]);

  useEffect(() => {
    const fetchHours = async () => {
      try {
        const tenantId = "5f62d984506f2792";
        const response = await axios.get(
          `https://eclipse.cloudylake.io/api/v1/tenants/${tenantId}/configs/key/openingHours`
        );
        const data = response.data;
        const openingHoursConfig = data.data.config.config_value;
        console.log("Response data:", data);

        const formatTime = (time) => time.replace(/:00$/, "");

        // Set opening hours
        const mondayHours = {
          day: "Po",
          open: formatTime(openingHoursConfig.day_mon.open),
          close: formatTime(openingHoursConfig.day_mon.close),
          isOpen: openingHoursConfig.day_mon.isOpen ?? true,
        };
        const tuesdayHours = {
          day: "Úterý",
          open: formatTime(openingHoursConfig.day_tue.open),
          close: formatTime(openingHoursConfig.day_tue.close),
          isOpen: openingHoursConfig.day_tue.isOpen ?? true,
        };
        const wednesdayHours = {
          day: "Středa",
          open: formatTime(openingHoursConfig.day_wed.open),
          close: formatTime(openingHoursConfig.day_wed.close),
          isOpen: openingHoursConfig.day_wed.isOpen ?? true,
        };
        const thursdayHours = {
          day: "Čtvrtek",
          open: formatTime(openingHoursConfig.day_thu.open),
          close: formatTime(openingHoursConfig.day_thu.close),
          isOpen: openingHoursConfig.day_thu.isOpen ?? true,
        };
        const fridayHours = {
          day: "Pá",
          open: formatTime(openingHoursConfig.day_fri.open),
          close: formatTime(openingHoursConfig.day_fri.close),
          isOpen: openingHoursConfig.day_fri.isOpen ?? true,
        };
        const saturdayHours = {
          day: "Sobota",
          open: formatTime(openingHoursConfig.day_sat.open),
          close: formatTime(openingHoursConfig.day_sat.close),
          isOpen: openingHoursConfig.day_sat.isOpen ?? true,
        };
        const sundayHours = {
          day: "Neděle",
          open: null,
          close: null,
          isOpen: false, // Sunday is closed
        };
        // Check if weekdays have the same opening hours
        const isWeekdaysSame =
          mondayHours.open === tuesdayHours.open &&
          mondayHours.close === tuesdayHours.close &&
          mondayHours.open === wednesdayHours.open &&
          mondayHours.close === wednesdayHours.close &&
          mondayHours.open === thursdayHours.open &&
          mondayHours.close === thursdayHours.close &&
          mondayHours.open === fridayHours.open &&
          mondayHours.close === fridayHours.close;

        let hoursArray = [];

        if (isWeekdaysSame) {
          // If weekdays have the same opening hours, display them together
          hoursArray.push({
            day: "Po - Pá",
            open: mondayHours.open,
            close: mondayHours.close,
            isOpen: mondayHours.isOpen,
          });
        } else {
          // If weekdays have different opening hours, display them separately
          hoursArray.push(
            mondayHours,
            tuesdayHours,
            wednesdayHours,
            thursdayHours,
            fridayHours
          );
        }

        // Add Saturday and Sunday
        hoursArray.push(saturdayHours, sundayHours);

        setHours(hoursArray);
      } catch (error) {
        console.error("Error fetching hours:", error);
      }
    };

    fetchHours();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://hitflora.cz/" />
        <meta name="robots" content="index, follow" />{" "}
        <title>Hitflora | Sadovnické úpravy a prodej okrasných dřevin</title>
        <meta
          name="description"
          content="Vytváříme krásné zahrady! Nabízíme profesionální sadovnické úpravy, prodej okrasných dřevin a široký sortiment kytek a zahradních potřeb."
        />
      </Helmet>
      <Navbar />
      {/* hero  */}
      <Hero />

      {/* content  */}
      <IntroText />

      {/* circles  */}
      <Circles />

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
        {/* cards  */}
        <ServiceCards cards={cards} />
      </div>
      {/* Services end */}
      {/* About  */}
      <AboutSection />

      {/* Two images in row*/}
      <AboutImages />

      {/* services and sale */}
      <ServicesSection items={items} />

      {/* opening hours */}
      <OpeningHours hours={hours} />

      <Footer />
    </>
  );
}
export default Home;
