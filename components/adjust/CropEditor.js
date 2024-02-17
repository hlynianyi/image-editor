import { useState } from "react";
import { useEditor } from "../../hooks";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../utils/cropImage";

const CropEditor = () => {
  const editor = useEditor();
  const selectedImage = editor.getImage();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const saveCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        selectedImage,
        croppedAreaPixels,
        rotation
      );
      editor.setImage(croppedImage);
      editor.setActiveFilter(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="relative h-[550px]">
        <Cropper
          image={selectedImage}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
        />
      </div>
      <button
        className="py-2 px-4 mt-4 ml-auto border-2 border-blue-900 bg-blue-900 text-white rounded-lg inline-flex items-center flex justify-center text-xs"
        onClick={saveCroppedImage}
        variant="contained"
        color="primary"
      >
        <span>Apply changes</span>
      </button>
    </div>
  );
};

export default CropEditor;
