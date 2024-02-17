import React from "react";
import Image from "next/image";

const QuickFilters = ({ editor, currentFilter, handleToolClick }) => {
  return (
    <div className="px-4 border-b-[1px] border-gray-200 flex flex-col">
      <div
        className="flex flex-row justify-between items-center"
        onClick={handleToolClick}
        name="filters"
      >
        <div className="flex h-full relative">
          <Image
            src="/images/adjust/quickFilters.svg"
            alt="quick filters"
            width={16}
            height={16}
            layout="intrinsic"
            objectFit="contain"
          />
          <p className="pl-2 py-4 uppercase">quick filters</p>
        </div>
        <div className="flex h-full">
          <Image
            src={
              currentFilter === "filters"
                ? "/images/adjust/toolActive.svg"
                : "/images/adjust/toolNotActive.svg"
            }
            alt="option status"
            width={26}
            height={26}
          />
        </div>
      </div>
      {currentFilter === "filters" ? (
        <div className="flex justify-center items-center pb-4 ">
          <button
            className="h-[32px] w-full px-8 mt-2 rounded-lg border-blue-800 border-[1px]"
            onClick={() => {
              editor.setImage(editor.tempImage);
              editor.setActiveFilter(null);
            }}
          >
            Apply
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default QuickFilters;
