import React from "react";
import Image from "next/image";
const Resize = ({ currentFilter, handleToolClick, onResizeSubmit }) => {
  return (
    <div className="px-4 border-b-[1px] border-gray-200 flex flex-col">
      <div
        className="flex flex-row justify-between items-center"
        onClick={handleToolClick}
        name="resize"
      >
        <div className="flex h-full">
          <Image
            src="/images/adjust/resize.svg"
            alt="rotate"
            width={16}
            height={16}
          />
          <p className="pl-2 py-4 uppercase">resize</p>
        </div>
        <div className="flex h-full">
          <Image
            src={
              currentFilter === "resize"
                ? "/images/adjust/toolActive.svg"
                : "/images/adjust/toolNotActive.svg"
            }
            alt="option status"
            width={26}
            height={26}
          />
        </div>
      </div>
      {currentFilter === "resize" ? (
        <form
          className="py-4 flex justify-center flex-wrap gap-x-4"
          onSubmit={onResizeSubmit}
        >
          <input
            className="h-[32px] pl-4 rounded-lg w-[120px] border-[1px] border-blue-800 pl-2"
            type="text"
            name="width"
            placeholder="width"
          />
          <input
            className="h-[32px] pl-4 rounded-lg w-[120px] border-[1px] border-blue-800 pl-2"
            type="text"
            name="height"
            placeholder="height"
          />
          <button
            className="h-[32px]  w-full px-8 mt-2 rounded-lg border-blue-800 border-[1px]"
            type="submit"
          >
            Apply
          </button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Resize;
