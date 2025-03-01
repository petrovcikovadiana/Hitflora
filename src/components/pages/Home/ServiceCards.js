import React from "react";
import cards from "../../data/cards";

function ServiceCards() {
  return (
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
      <div className="flex flex-wrap gap-5 py-5 md:px-24 lg:px-48 mx-auto items-center justify-center">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img
              src={process.env.PUBLIC_URL + card.src}
              alt={card.alt}
              className="object-cover md:w-64 md:h-48 w-48 h-40 rounded-2xl"
              data-src={process.env.PUBLIC_URL + card.src}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="greenBoxh">
                <p className="text-white text-sm text-center font-medium">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default ServiceCards;
