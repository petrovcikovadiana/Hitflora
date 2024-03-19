import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const cardInfo = [
  {
    date: "14 bře 2024",
    title: "Začátek jarní sezóny 2024",
    details: [
      "Sezóna 2024 díky počasí právě začíná, již teď je pro Vás připravena široká nabídka letniček, macešky, petrklíče, dále přibývá také sortiment skalniček, trvalek, okrasných rostlin a spoustu dalšího.",
    ],
    alt: "letnicky",
    image: "/assets/avif/letnicky.avif",
  },
  {
    date: "14 bře 2024",
    title: "Zahájen prodej ovocných stromků",
    details: [
      "Máme pro vás široký sortiment ovocných stromků včetně drobného ovoce. Na  výsadbu je nyní ideální doba, s výběrem rádi poradíme.",
    ],
    alt: "stromky",
    image: "/assets/avif/stromky.avif",
  },
];

function News() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <div className="flex">
            <div className="w-full max-w-[1440px] mx-auto">
              <div className="pt-24 xl:px-80 xl:items-start xl:text-start text-center items-center">
                <h1 className="font-bold text-black uppercase text-2xl">
                  Aktuálně
                </h1>
                <h1 className="font-bold text-headerGreen uppercase text-2xl">
                  u nás
                </h1>
                <hr className="h-px w-24 my-4 bg-lineGrey border-0 opacity-100 mx-auto xl:mx-0" />
              </div>
              <div className="pt-10 md:pt-0 mb-16 px-10 md:px-0">
                {cardInfo.map((card, index) => (
                  <div key={index}>
                    <div className="flex md:flex-row flex-col gap-5 items-center justify-center mx-auto md:my-10">
                      <img
                        src={process.env.PUBLIC_URL + card.image}
                        alt={card.alt}
                        className="block object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl"
                        loading="lazy"
                      />
                      <div className="md:w-1/3">
                        <h5 className="text-logoRed text-sm pb-2 font-bold">
                          {card.date}
                        </h5>
                        <h3 className="text-headerGreen text-2xl pb-5">
                          {card.title}
                        </h3>
                        {card.details.map((detail, detailIndex) => (
                          <p
                            className="md:text-start text-sm tracking-wide"
                            key={detailIndex}
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                    {index < cardInfo.length - 1 && (
                      <hr className="h-px w-96 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default News;
