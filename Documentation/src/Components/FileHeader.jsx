import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const FileHeader = ({ title, nextLink }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between px-2 border-b md:flex-row">
      <button
        onClick={() => ""}
        className="flex items-center px-3 py-2 mb-2 md:mb-0"
      >
        <span className="inline-flex text-sm text-gray-600 ">
          Docs{" "}
          <MdArrowForwardIos className="mt-1 ml-1 mr-1 text-xs text-gray-600" />
          <span className="text-gray-800">{title}</span>
        </span>
      </button>

      <button
        onClick={() => navigate(nextLink)}
        className="flex items-center px-3 py-2 mb-2 transition duration-300 bg-gray-200 rounded-lg  hover:bg-gray-300 focus:outline-none focus:ring"
      >
        <span className="text-sm">Next</span>
        <AiOutlineArrowRight className="ml-2" size={20} />
      </button>
    </div>
  );
};

export default FileHeader;
