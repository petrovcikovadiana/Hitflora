import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

// Komponenta pro modální okno pro úpravu nastavení cookies
const ModalWindow = ({
  analyticsChecked,
  setAnalyticsChecked,
  marketingChecked,
  setMarketingChecked,
  technicalChecked,
  handleEdit,
  toggleModal,
}) => {
  return (
    <>
      <div className="modal">
        {" "}
        {/* Div pro modální okno */}
        <div onClick={toggleModal} className="overlay"></div>{" "}
        {/* Overlay pro zavření modálního okna */}
        <div className="modal-content mx-auto text-center">
          {" "}
          {/* Obsah modálního okna */}
          <h4 className="text-center text-md pb-4 text-slate-700 font-bold">
            {" "}
            Přizpůsobte si zde své nastavení cookies{" "}
          </h4>
          <hr className="w-64 my-1  mx-auto bg-gray-100 border-1 " />{" "}
          {/* Checkbox a popisek pro technické cookies */}
          <div className="my-5 ">
            <input
              type="checkbox"
              id="technicalCheckbox"
              name="technicalCheckbox"
              checked
              disabled
            />
            <label htmlFor="scales " className="text-slate-700 font-bold pl-2">
              Technické cookies
            </label>
          </div>
          {/* Popis technických cookies */}
          <p className="text-black text-sm pb-5">
            Technické cookies jsou klíčové pro správné fungování webových
            stránek a všech dostupných funkcí. Mezi jejich úkoly patří
            uchovávání produktů v košíku, zobrazení seznamu oblíbených položek,
            přizpůsobení filtrů, usnadnění nákupního procesu a ukládání
            nastavení soukromí. Tyto cookies nelze individuálně deaktivovat ani
            aktivovat.
          </p>
          {/* Oddělovač */}
          <hr className="w-96 my-1  mx-auto bg-gray-100 border-1 " />
          {/* Checkbox a popisek pro analytické cookies */}
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
          {/* Popis analytických cookies */}
          <p className="text-black text-sm pb-5">
            Analytické cookies nám umožňují sledovat výkon našich webových
            stránek. Pomocí těchto cookies měříme počet návštěv a identifikujeme
            zdroje návštěv naší stránky na internetu. Data získaná analytickými
            cookies jsou zpracovávána anonymně, bez použití identifikátorů,
            které by odhalovaly jednotlivé uživatele našich stránek. Pokud
            zakážete používání analytických cookies, ztrácíme schopnost
            analyzovat výkon webu a optimalizovat ho podle potřeb uživatelů.
          </p>
          {/* Oddělovač */}
          <hr className="w-96 my-1  mx-auto bg-gray-100 border-1 " />
          {/* Checkbox a popisek pro marketingové cookies */}
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
          {/* Popis marketingových cookies */}
          <p className="text-black text-sm pb-5">
            Marketingové (reklamní) cookies jsou používány námi nebo našimi
            partnery k zobrazení relevantního obsahu nebo reklam jak na našich
            stránkách, tak na stránkách třetích stran. Pokud neposkytnete
            souhlas s jejich použitím, nebude Vám zobrazován obsah ani reklamy
            přizpůsobené Vašim zájmům.
          </p>
          <button
            onClick={() => {
              handleEdit();
              toggleModal();
              window.location.reload();
            }}
            className="bg-headerGreen px-4 rounded-xl w-32 h-[40px] mb-5 text-white "
          >
            Uložit
          </button>
          <button className="close-modal text-gray-500" onClick={toggleModal}>
            <AiOutlineCloseCircle className="w-6 h-6" />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
