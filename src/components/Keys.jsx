import React from "react";

const Keys = ({ label, keyClass, onButtonClick }) => {
  const equalClass = "col-span-2 text-[#1a261a] font-semibold bg-gray-100";

  return (
    <div
      className={`bg-[#141414] flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-[#A8BBA3] ${
        keyClass && equalClass
      }`}
      onClick={() => onButtonClick(label)}
    >
      {label === "EQUALS" ? "=" : label}
    </div>
  );
};

export default Keys;
