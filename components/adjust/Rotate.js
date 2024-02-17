import React from "react";
import Image from "next/image";
import RotateOptions from "./RotateOptions";

const Rotate = ({ currentFilter, handleToolClick, handleRotateClick }) => {
  return (
    <div className="px-4 border-b-[1px] border-gray-200 flex flex-col">
      <div
        className="flex flex-row justify-between items-center"
        onClick={handleToolClick}
        name="rotate"
      >
        <div className="flex h-full">
          <Image
            src="/images/adjust/rotate.svg"
            alt="rotate"
            width={16}
            height={16}
          />
          <p className="pl-2 py-4 uppercase">rotate</p>
        </div>
        <div className="flex h-full">
          <Image
            src={
              currentFilter === "rotate"
                ? "/images/adjust/toolActive.svg"
                : "/images/adjust/toolNotActive.svg"
            }
            alt="option status"
            width={26}
            height={26}
          />
        </div>
      </div>
      {currentFilter === "rotate" ? (
        <RotateOptions handleRotateClick={handleRotateClick} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Rotate;
