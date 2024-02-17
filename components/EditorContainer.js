import React, { useEffect, useState } from "react";
import { useEditor } from "../hooks";
import CropEditor from "./adjust/CropEditor";
import FilterEditor from "./adjust/FilterEditor";
import Image from "next/image";
import Toolbar from "./adjust/Toolbar";

export default function EditorContainer() {
  const editor = useEditor();
  const { imageUpdates, getActiveFilter, selectedImage } = editor;
  const [imageUrl, setImageUrl] = useState(selectedImage);

  useEffect(() => {
    // console.log("image has been updated\n", selectedImage);
    setImageUrl(selectedImage);
  }, [selectedImage]);

  const defaultImageComponent = () => (
    <Image
      className="object-contain"
      src={imageUrl}
      alt="Selected image"
      fill={true}
    />
  );

  const TOOLS = {
    null: defaultImageComponent,
    crop: CropEditor,
    rotate: defaultImageComponent,
    resize: defaultImageComponent,
    filters: FilterEditor,
  };

  const handleImageChange = (e) => {
    editor.setImage(e);
  };

  const handleUploadClick = () =>
    document.getElementById("file-upload").click();

  return (
    <section className="w-full flex flex-row mt-4 ml-4 bg-white rounded-lg">
      <Toolbar />
      <div className="mx-12 mt-8 flex flex-col justify-start items-center relative h-[600px] w-full">
        {imageUrl ? (
          React.createElement(TOOLS[getActiveFilter()] || TOOLS.null, {
            key: getActiveFilter(),
          })
        ) : (
          <div
            className="grid content-center w-full h-full bg-gray-100 rounded-lg cursor-pointer"
            onClick={handleUploadClick}
          >
            <h2 className="flex justify-center text-blue-900">
              Upload image to operate
            </h2>
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
}
