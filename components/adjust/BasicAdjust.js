import React, { useState } from "react";
import Image from "next/image";

// todo: add preview of changes
const BasicAdjust = ({ currentFilter, handleToolClick, onAdjustSubmit }) => {
  const [inputBrightnessValue, setInputBrightnessValue] = useState("100");
  const [inputSaturationValue, setInputSaturationValue] = useState("100");
  const [inputContrastValue, setInputContrastValue] = useState("100");

  const handleBrightnessChange = (event) => {
    setInputBrightnessValue(event.target.value);
  };
  const handleSaturationChange = (event) => {
    setInputSaturationValue(event.target.value);
  };
  const handleContrastChange = (event) => {
    setInputContrastValue(event.target.value);
  };

  return (
    <div className="px-4 border-b-[1px] border-gray-200 flex flex-col">
      <div
        className="flex flex-row justify-between items-center"
        onClick={handleToolClick}
        name="basicAdjust"
      >
        <div className="flex h-full">
          <Image
            src="/images/adjust/basicAdjust.svg"
            alt="basic adjust"
            width={16}
            height={16}
          />
          <p className="pl-2 py-4 uppercase">basic adjust</p>
        </div>
        <div className="flex h-full">
          <Image
            src={
              currentFilter === "basicAdjust"
                ? "/images/adjust/toolActive.svg"
                : "/images/adjust/toolNotActive.svg"
            }
            alt="option status"
            width={26}
            height={26}
          />
        </div>
      </div>
      {currentFilter === "basicAdjust" ? (
        <form
          className="pb-4 flex flex-col justify-center flex-wrap gap-x-4 uppercase"
          onSubmit={onAdjustSubmit}
        >
          <label className="flex flex-col items-center">
            brightness {inputBrightnessValue}
            <input
              className="w-4/5"
              value={inputBrightnessValue}
              onChange={handleBrightnessChange}
              type="range"
              min="0"
              max="200"
              step="1"
              name="brightness"
            />
          </label>
          <label className="flex flex-col items-center">
            contrast {inputContrastValue}
            <input
              className="w-4/5"
              value={inputSaturationValue}
              onChange={handleSaturationChange}
              type="range"
              min="0"
              max="200"
              step="1"
              name="contrast"
            />
          </label>
          <label className="flex flex-col items-center">
            saturation {inputSaturationValue}
            <input
              className="w-4/5"
              value={inputContrastValue}
              onChange={handleContrastChange}
              type="range"
              min="0"
              max="200"
              step="1"
              name="saturation"
            />
          </label>
          {/* <label className="flex flex-col items-center">
            sharpness
            <input
              className="w-4/5"
              value={inputSharpnessValue}
              onChange={handleSharpnessChange}
              type="range"
              min="0"
              max="100"
              step="1"
              name="sharpness"
            />
          </label> */}
          <button
            className="h-[32px] w-full px-8 mt-4 rounded-lg border-blue-800 border-[1px]"
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

export default BasicAdjust;
