import React, { useState } from "react";
import { IoHandLeftSharp } from "react-icons/io5";
import useFAQ from "./store/useFAQ";

const FaqCart = ({ question, answer,id ,isOpen }) => {
  const {toggleData} = useFAQ()
 

  return (
    <div>
      <button
        onClick={() => {

          toggleData(id)        }
        }
        className="border active:bg-gray-200 select-none bg-white relative z-10 p-4 rounded w-full items-center  border-black flex justify-between"
      >
        <h1 className="text-3xl ">{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`size-10 ${isOpen && "rotate-180"} duration-700 `}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <p className={` bg-blue-300 p-3 ${ !isOpen ? "-translate-y-full absolute opacity-0 w-0 h-0" : "translate-x-0"}  duration-300 `}>{answer}</p>
    </div>
  );
};

export default FaqCart;
