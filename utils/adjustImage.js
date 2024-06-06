const adjustImage = (data) => {
  return new Promise((resolve, reject) => {
    const { brightness, contrast, saturation, image } = data;
    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Применить резкость, если нужно, с помощью другой функции
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/jpeg");
    };
    img.onerror = reject;
  });
};

export default adjustImage;
