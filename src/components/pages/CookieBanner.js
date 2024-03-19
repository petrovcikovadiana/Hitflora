import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Importovat modul pro práci s cookies
import { AiOutlineCloseCircle } from "react-icons/ai"; // Importovat ikonu z React Icons

const CookieBanner = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [modal, setModal] = useState(false); // Stav modálního okna
  const [analyticsChecked, setAnalyticsChecked] = useState(false); // Stav souhlasu s analytickými cookies
  const [technicalChecked, setTechnicalChecked] = useState(false); // Stav souhlasu s technickými cookies
  const [marketingChecked, setMarketingChecked] = useState(false); // Stav souhlasu s marketingovými cookies

  // Efekt pro načtení stavů cookies při prvním renderu
  useEffect(() => {
    const analyticsConsent = Cookies.get("analyticsConsent") === "true"; // Zjistit stav souhlasu s analytickými cookies
    const technicalConsent = Cookies.get("technicalConsent") === "true"; // Zjistit stav souhlasu s technickými cookies
    const marketingConsent = Cookies.get("marketingConsent") === "true"; // Zjistit stav souhlasu s marketingovými cookies
    setShowCookieBanner(true);
    // Aktualizovat stavy checkboxů podle stavů cookies
    setAnalyticsChecked(analyticsConsent);
    setTechnicalChecked(technicalConsent);
    setMarketingChecked(marketingConsent);

    // Kontrola, zda uživatel udělil souhlas s cookies a skryti banneru
    const allConsentsGiven =
      analyticsConsent || technicalConsent || marketingConsent;
    if (allConsentsGiven) {
      setShowCookieBanner(false); // Skrýt banner, pokud uživatel udělil souhlas se všemi cookies
    }
  }, []);

  // Funkce pro přijetí cookies
  const handleAccept = () => {
    Cookies.set("analyticsConsent", "true", { expires: 365, path: "/" }); // Nastavit souhlas s cookies
    Cookies.set("marketingConsent", "true", { expires: 365, path: "/" }); // Nastavit souhlas s cookies
    Cookies.set("technicalConsent", "true", { expires: 365, path: "/" }); // Nastavit souhlas s cookies
    setAnalyticsChecked(true);

    // Nastavit souhlas s analytickými cookies na true
    setShowCookieBanner(false); // Skrýt banner
    window.location.reload();
  };

  // Funkce pro odmítnutí cookies
  const handleDecline = () => {
    Cookies.set("analyticsConsent", "false", { expires: 7, path: "/" }); // Nastavit nesouhlas s cookies
    Cookies.set("technicalConsent", "true", { expires: 365, path: "/" }); // Nastavit nesouhlas s cookies
    Cookies.set("marketingConsent", "false", { expires: 7, path: "/" }); // Nastavit nesouhlas s cookies
    setShowCookieBanner(false); // Skrýt banner
    window.location.reload();
  };
  // Funkce pro editaci cookies
  const handleEdit = () => {
    Cookies.set("technicalConsent", "true", { expires: 365, path: "/" }); // Nastavit souhlas s technickými cookies
    if (analyticsChecked) {
      Cookies.set("analyticsConsent", "true", { expires: 365, path: "/" }); // Nastavit souhlas s analytickými cookies
    } else {
      Cookies.set("analyticsConsent", "false", { expires: 7, path: "/" }); // Nastavit nesouhlas s analytickými cookies
    }
    if (marketingChecked) {
      Cookies.set("marketingConsent", "true", { expires: 365, path: "/" }); // Nastavit souhlas s marketingovými cookies
    } else {
      Cookies.set("marketingConsent", "false", { expires: 7, path: "/" }); // Nastavit nesouhlas s marketingovými cookies
    }
    setShowCookieBanner(false); // Skrýt banner
    toggleModal(); // Přepnout modální okno
    window.location.reload();
  };
  // Funkce pro přepínání modálního okna
  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      // Pokud je modální okno otevřeno, nastavte analytický souhlas na false
      setAnalyticsChecked(false);
      setMarketingChecked(false);
    }
  };

  // Přidání CSS třídy k tělu dokumentu podle stavu modálního okna
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    const loadGoogleAnalyticsScript = () => {
      if (!analyticsChecked) return; // Skript se načte pouze pokud je souhlas s analytickými cookies

      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-M7154RCSE3";
      script.async = true;

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-M7154RCSE3");
      };

      document.head.appendChild(script);
    };

    loadGoogleAnalyticsScript();
  }, [analyticsChecked]);

  // Návratová hodnota komponenty
  return (
    showCookieBanner && (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 text-white z-50">
        <p className="mb-2 text-center text-sm">
          Tato stránka využívá cookies. Kliknutím na tlačítko "Povolit vše"
          vyjadřujete souhlas s jejich používáním.
        </p>
        <div className="flex space-x-4 items-center justify-center">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-dotGreen text-white rounded-xl text-sm"
          >
            Povolit vše
          </button>
          <button
            onClick={handleDecline}
            className="px-4 py-2 bg-black/40 text-white rounded-xl text-sm"
          >
            Odmítnout vše
          </button>
        </div>
        <div className="flex items-center justify-center pt-2">
          <button
            onClick={toggleModal}
            className="text-white rounded-xl text-sm"
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
                    checked
                    disabled
                  />
                  <label
                    htmlFor="scales "
                    className="text-slate-700 font-bold pl-2"
                  >
                    Technické cookies
                  </label>
                </div>
                <p className="text-black text-sm pb-5">
                  Technické cookies jsou klíčové pro správné fungování webových
                  stránek a všech dostupných funkcí. Mezi jejich úkoly patří
                  uchovávání produktů v košíku, zobrazení seznamu oblíbených
                  položek, přizpůsobení filtrů, usnadnění nákupního procesu a
                  ukládání nastavení soukromí. Tyto cookies nelze individuálně
                  deaktivovat ani aktivovat.
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
                  Analytické cookies nám umožňují sledovat výkon našich webových
                  stránek. Pomocí těchto cookies měříme počet návštěv a
                  identifikujeme zdroje návštěv naší stránky na internetu. Data
                  získaná analytickými cookies jsou zpracovávána anonymně, bez
                  použití identifikátorů, které by odhalovaly jednotlivé
                  uživatele našich stránek. Pokud zakážete používání
                  analytických cookies, ztrácíme schopnost analyzovat výkon webu
                  a optimalizovat ho podle potřeb uživatelů.
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
                  Marketingové (reklamní) cookies jsou používány námi nebo
                  našimi partnery k zobrazení relevantního obsahu nebo reklam
                  jak na našich stránkách, tak na stránkách třetích stran. Pokud
                  neposkytnete souhlas s jejich použitím, nebude Vám zobrazován
                  obsah ani reklamy přizpůsobené Vašim zájmům.
                </p>

                <button
                  onClick={handleEdit}
                  className="bg-headerGreen px-4 rounded-xl w-32 h-[40px] mb-5 text-white "
                >
                  Uložit
                </button>
                <button
                  onClick={toggleModal}
                  className="close-modal  text-gray-500"
                >
                  <AiOutlineCloseCircle className="w-6 h-6" />
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
