"use client";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState("adjust");

  const getImageSrc = (buttonName) => {
    return activeButton === buttonName
      ? `/images/sidebar/${buttonName}-active.svg`
      : `/images/sidebar/${buttonName}.svg`;
  };

  return (
    <aside className="flex flex-col items-center gap-4 pt-4 shrink-0">
      <button
        className={`w-[60px]${
          activeButton === "adjust" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("adjust")}
      >
        <Image
          src={getImageSrc("adjust")}
          alt="Adjust"
          width="60"
          height="60"
          priority
        />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "brush" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("brush")}
      >
        <Image
          src={getImageSrc("brush")}
          alt="Brushes"
          width="60"
          height="60"
        />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "elements" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("elements")}
      >
        <Image
          src={getImageSrc("elements")}
          alt="Elements"
          width="60"
          height="60"
        />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "frames" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("frames")}
      >
        <Image
          src={getImageSrc("frames")}
          alt="Frames"
          width="60"
          height="60"
        />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "icons" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("icons")}
      >
        <Image src={getImageSrc("icons")} alt="Icons" width="60" height="60" />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "image" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("image")}
      >
        <Image src={getImageSrc("image")} alt="Image" width="60" height="60" />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "qrcode" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("qrcode")}
      >
        <Image
          src={getImageSrc("qrcode")}
          alt="QRCode"
          width="60"
          height="60"
        />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "shapes" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("shapes")}
      >
        <Image
          src={getImageSrc("shapes")}
          alt="Shapes"
          width="60"
          height="60"
        />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "Text" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("Text")}
      >
        <Image src={getImageSrc("Text")} alt="Text" width="60" height="60" />
      </button>
      <button
        className={`w-[60px]${
          activeButton === "settings" ? "bg-blue-500 text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("settings")}
      >
        <Image
          src={getImageSrc("settings")}
          alt="Settings"
          width="60"
          height="60"
        />
      </button>
    </aside>
  );
}
