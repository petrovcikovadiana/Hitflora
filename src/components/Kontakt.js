import React from "react";
import Navbar from "./Navbar";

function Kontakt() {
  return (
    <div>
      <Navbar /> {/* contact form start */}
      <div className="">
        <h1 className="text-headerGreen text-xl flex items-center justify-center mx-auto">
          Kontaktní formulář
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
      {/* contact form end */}
    </div>
  );
}

export default Kontakt;
