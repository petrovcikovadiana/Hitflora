import React from "react";
import dreviny from "assets/sem.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const cardInfo = [
  {
    date: "4 bře 2024",
    title: "Začátek jarní sezóny 2024",
    details: [
      "Sezóna 2024 díky počasí právě začíná, již teď je pro Vás připravena široká nabídka jarních cibulovin, macešky, petrklíče, dále přibývá také sortiment skalniček, trvalek, okrasných rostlin a spoustu dalšího.",
      "Otevírací doba: Pondělí – Sobota 8:00 – 18:00 Nedělě 8:00 – 17:00 Těšíme se na Vaší návštěvu.",
    ],
    image: dreviny,
    alt: "dřeviny",
  },
  {
    date: "4 bře 2024",
    title: "Začátek jarní sezóny 2024",
    details: [
      "Sezóna 2024 díky počasí právě začíná, již teď je pro Vás připravena široká nabídka jarních cibulovin, macešky, petrklíče, dále přibývá také sortiment skalniček, trvalek, okrasných rostlin a spoustu dalšího.",
      "Otevírací doba: Pondělí – Sobota 8:00 – 18:00 Nedělě 8:00 – 17:00 Těšíme se na Vaší návštěvu.",
    ],
    image: dreviny,
    alt: "dřeviny",
  },
  {
    date: "4 bře 2024",
    title: "Začátek jarní sezóny 2024",
    details: [
      "Sezóna 2024 díky počasí právě začíná, již teď je pro Vás připravena široká nabídka jarních cibulovin, macešky, petrklíče, dále přibývá také sortiment skalniček, trvalek, okrasných rostlin a spoustu dalšího.",
      "Otevírací doba: Pondělí – Sobota 8:00 – 18:00 Nedělě 8:00 – 17:00 Těšíme se na Vaší návštěvu.",
    ],
    image: dreviny,
    alt: "dřeviny",
  },
];

function Aktualne() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex bg-lightYellow">
        <div className=" w-full max-w-[1440px] mx-auto ">
          <div className="md:items-start pt-24 md:ml-80 text-center md:text-start">
            <h2 className="font-bold text-headerGreen uppercase text-2xl">
              Aktuálně
            </h2>
            {/* Hr */}
            <hr class="h-px w-24 my-2 bg-lineGrey border-0 opacity-100 mx-auto md:mx-0" />
          </div>

          {/* Cards start */}
          <div className="my-10 px-10 md:px-0 ">
            {cardInfo.map((card, index) => (
              <div key={index}>
                <div className="flex md:flex-row flex-col gap-5 items-center justify-center mx-auto md:my-10">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="hidden md:block object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl "
                  />
                  <div className="md:w-1/3">
                    <p className="text-logoRed text-sm pb-2 font-bold">
                      {card.date}
                    </p>
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

          {/* Cards end */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aktualne;
