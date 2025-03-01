import React from "react";

function IntroText() {
  return (
    <div className="bg-lightYellow w-full md:h-96 flex items-center justify-center">
      <div className="flex md:flex-row gap-32 xl:px-48 mx-auto max-w-[1440px]">
        {/* left container */}
        <div className="flex flex-col md:w-1/2 px-5 justify-center md:pl-16 mx-auto items-center md:items-start py-10 md:py-0">
          <p className="text-sm text-logoRed ">Od roku 1992</p>
          <h2 className="text-3xl font-bolder pb-5 text-center md:text-start">
            Sadovnické úpravy a{" "}
            <span className="text-headerGreen"> prodej okrasných dřevin</span>
          </h2>
          <p className="text-sm tracking-widest pb-5 text-center md:text-start">
            Naše firma se specializuje nejen na běžný provoz gardencentra, ale
            také na komplexní péči o zahradní prostředí. Zabýváme se
            sadovnickými úpravami, odborným projektováním zahrad a údržbou
            zeleně.
          </p>
          {/* text with dots start*/}
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">Jaro 2024 v zahradnictví</p>
          </div>
          <div className="flex flex-row gap-3 items-center pb-2">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">Nová jarní otevírací doba</p>
          </div>{" "}
          <div className="flex flex-row gap-3 items-center ">
            <div class="h-4 w-4 rounded-full bg-headerGreen"></div>
            <p className="tracking-wider text-sm">
              Sledujte nás na Facebooku a Instagramu
            </p>
          </div>
          {/* text with dots end*/}
        </div>
        {/* right container */}
        <div className="lg:flex hidden w-1/2 justify-center items-center mx-auto text-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/avif/circle.avif"}
            alt="main"
            className="main w-80 h-80 "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroText;
