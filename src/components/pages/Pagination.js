import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center items-center mt-10 space-x-2">
      {/* Left arrow */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 bg-white text-black rounded-full disabled:bg-opacity-50 flex justify-center items-center"
      >
        <IoIosArrowBack />
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`w-9 h-9 rounded-full ${
            currentPage === index + 1
              ? "bg-circleGreen text-black"
              : "bg-white text-black "
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Right arrow */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 bg-white  text-black rounded-full disabled:bg-opacity-50 flex justify-center items-center"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
