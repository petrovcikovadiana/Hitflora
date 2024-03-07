import React from "react";
import { useParams } from "react-router-dom";
import categoriesData from "./categoriesData";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Najdeme odpovídající kategorii podle názvu
  const category = categoriesData.find((c) => c.name === categoryName);

  return (
    <div>
      <Navbar />
      <div className="bg-lightYellow flex flex-col gap-10 mx-auto items-center justify-center lg:pt-5 pb-0 lg:pb-44 ">
        <div className="flex flex-col bg-lightYellow mx-auto items-center pt-24">
          <h1 className="uppercase text-black font-bold text-2xl">
            náš sortiment
          </h1>
          <h1 className="uppercase text-headerGreen font-bold text-2xl">
            {categoryName}
          </h1>

          <hr className="h-px w-32 my-4 bg-lineGrey border-0 mx-auto md:mx-0" />
        </div>
        <div className="flex md:flex-row flex-col gap-10">
          <img
            src={category?.img}
            alt="category"
            className="hidden md:block rounded-xl md:w-80 md:h-56 w-48 h-40 object-cover"
          />
          <ul>
            {category?.content.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 text-sm uppercase font-bold"
              >
                {category.icon ? (
                  <img
                    src={category.icon}
                    alt={categoryName}
                    className="w-7 h-7"
                  />
                ) : (
                  <div className="w-7 h-7" />
                )}
                <li className="flex flex-row gap-5 pb-5">
                  {typeof item === "object" ? (
                    <>
                      <span>{item.item}</span>
                      <ul>
                        {item.subcategories.map((subcat, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex flex-row gap-3 items-center"
                          >
                            <div className="bg-headerGreen w-2 h-2 rounded-full"></div>
                            <li>{subcat}</li>
                          </div>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
