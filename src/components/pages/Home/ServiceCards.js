import React from "react";

function ServiceCards({ cards }) {
  return (
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
    </div>
  );
}

export default ServiceCards;
