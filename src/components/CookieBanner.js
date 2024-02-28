import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const CookieBanner = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleAccept = () => {
    // Simulace uložení informace o souhlasu do cookie
    document.cookie =
      "cookieConsent=true; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/";

    // Zobrazení zprávy v konzoli
    console.log("Uživatel udělil souhlas s používáním cookies.");

    // Zobrazení hodnoty cookie v konzoli pro vývojové účely
    console.log("Cookie hodnota:", document.cookie);

    // Skrytí cookie lišty
    setShowCookieBanner(false);
  };

  const handleDecline = () => {
    // Zobrazení zprávy v konzoli
    console.log("Uživatel odmítl používání cookies.");

    // Skrytí cookie lišty
    setShowCookieBanner(false);
  };

  return (
    showCookieBanner && (
      <div className="fixed  bottom-0 left-0 right-0 p-4 bg-black/80 text-white ">
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
