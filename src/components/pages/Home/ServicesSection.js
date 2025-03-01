import React from "react";
import items from "../../data/items";

function ServicesSection() {
  return (
    <div className="flex md:flex-row flex-col md:pt-10 items-center md:items-start md:text-start text-center z-10 mx-auto  max-w-screen-xl  md:px-16 lg:px-24 xl:px-48">
      {/* left container */}
      <div className="flex flex-col lg:pl-0 ">
        <h2 className="text-bold text-xl uppercase font-bold">naše služby</h2>
        <h2 className="text-bold text-xl uppercase font-bold text-headerGreen">
          prodej
        </h2>
        <h3 className="text-bold text-xl uppercase font-bold">a realizace</h3>
        {/* horizontal rule */}
        <hr class="h-px w-44 my-4 bg-lineGrey border-0 " />
      </div>
      {/* right container */}
      <div className="lg:pl-40 md:pl-16 px-4 ">
        <div>
          {items.map((item, index) => (
            <div key={index} className="flex flex-row gap-3 pb-2">
              <div className="h-4 w-4 rounded-full bg-headerGreen"></div>
              <p className="tracking-wider text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
