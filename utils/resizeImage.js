const resizeImage = (data) => {
  return new Promise((resolve, reject) => {
    const { width, height, image } = data;
    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/jpeg");
    };

    img.onerror = () => {
      reject("Image loading error.");
    };
  });
};

export default resizeImage;
