import React from "react";
import { useParams } from "react-router-dom";
import categoriesData from "../data/categoriesData";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const categoryNameWithoutDiacritics = removeDiacritics(categoryName);

  const category = categoriesData.find(
    (c) => removeDiacritics(c.URLname) === categoryNameWithoutDiacritics
  );

  if (!category) {
    return (
      <div>
        <h1>Category not found</h1>

        <Link to="/sortiment">Back to Sortiment</Link>
      </div>
    );
  }

  const canonicalUrl = `https://hitflora.cz/sortiment/${category.URLname}`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col flex-grow h-full">
          <div className="flex flex-col xl:text-start max-w-[1440px] mx-auto w-full pt-24 items-center xl:items-start md:px-80 ">
            {/* Mobile arrow button */}
            <div className="flex flex-row justify-start items-center ">
              <Link to="/sortiment">
                <div className="absolute p-4 left-2 lg:hidden">
                  <IoArrowBack />
                </div>
              </Link>
              <div>
                <h1 className="uppercase text-headerGreen font-bold text-2xl text-center xl:text-start">
                  {category.URLname}
                </h1>
              </div>
            </div>
            <hr className="h-px w-32 mt-4 bg-lineGrey border-0 mx-auto md:mx-0" />
          </div>
          <div className="flex md:flex-row mx-auto flex-col md:gap-24 pt-10 ">
            <img
              src={category?.img}
              alt={category.name}
              className="hidden md:block rounded-xl md:w-80 md:h-64 w-48 h-40 object-cover"
              loading="lazy"
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
                      alt={category.name}
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
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CategoryPage;
