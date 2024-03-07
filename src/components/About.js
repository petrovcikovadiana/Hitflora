import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

function About() {
  return (
    <div>
      <Navbar /> <CookieBanner />
      <div className="flex md:flex-row flex-col md:gap-24 md:items-center pt-24 my-10  max-w-screen-xl mx-auto md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col md:ml-2  items-center md:items-start">
          <h1 className="text-bold text-2xl uppercase font-bold ">
            O našem <span className="text-headerGreen">zahradnictví</span>
          </h1>
          {/* horizontal rule */}
          <hr class="h-px w-20 md:w-44 my-4 bg-lineGrey border-0 " />
        </div>
        <div className="md:w-1/2">
          <p className="text-textGrey  text-center md:text-start px-4 md:px-0">
            Firma se nachází v Děčíně, části zvané Křešice. Zahradnictví se
            rozkládá na ploše cca 3 ha, z toho 1 ha zabírají skleníky,
            foliovníky a kontejnerové plochy.
          </p>
        </div>
      </div>
      {/* two images in row start*/}
      <div className="md:flex hidden flex-row gap-20 px-64 mx-3 md:items-center mx-auto  max-w-screen-xl  md:px-8 lg:px-16 xl:px-32">
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/sklenik.avif"}
          alt="sklenik"
          className="rounded-2xl lg:w-[280px] lg:h-[350px] md:w-[180px] md:h-[250px]"
          loading="lazy"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/man.avif"}
          alt="man"
          className="rounded-2xl lg:w-[654px] lg:h-[350px] md:w-[554px] md:h-[250px]"
          loading="lazy"
        />
      </div>
      {/* two images in row end*/}
      <div className="mx-auto max-w-screen-xl pb-10 md:py-10 md:px-8 lg:px-16 xl:px-32">
        <p className="text-textGrey  text-center md:text-start px-4 ">
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
      <div className="md:flex hidden flex-row gap-20 px-64 mx-3 md:items-center mx-auto md:pb-10  max-w-screen-xl  md:px-8 lg:px-16 xl:px-32">
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/zahrada.avif"}
          alt="man"
          className="rounded-2xl lg:w-[654px] lg:h-[350px] md:w-[554px] md:h-[250px]"
          loading="lazy"
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/avif/path.avif"}
          alt="sklenik"
          className="rounded-2xl lg:w-[280px] lg:h-[350px] md:w-[180px] md:h-[250px]"
          loading="lazy"
        />
      </div>
      {/* two images in row end*/}
      <Footer />
    </div>
  );
}

export default About;
