import React from "react";
import "../styles/components/menu.css";

const Popup = ({ closeModal }) => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center z-50">
      <div
        className="absolute h-full w-full z-10 bg-black opacity-70"
        onClick={closeModal}
      />
      <div className="relative  text-center h-60 sm:w-8/12 w-11/12 bg-black menu-item flex items-center justify-center z-20">
        <div
          className="absolute top-4 right-4 close-button hover:text-white cursor-pointer"
          onClick={closeModal}
        >
          🆇 CLOSE
        </div>

        <div className="text-xl">UNDER CONSTRUCTION!</div>
      </div>
    </div>
  );
};

export default Popup;
