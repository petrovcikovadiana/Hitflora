import React from "react";
import dreviny from "assets/sem.jpg";
import Navbar from "./Navbar";

function Aktualne() {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen flex ">
        <div className="bg-lightYellow  w-full">
          <div className="items-start pt-24 md:ml-80">
            <h2 className="font-bold text-headerGreen uppercase text-2xl">
              Aktuálně
            </h2>
            {/* hr */}
            <hr class="h-px w-24 my-2 bg-lineGrey border-0 opacity-100" />
          </div>

          {/* cards start */}
          <div className="flex md:flex-row flex-col gap-5 items-center justify-center mx-auto md:pt-10">
            <img
              src={dreviny}
              alt="dřeviny"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl "
            />{" "}
            <div className="w-1/3">
              <p className="text-logoRed text-sm pb-2 font-bold">4 bře 2024</p>
              <h3 className="text-headerGreen text-2xl pb-5">
                Začátek jarní sezóny 2024
              </h3>
              <p className="md:text-start text-sm tracking-wide">
                Sezóna 2024 díky počasí právě začíná, již teď je pro Vás
                připravena široká nabídka jarních cibulovin, macešky, petrklíče,
                dále přibývá také sortimet skalniček, trvalek, okrasných rostlin
                a spoustu dalšího.
              </p>
              <p className="md:text-start text-sm tracking-wide">
                {" "}
                Otevírací doba: Pondělí – Sobota 8:00 – 18:00 Nedělě  8:00
                – 17:00 Těšíme se na Vaší návštěvu.
              </p>
            </div>
          </div>
          {/* cards end */}
          {/* hr */}
          <hr class="h-px w-96 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
          {/* cards start */}
          <div className="flex md:flex-row flex-col gap-5 items-center justify-center mx-auto">
            <img
              src={dreviny}
              alt="dřeviny"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl "
            />{" "}
            <div className="w-1/3">
              <p className="text-logoRed text-sm pb-2 font-bold">4 bře 2024</p>
              <h3 className="text-headerGreen text-2xl pb-5">
                Začátek jarní sezóny 2024
              </h3>
              <p className="md:text-start text-sm tracking-wide">
                Sezóna 2024 díky počasí právě začíná, již teď je pro Vás
                připravena široká nabídka jarních cibulovin, macešky, petrklíče,
                dále přibývá také sortimet skalniček, trvalek, okrasných rostlin
                a spoustu dalšího.
              </p>
              <p className="md:text-start text-sm tracking-wide">
                {" "}
                Otevírací doba: Pondělí – Sobota 8:00 – 18:00 Nedělě  8:00
                – 17:00 Těšíme se na Vaší návštěvu.
              </p>
            </div>
          </div>
          {/* cards end */}
          {/* hr */}
          <hr class="h-px w-96 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
          {/* cards start */}
          <div className="flex md:flex-row flex-col gap-5 items-center justify-center mx-auto">
            <img
              src={dreviny}
              alt="dřeviny"
              className="object-cover md:w-72 md:h-52 w-48 h-40 rounded-2xl "
            />{" "}
            <div className="w-1/3">
              <p className="text-logoRed text-sm pb-2 font-bold">4 bře 2024</p>
              <h3 className="text-headerGreen text-2xl pb-5">
                Začátek jarní sezóny 2024
              </h3>
              <p className="md:text-start text-sm tracking-wide">
                Sezóna 2024 díky počasí právě začíná, již teď je pro Vás
                připravena široká nabídka jarních cibulovin, macešky, petrklíče,
                dále přibývá také sortimet skalniček, trvalek, okrasných rostlin
                a spoustu dalšího.
              </p>
              <p className="md:text-start text-sm tracking-wide">
                {" "}
                Otevírací doba: Pondělí – Sobota 8:00 – 18:00 Nedělě  8:00
                – 17:00 Těšíme se na Vaší návštěvu.
              </p>
            </div>
          </div>
          {/* cards end */}
          {/* hr */}
          <hr class="h-px w-96 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
        </div>
      </div>
    </div>
  );
}

export default Aktualne;
