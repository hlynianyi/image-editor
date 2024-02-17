function applyFilter(imageBlob, filterFunction) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = imageBlob;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.filter = filterFunction;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/jpeg");
    };

    img.onerror = (e) => {
      reject(e);
    };
  });
}

export default applyFilter;