import React from "react";

const Button = ({ label, iconURL ,applyStyle, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 
    py-4 font-montserrat text-lg leading-none bg-coral-red 
    border-coral-red border  rounded-3xl ${applyStyle && applyStyle}  ${fullWidth && "w-full"}`}>
      {label}
     { iconURL && <img src={iconURL} alt={iconURL} className="ml-2 rounded-full w-5 h-5 " />}
    </button>
  );
};

export default Button;
