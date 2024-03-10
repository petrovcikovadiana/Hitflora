import React from "react";
import { useParams } from "react-router-dom";
import categoriesData from "./categoriesData";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Najdeme odpovídající kategorii podle názvu
  const category = categoriesData.find((c) => c.name === categoryName);

  return (
    <div>
      <Navbar />
      <CookieBanner />
      <div className="bg-lightYellow flex flex-col gap-10  lg:pt-5 pb-0 lg:pb-44 ">
        <div className="flex flex-col bg-lightYellow md:px-80 md:text-start pt-24">
          {/* Mobile arrow button */}

          <div className="flex flex-row">
            <Link to="/sortiment">
              <div className="absolute p-4 left-24 md:hidden">
                <IoArrowBack />
              </div>
            </Link>
            <div>
              <h1 className="uppercase text-black font-bold text-2xl">
                náš sortiment
              </h1>
              <h1 className="uppercase text-headerGreen font-bold text-2xl">
                {categoryName}
              </h1>
            </div>
          </div>

          <hr className="h-px w-32 my-4 bg-lineGrey border-0 mx-auto md:mx-0" />
        </div>
        <div className="flex md:flex-row  ml-80 flex-col gap-10 pb-5">
          <ul>
            {category?.content.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 text-sm uppercase font-bold"
              >
                {category.icon ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/svg/plants.svg`}
                    alt={categoryName}
                    className="w-7 h-7"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-7 h-7" />
                )}
                <li className="flex flex-col gap-5 pb-5">
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
          {/* <img
            src={category?.img}
            alt={categoryName}
            className="hidden md:block rounded-xl md:w-80 md:h-56 w-48 h-40 object-cover"
            loading="lazy"
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
