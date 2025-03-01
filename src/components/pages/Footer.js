import React, { useState, useEffect } from "react";
import { SlLocationPin, SlSocialFacebook } from "react-icons/sl";
import { LuInstagram } from "react-icons/lu";

import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import ModalWindow from "./ModalWindow";
import useCookieConsent from "./useCookieConsent";
import axios from "axios";

function Footer() {
  const formatPhoneNumber = (number) => {
    return number.replace(/(\d{3})(?=\d)/g, "$1 ");
  };
  //phone numbers API
  const [contactInfo, setContactInfo] = useState({});
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const tenantId = "5f62d984506f2792";

        const response = await axios.get(
          `https://eclipse.cloudylake.io/api/v1/tenants/${tenantId}/configs/key/contactInfo`
        );

        const data = response.data;
        if (
          data &&
          data.data &&
          data.data.config &&
          data.data.config.config_value
        ) {
          setContactInfo(data.data.config.config_value);
        } else {
          console.error("Unexpected API response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };

    fetchContactInfo();
  }, []);
  const {
    analyticsChecked,
    setAnalyticsChecked,
    setTechnicalChecked,
    technicalChecked,
    marketingChecked,
    setMarketingChecked,
    handleEdit,
  } = useCookieConsent();

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalChecked, setModalChecked] = useState({
    analytics: analyticsChecked,
    marketing: marketingChecked,
    technical: technicalChecked,
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Aktualizovat modalChecked podle změn v analytických a marketingových cookies
  useEffect(() => {
    setModalChecked({
      analytics: analyticsChecked,
      marketing: marketingChecked,
      technical: technicalChecked,
    });
  }, [analyticsChecked, marketingChecked, technicalChecked]);

  // Funkce pro aktualizaci stavů v komponentě Footer po změně v modálním okně
  const updateFooterState = (checked) => {
    setModalChecked(checked);
    setAnalyticsChecked(checked.analytics);
    setMarketingChecked(checked.marketing);
    setTechnicalChecked(checked.technical);
  };

  return (
    <>
      <ScrollToTop />
      <div className="w-full md:h-44 bg-circleGreen text-sm mx-auto text-center">
        <div className="flex md:flex-row flex-col md:gap-7 gap-4 items-center justify-center xl:py-5 md:py-3  py-6 ">
          {/* Logo */}
          <div className="flex flex-row gap-2 items-center justify-center   ">
            {" "}
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/logo-black.svg"}
                alt="logo"
                className="text-white w-28 h-14"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="text-sm flex md:flex-row flex-col gap-3 items-center justify-center  text-center ">
            <SlLocationPin className="w-7 h-7 text-headerGreen" />
            <a
              href="https://maps.app.goo.gl/6PH2jkcUEqDBQejL7"
              target="_blank"
              rel="noreferrer"
            >
              <div className="">
                {" "}
                <p>HiT FLORA s.r.o.</p>
                <p>Vítězství 216</p>
                <p>405 02 Děčín 31</p>
                <p>Křešice</p>
              </div>
            </a>
          </div>
          <div className="text-sm flex md:flex-row flex-col gap-3 items-center justify-center text-center ">
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
          <div className="text-sm flex md:flex-row flex-col gap-3 items-center justify-center text-center">
            <BsTelephone className="w-7 h-7 text-headerGreen" />
            <div>
              {contactInfo.mobileNumber && (
                <p>
                  <p className="font-bold text-headerGreen">Mobil</p>
                  {formatPhoneNumber(contactInfo.mobileNumber.number)}
                </p>
              )}
              {contactInfo.phoneNumber && (
                <p>
                  <p className="font-bold text-headerGreen">Prodejna</p>
                  {formatPhoneNumber(contactInfo.phoneNumber.number)}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p>Sledujte nás na sociálních sítích</p>
            <div className="flex flex-row items-center gap-2 pt-3 justify-center">
              {" "}
              <a
                href="https://www.instagram.com/zahradnictvi_hit_flora/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <LuInstagram className="w-6 h-6 text-headerGreen" />
              </a>
              <a
                href="https://www.facebook.com/Zahradnictv%C3%AD-Hit-Flora-105259054403271/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialFacebook className="w-6 h-6 text-headerGreen" />
              </a>
            </div>
            <div className="pt-3">
              <button onClick={toggleModal}>Upravit nastavení cookie </button>
              {isModalOpen && (
                <ModalWindow
                  analyticsChecked={modalChecked.analytics}
                  setAnalyticsChecked={(value) =>
                    setModalChecked((prev) => ({
                      ...prev,
                      analytics: value,
                    }))
                  }
                  marketingChecked={modalChecked.marketing}
                  setMarketingChecked={(value) =>
                    setModalChecked((prev) => ({ ...prev, marketing: value }))
                  }
                  technicalChecked={modalChecked.technical}
                  setTechnicalChecked={(value) =>
                    setModalChecked((prev) => ({ ...prev, technical: value }))
                  }
                  handleEdit={() => {
                    handleEdit(modalChecked); // Aktualizace stavu cookies
                    updateFooterState(modalChecked); // Aktualizace stavu modálního okna
                  }}
                  toggleModal={toggleModal}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex bg-circleGreen">
          <p className="text-xs font-normal  items-center justify-center mx-auto">
            &copy; 2024 CloudyLake.io All rights reserved.
          </p>{" "}
        </div>
      </div>
    </>
  );
}

export default Footer;
