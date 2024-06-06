import React, { useEffect, useRef, useState } from "react";
import { useEditor, useTool } from "../../hooks";
import Image from "next/image";
import getRotatedImg from "../../utils/rotateImage";
import getResizedImg from "../../utils/resizeImage";
import getAdjustedImg from "../../utils/adjustImage";
import BasicAdjust from "./BasicAdjust";
import QuickFilters from "./QuickFilters";
import Resize from "./Resize";
import Rotate from "./Rotate";
import Crop from "./Crop";

// todo: basic adjust form management

export default function Toolbar() {
  const editor = useEditor();
  const toolbar = useTool();
  const currentFilter = editor.getActiveFilter();

  const [isToolbarExpanded, setIsToolbarExpanded] = useState(true);

  const toggleToolbar = () => {
    setIsToolbarExpanded(!isToolbarExpanded);
  };

  const handleToolClick = (e) => {
    const toolName = e.currentTarget.getAttribute("name");
    console.log("toolName :>> ", toolName);
    const currentFilter = editor.getActiveFilter();
    currentFilter === toolName
      ? editor.setActiveFilter(null)
      : editor.setActiveFilter(toolName);
  };

  const handleRotateClick = async (e) => {
    const oldImage = editor.getImage();
    const action = e.target.name;
    const newRotatedImage = await getRotatedImg(oldImage, action);
    editor.setImage(newRotatedImage);
  };

  const onResizeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      width: formData.get("width"),
      height: formData.get("height"),
      image: editor.getImage(),
    };
    try {
      const resizedImage = await getResizedImg(data);
      const toBlob = URL.createObjectURL(resizedImage);
      editor.setImage(toBlob);
      editor.setActiveFilter(null);
    } catch (e) {
      console.error(e);
    }
  };

  const onAdjustSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      brightness: formData.get("brightness"),
      contrast: formData.get("contrast"),
      saturation: formData.get("saturation"),
      sharpness: formData.get("sharpness"),
      image: editor.getImage(),
    };
    try {
      const adjustedImage = await getAdjustedImg(data);
      const toBlob = URL.createObjectURL(adjustedImage);
      editor.setImage(toBlob);
      editor.setActiveFilter(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section
      className={`transform transition-transform ${
        isToolbarExpanded ? "translate-x-0" : "-translate-x-full"
      } w-[290px] border-r-[1px] border-gray-200`}
    >
      <button
        onClick={toggleToolbar}
        className="absolute right-[-21px] top-4 w-[20px] h-[36px]"
      >
        <Image
          src="/images/adjust/toolbarOpened.svg"
          alt="Toggle toolbar"
          width={20}
          height={36}
        />
      </button>
      {isToolbarExpanded && (
        <div>
          <div className="w-[290px] py-4 pl-4 border-b-[1px] border-gray-200">
            <h3 className="capitalize text-2xl font-normal text-blue-900">
              {toolbar.toolName}
            </h3>
          </div>
          <div className="flex flex-col text-base font-normal text-blue-900">
            <Crop
              currentFilter={currentFilter}
              handleToolClick={handleToolClick}
            />
            <Rotate
              currentFilter={currentFilter}
              handleToolClick={handleToolClick}
              handleRotateClick={handleRotateClick}
            />
            <Resize
              currentFilter={currentFilter}
              handleToolClick={handleToolClick}
              onResizeSubmit={onResizeSubmit}
            />
            <QuickFilters
              editor={editor}
              currentFilter={currentFilter}
              handleToolClick={handleToolClick}
            />
            <BasicAdjust
              currentFilter={currentFilter}
              handleToolClick={handleToolClick}
              onAdjustSubmit={onAdjustSubmit}
            />

            {/* blend color */}
            {/* duotone effect */}
            {/* swap colors */}
            {/* advanced edits */}
          </div>
        </div>
      )}
    </section>
  );
}
