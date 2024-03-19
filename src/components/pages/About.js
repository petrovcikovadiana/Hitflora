import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <div className="flex md:flex-row flex-col md:gap-28 md:items-center mt-24 max-w-[1440px] mx-auto md:px-14 lg:px-48 xl:px-80">
            <div className="flex flex-col items-center md:items-start ">
              <h1 className="text-2xl uppercase font-bold ">O našem</h1>
              <h1 className="text-headerGreen text-2xl uppercase font-bold">
                zahradnictví
              </h1>
              {/* horizontal rule */}
              <hr class="h-px w-20 md:w-44 mt-4 bg-lineGrey border-0 " />
            </div>
            <div className="md:w-[450px] pt-10 md:pt-0">
              <p className="text-textGrey  text-center md:text-start px-10 md:px-0">
                Firma se nachází v Děčíně, části zvané Křešice. Zahradnictví se
                rozkládá na ploše cca 4 ha, z toho půl hektaru ha zabírají
                skleníky, foliovníky a kontejnerové plochy.
              </p>
            </div>
          </div>
          {/* two images in row start*/}
          <div className="md:flex hidden flex-row px-64 md:items-center mx-auto justify-center max-w-screen-xl pt-10 md:px-16 lg:px-16 xl:px-44">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/avif/home-about-vertical.avif"
              }
              alt="sklenik"
              className="rounded-2xl lg:w-[210px] lg:h-[280px] md:w-[110px] md:h-[150px] mx-auto"
              loading="lazy"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/garden.avif"}
              alt="man"
              className="rounded-2xl lg:w-[584px] lg:h-[280px] md:w-[454px] md:h-[150px] mx-auto"
              loading="lazy"
            />
          </div>
          {/* two images in row end*/}
          <div className="mx-auto max-w-screen-xl pb-10 md:py-10 md:px-16 lg:px-24 xl:px-52 xxl:px-44 pt-10">
            <p className="text-textGrey text-center md:text-start px-10 md:px-0">
              Zahradnictví HiT FLORA s.r.o. bylo založeno v roce 1992 Ing.
              Břetislavem Honsem a Rudolfem Tittelbachem. Kromě našeho bohatého
              sortimentu se můžete těšit na odpočinek v naší zahradě s dětským
              hřištěm, kde si děti mohou užít houpačky a prolézačky. Můžete
              navštívit naše minizoo a potěšit se pohledem na naše milé zvířecí
              obyvatele, včetně stádečka minikoní, oslic, papoušků a domácí
              drůbeže. A pokud budete mít hlad či žízeň, nezapomeňte zastavit u
              našeho stánku s občerstvením na blízké cyklostezce mezi Děčínem a
              Ústím nad Labem.
            </p>
          </div>
          {/* two images in row start*/}
          <div className="md:flex hidden flex-row px-64 md:items-center justify-center mx-auto md:pb-32  max-w-screen-xl  md:px-16 lg:px-16 xl:px-44">
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/about-horse.avif"}
              alt="man"
              className="rounded-2xl lg:w-[584px] lg:h-[280px] md:w-[454px] md:h-[150px] mx-auto"
              loading="lazy"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/avif/kid.avif"}
              alt="sklenik"
              className="rounded-2xl lg:w-[210px] lg:h-[280px] md:w-[110px] md:h-[150px] mx-auto"
              loading="lazy"
            />
          </div>
          {/* two images in row end*/}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
