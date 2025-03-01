import React from "react";

function AboutSection() {
  return (
    <div className="flex md:flex-row flex-col md:gap-24 lg:items-center py-10  max-w-screen-xl mx-auto md:px-16 lg:px-24 xl:px-48">
      <div className="flex flex-col  items-center md:items-start">
        <h2 className="text-bold text-xl uppercase font-bold ">
          O našem <span className="text-headerGreen">zahradnictví</span>
        </h2>
        {/* horizontal rule */}
        <hr class="h-px w-20 md:w-44 my-4 bg-lineGrey border-0 " />
      </div>
      <div className="md:w-1/2">
        <p className="text-textGrey  text-center md:text-start px-4 md:px-0">
          Firma se nachází v Děčíně, části zvané Křešice. Zahradnictví se
          rozkládá na ploše cca 4 ha, z toho půl hektaru zabírají skleníky,
          foliovníky a kontejnerové plochy.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
