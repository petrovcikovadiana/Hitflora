import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Cookies from "js-cookie";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CookieBanner = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [modal, setModal] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [technicalChecked, setTechnicalChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (cookieConsent === "true") {
      setShowCookieBanner(false);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365, path: "/" });

    // Skrytí cookie lišty
    setShowCookieBanner(false);
  };

  const handleDecline = () => {
    Cookies.set("cookieConsent", "false", { path: "/" });

    setShowCookieBanner(false);
  };

  const handleEdit = () => {
    if (analyticsChecked) {
      Cookies.set("analyticsConsent", "true", { expires: 365, path: "/" });
    }
    if (technicalChecked) {
      Cookies.set("technicalConsent", "true", { expires: 365, path: "/" });
    }
    if (marketingChecked) {
      Cookies.set("marketingConsent", "true", { expires: 365, path: "/" });
    }

    toggleModal();
    setShowCookieBanner(false);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    showCookieBanner && (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 text-white z-50">
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
        <div className="flex items-center justify-center pt-2">
          <button
            className="text-white rounded-xl text-sm"
            onClick={toggleModal}
          >
            Upravit
          </button>
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content  mx-auto text-center ">
                <h4 className="text-center text-md pb-4 text-slate-700 font-bold">
                  Přizpůsobte si zde své nastavení cookies{" "}
                </h4>
                <hr className="w-64 my-1  mx-auto bg-gray-100 border-1 " />

                <div className="my-5 ">
                  <input
                    type="checkbox"
                    id="technicalCheckbox"
                    name="technicalCheckbox"
                    checked={technicalChecked}
                    onChange={() => setTechnicalChecked(!technicalChecked)}
                  />
                  <label
                    htmlFor="scales "
                    className="text-slate-700 font-bold pl-2"
                  >
                    Technické cookies
                  </label>
                </div>
                <p className="text-black text-sm pb-5">
                  Technické cookies jsou nezbytné pro správné fungování webu a
                  všech funkcí, které nabízí. Jsou odpovědné mj. za uchovávání
                  produktů v košíku, zobrazování seznamu oblíbených produktů
                  (schránka), přizpůsobení filtrů, nákupní proces a ukládání
                  nastavení soukromí. Technické cookies nemohou být individuálně
                  deaktivovány nebo aktivovány.
                </p>

                <hr className="w-96 my-1  mx-auto bg-gray-100 border-1 " />

                <div className="my-5 ">
                  <input
                    type="checkbox"
                    id="analyticsCheckbox"
                    name="analyticsCheckbox"
                    checked={analyticsChecked}
                    onChange={() => setAnalyticsChecked(!analyticsChecked)}
                  />
                  <label
                    htmlFor="analyticsCheckbox"
                    className="text-slate-700 font-bold pl-2"
                  >
                    Analytické cookies
                  </label>
                </div>
                <p className="text-black text-sm pb-5">
                  Analytické cookies nám umožňují měření výkonu našeho webu.
                  Jejich pomocí určujeme počet návštěv a zdroje návštěv našich
                  internetových stránek. Data získaná pomocí těchto cookies
                  zpracováváme souhrnně, bez použití identifikátorů, které
                  ukazují na konkrétní uživatele našeho webu. Pokud vypnete
                  používání analytických cookies ve vztahu k Vaší návštěvě,
                  ztrácíme možnost analýzy výkonu a tím následně k optimalizaci
                  webu.
                </p>

                <hr className="w-96 my-1  mx-auto bg-gray-100 border-1 " />

                <div className="my-5 ">
                  <input
                    type="checkbox"
                    id="marketingCheckbox"
                    checked={marketingChecked}
                    onChange={() => setMarketingChecked(!marketingChecked)}
                  />
                  <label
                    htmlFor="marketingCheckbox"
                    className="text-slate-700 font-bold pl-2"
                  >
                    Marketingové cookies
                  </label>
                </div>
                <p className="text-black text-sm pb-5">
                  Marketingové (reklamní) cookies používáme my nebo naši
                  partneři, abychom Vám mohli zobrazit vhodné obsahy nebo
                  reklamy jak na našich stránkách, tak na stránkách třetích
                  subjektů. Pokud nevyjádříte souhlas, nebudete příjemcem obsahů
                  a reklam přizpůsobených Vašim zájmům.
                </p>

                <button
                  onClick={handleEdit}
                  className="bg-headerGreen px-4 rounded-xl w-32 h-[40px] mb-5 text-white "
                >
                  Uložit
                </button>
                <button
                  className="close-modal  text-gray-500"
                  onClick={toggleModal}
                >
                  <AiOutlineCloseCircle />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default CookieBanner;
