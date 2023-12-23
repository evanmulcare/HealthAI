import React from "react";

const FileInstructions = ({ title, listElements }) => {
  return (
    <div className="pt-2 pb-4 m-2 text-gray-800 border-b">
      <h2 className="ml-2 text-xl font-bold text-gray-800">{title}</h2>
      <ol className="pl-6 list-decimal">
        {listElements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default FileInstructions;
