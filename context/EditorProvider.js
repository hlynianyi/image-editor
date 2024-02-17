import { useState } from "react";
import EditorContext from "./EditorContext";

const EditorProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [imageUpdates, setImageUpdates] = useState(0);
  const [tempImage, setTempImage] = useState(null);

  const getImage = () => selectedImage;

  const getActiveFilter = () => activeFilter;

  const unsetImage = () => setSelectedImage(null);

  const setImage = (e) => {
    if (typeof e === "string") {
      setSelectedImage(e);
      setImageUpdates((prev) => prev + 1);
    } else if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
      setImageUpdates((prev) => prev + 1);
    }
  };

  return (
    <EditorContext.Provider
      value={{
        setImage,
        getImage,
        unsetImage,
        getActiveFilter,
        setActiveFilter,
        imageUpdates,
        selectedImage,
        tempImage,
        setTempImage,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
