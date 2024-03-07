import React from "react";
import Footer from "./Footer";
import MapComponent from "./MapComponent";
import Navbar from "./Navbar";

function Kontakt() {
  return (
    <div>
      <Navbar /> {/* contact form start */}
      <div className="flex flex-col md:px-64 mx-3 pt-24 items-center">
        <h1 className="font-bold text-xl uppercase  text-start">
          V případě dotazů nás kontaktujte, rádi Vám{" "}
          <span className="text-headerGreen">poradíme</span>
        </h1>
        {/* horizontal rule */}
        <hr class="h-px w-44 my-4 bg-lineGrey border-0 mx-auto md:mx-0" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-12 md:my-10 px-4 xl:px-80 max-w-[1440px] mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-black text-xl uppercase font-bold flex items-center justify-center mx-auto">
            Kontaktní&nbsp;<span className="text-headerGreen"> formulář</span>
          </h1>

          <form className="max-w-md mx-auto my-10 px-16 md:px-0">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Jméno
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 p-2 w-full border shadow-sm  focus:outline-none sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 p-2 w-full border shadow-sm block focus:outline-none sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Zpráva
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="mt-1 p-2 w-full border shadow-sm  focus:outline-none block sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-headerGreen hover:bg-textGrey"
            >
              Odeslat
            </button>
          </form>
        </div>
        <MapComponent />
      </div>
      <Footer />
    </div>
  );
}

export default Kontakt;
