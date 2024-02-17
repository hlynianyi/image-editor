import React from "react";
import Image from "next/image";

const RotateOptions = ({ handleRotateClick }) => {
  return (
    <div className="flex flex-row justify-center gap-4 py-4">
      <Image
        onClick={handleRotateClick}
        src={"/images/adjust/rotateLeft.svg"}
        alt="left"
        name="left"
        width={45}
        height={45}
      />
      <Image
        onClick={handleRotateClick}
        src={"/images/adjust/rotateRight.svg"}
        alt="right"
        name="right"
        width={45}
        height={45}
      />

      <Image
        onClick={handleRotateClick}
        src={"/images/adjust/flipX.svg"}
        alt="flip X"
        name="flipx"
        width={45}
        height={45}
      />

      <Image
        onClick={handleRotateClick}
        src={"/images/adjust/flipY.svg"}
        alt="flip Y"
        name="flipy"
        width={45}
        height={45}
      />
    </div>
  );
};

export default RotateOptions;
