import React from "react";

function OpeningHours({ hours }) {
  return (
    <div className="flex md:w-1/2 justify-center items-center mx-auto text-center py-10">
      <div className="container-hours flex flex-col bg-lightGrey w-[400px] h-[400px] justify-center items-center text-center">
        {/* icon forest */}
        <img
          src={process.env.PUBLIC_URL + "/assets/svg/forest.svg"}
          alt="forest-icon"
          className="w-24 h-24 "
          loading="lazy"
        />

        <h4 className="font-bolder">Otevírací doba</h4>
        <hr className="h-px w-44 my-4 bg-dotGreen border-0 mx-auto" />
        <div className="space-y-2 tracking-wider text-sm">
          {hours.map((entry, index) => (
            <div key={index} className="flex flex-row gap-5 items-center">
              <div
                className={`h-3 w-3 rounded-full ${
                  entry.isOpen ? "bg-headerGreen" : "bg-logoRed"
                }`}
              ></div>{" "}
              <p>{entry.day}</p>
              <p>
                {entry.isOpen
                  ? `${entry.open} - ${entry.close} hod`
                  : "zavřeno"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpeningHours;
