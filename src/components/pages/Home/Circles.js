import React from "react";
import categoriesData from "../../data/categoriesData";
import { Link } from "react-router-dom";

function Circles() {
  return (
    <div className="bg-lightYellow flex md:flex-row flex-wrap gap-10 mx-auto items-center justify-center pb-20 lg:pt-5">
      <Link to={`/sortiment/${categoriesData[0].name}`} className="circle">
        {categoriesData[0].icon ? (
          <img
            src={categoriesData[0].icon}
            alt="plant"
            className="w-14 h-14"
            loading="lazy"
          />
        ) : (
          <div className="w-14 h-14" />
        )}
        <h3 className="text-darkGreen capitalize">
          {categoriesData[0].URLname}
        </h3>
      </Link>
      <Link to={`/sortiment/${categoriesData[1].name}`} className="circle">
        {categoriesData[1].icon ? (
          <img
            src={categoriesData[1].icon}
            alt="plant"
            className="w-14 h-14"
            loading="lazy"
          />
        ) : (
          <div className="w-14 h-14" />
        )}
        <h3 className="text-darkGreen capitalize">
          {categoriesData[1].URLname}
        </h3>
      </Link>
      <Link to={`/sortiment/${categoriesData[2].name}`} className="circle">
        {categoriesData[2].icon ? (
          <img
            src={categoriesData[2].icon}
            alt="plant"
            className="w-14 h-14"
            loading="lazy"
          />
        ) : (
          <div className="w-14 h-14" />
        )}
        <h3 className="text-darkGreen capitalize">
          {categoriesData[2].URLname}
        </h3>
      </Link>
      <Link to={`/sortiment/${categoriesData[3].name}`} className="circle">
        {categoriesData[3].icon ? (
          <img
            src={categoriesData[3].icon}
            alt="plant"
            className="w-14 h-14"
            loading="lazy"
          />
        ) : (
          <div className="w-14 h-14" />
        )}
        <h3 className="text-darkGreen capitalize">
          {categoriesData[3].URLname}
        </h3>
      </Link>
      <Link to={`/sortiment/${categoriesData[4].name}`} className="circle">
        {categoriesData[4].icon ? (
          <img
            src={categoriesData[4].icon}
            alt="plant"
            className="w-14 h-14"
            loading="lazy"
          />
        ) : (
          <div className="w-14 h-14" />
        )}
        <h3 className="text-darkGreen capitalize">
          {categoriesData[4].URLname}
        </h3>
      </Link>
    </div>
  );
}

export default Circles;
