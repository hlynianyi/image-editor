import React from "react";
import Image from "next/image";

const Crop = ({ currentFilter, handleToolClick }) => {
  return (
    <div
      onClick={handleToolClick}
      className="px-4 border-b-[1px] border-gray-200 flex justify-between items-center"
      name="crop"
    >
      <div className="flex items-center justify-center h-full">
        <Image
          src="/images/adjust/crop.svg"
          alt="crop"
          width={16}
          height={16}
        />
        <p className="pl-2 py-4 uppercase">crop</p>
      </div>
      <div className="flex items-center h-full">
        <Image
          src={
            currentFilter === "crop"
              ? "/images/adjust/toolActive.svg"
              : "/images/adjust/toolNotActive.svg"
          }
          alt="option status"
          width={26}
          height={26}
        />
      </div>
    </div>
  );
};

export default Crop;
