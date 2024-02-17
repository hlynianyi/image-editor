import { useState, useEffect } from "react";
import { useEditor } from "../../hooks";
import applyFilter from "../../utils/applyFilter";
import Image from "next/image";

const filters = {
  current: "",
  chrome: "grayscale(0.5) hue-rotate(90deg)",
  fade: "opacity(0.5)",
  cold: "brightness(0.8) contrast(1.2) saturate(0.8)",
  warm: "sepia(0.4) saturate(1.5) hue-rotate(-30deg)",
  pastel: "saturate(0.7) brightness(1.2)",
  mono: "grayscale(1)",
  noir: "contrast(2) brightness(0.8)",
  stark: "contrast(2) brightness(1.2) grayscale(0.5)",
  wash: "saturate(0.3)",
};

const ImageFilterPreview = () => {
  const editor = useEditor();
  const [selectedFilter, setSelectedFilter] = useState("default");
  const imageSrc = editor.getImage();

  const handleFilterClick = async (e) => {
    const filterKey = e.target.id;
    setSelectedFilter(filterKey);
    const filterFunction = filters[filterKey]; // todo: change
    try {
      const filteredBlob = await applyFilter(imageSrc, filterFunction);
      const toBlob = URL.createObjectURL(filteredBlob);
      editor.setTempImage(toBlob);
    } catch (error) {
      console.error("Ошибка при применении фильтра: ", error);
    }
  };

  return (
    <section className="mx-12  flex flex-col justify-start items-center relative h-[600px] w-full">
      <div className="flex flex-col">
        <Image
          src={imageSrc}
          className="object-contain"
          alt="Filtered"
          style={{ filter: filters[selectedFilter] }}
          fill={true}
          
        />
        <div className="flex flex-row relative top-[610px] bg-gray-200">
          <div className="flex flex-row gap-4 p-4 pb-2">
            {Object.keys(filters).map((filterKey) => (
              <div key={filterKey}>
                <Image
                  src={imageSrc}
                  onClick={handleFilterClick}
                  className={`w-[60px] h-[72px] cursor-pointer object-cover ${
                    selectedFilter === filterKey ? "selected" : ""
                  }`}
                  style={{ filter: filters[filterKey] }}
                  alt={filterKey}
                  width={60}
                  height={72}
                  id={filterKey}
                />
                <span className="flex justify-center text-2xd text-black font-light">
                  {filterKey}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageFilterPreview;
