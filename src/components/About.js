import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

function About() {
  return (
    <div>
      <Navbar /> <CookieBanner />
      <div className="flex md:flex-row flex-col md:gap-20 md:items-center mt-24 max-w-screen-xl mx-auto md:px-8 lg:px-16 xl:px-48">
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
            rozkládá na ploše cca 3 ha, z toho 1 ha zabírají skleníky,
            foliovníky a kontejnerové plochy.
          </p>
        </div>
      </div>
      {/* two images in row start*/}
      <div className="md:flex hidden flex-row px-64 md:items-center mx-auto justify-center max-w-screen-xl pt-10 md:px-8 lg:px-16 xl:px-32">
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/sklenik.avif"}
          alt="sklenik"
          className="rounded-2xl lg:w-[210px] lg:h-[280px] md:w-[110px] md:h-[180px] mx-auto"
          loading="lazy"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/man.avif"}
          alt="man"
          className="rounded-2xl lg:w-[584px] lg:h-[280px] md:w-[484px] md:h-[180px] mx-auto"
          loading="lazy"
        />
      </div>
      {/* two images in row end*/}
      <div className="mx-auto max-w-screen-xl pb-10 md:py-10 md:px-8 lg:px-16 xl:px-36 pt-10">
        <p className="text-textGrey text-center md:text-start px-10 md:px-0">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean id
          metus id velit ullamcorper pulvinar. In rutrum. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit.
          Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et,
          dolor. Donec vitae arcu. Integer rutrum, orci vestibulum ullamcorper
          ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet
          enim. Curabitur bibendum justo non orci. Nulla est. Phasellus enim
          erat, vestibulum vel, aliquam a, posuere eu, velit. Maecenas libero.
          Morbi scelerisque luctus velit. Integer in sapien. In dapibus augue
          non sapien. Nulla turpis magna, cursus sit amet, suscipit a, interdum
          id, felis. Etiam quis quam. Pellentesque ipsum. In rutrum. Quisque
          tincidunt scelerisque libero. Praesent in mauris eu tortor porttitor
          accumsan. Pellentesque arcu. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Mauris elementum mauris
          vitae tortor. Vivamus ac leo pretium faucibus.
        </p>
      </div>
      {/* two images in row start*/}
      <div className="md:flex hidden flex-row px-64 md:items-center justify-center mx-auto md:pb-16  max-w-screen-xl  md:px-8 lg:px-16 xl:px-32">
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/zahrada.avif"}
          alt="man"
          className="rounded-2xl lg:w-[584px] lg:h-[280px] md:w-[484px] md:h-[180px] mx-auto"
          loading="lazy"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/path.avif"}
          alt="sklenik"
          className="rounded-2xl lg:w-[210px] lg:h-[280px] md:w-[110px] md:h-[180px] mx-auto"
          loading="lazy"
        />
      </div>
      {/* two images in row end*/}
      <Footer />
    </div>
  );
}

export default About;
