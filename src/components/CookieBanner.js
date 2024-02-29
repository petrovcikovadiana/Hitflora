import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const CookieBanner = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const cookieConsent = getCookie("cookieConsent");
    if (cookieConsent === "true") {
      setShowCookieBanner(false);
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  const handleAccept = () => {
    document.cookie =
      "cookieConsent=true; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/";
    console.log("Uživatel udělil souhlas s používáním cookies.");
    setShowCookieBanner(false);
  };

  const handleDecline = () => {
    console.log("Uživatel odmítl používání cookies.");
    setShowCookieBanner(false);
  };

  return (
    showCookieBanner && (
      <div className="fixed  bottom-0 left-0 right-0 p-4 bg-black/80 text-white z-50">
        <p className="mb-2 text-center text-sm">
          Tato stránka využívá cookies. Kliknutím na tlačítko "Souhlasím"
          vyjadřujete souhlas s jejich používáním.
        </p>
        <div className="flex space-x-4 items-center justify-center">
          <button
            className="px-4 py-2 bg-headerGreen text-white rounded-xl text-sm"
            onClick={handleAccept}
          >
            Souhlasím
          </button>
          <button
            className="px-4 py-2 bg-black/40 text-white rounded-xl text-sm"
            onClick={handleDecline}
          >
            Nesouhlasím
          </button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
