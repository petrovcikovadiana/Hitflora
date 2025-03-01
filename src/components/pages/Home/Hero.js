import React from "react";

function Hero() {
  return (
    <div
      className="relative md:h-96 w-full flex z-20 pt-20 md:pt-0"
      style={{
        background: `url(${
          process.env.PUBLIC_URL + "/assets/avif/kosik.avif"
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-heroGreen opacity-75"></div>
      <div className="relative z-10 left-1/2 transform -translate-x-1/2 md:top-32 py-10 w-full md:py-0 px-2 mx-auto text-center items-center justify-center">
        <h1 className="text-shadeWhite text-3xl md:text-4xl">
          Zahradnictví Děčín |{" "}
          <span className="text-headerGreen opacity-100">Křešice</span>
        </h1>
        <hr class="h-px w-56 my-8 bg-lineGrey border-0 mx-auto opacity-100" />
        <p className="text-shadeWhite tracking-widest text-medium font-normal opacity-100 max-w-sm mx-auto">
          Na našich stránkách najdete klíčové informace o našem zahradnictví,
          práci a nabídce.
        </p>
      </div>
    </div>
  );
}

export default Hero;
