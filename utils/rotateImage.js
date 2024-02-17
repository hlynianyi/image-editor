import { createImage, getRadianAngle, rotateSize } from "./cropImage";

export default async function getRotatedImg(imageSrc, actionType) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }

  let rotation = 0;
  let flip = { horizontal: false, vertical: false };

  switch (actionType) {
    case "left":
      rotation -= 90;
      break;
    case "right":
      rotation += 90;
      break;
    case "flipx":
      flip.horizontal = !flip.horizontal;
      break;
    case "flipy":
      flip.vertical = !flip.vertical;
      break;
    default:
      break;
  }

  const rotRad = getRadianAngle(rotation);
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  ctx.drawImage(image, 0, 0);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(URL.createObjectURL(blob));
      } else {
        reject(new Error("Failed to create blob from canvas"));
      }
    }, "image/jpeg");
  });
}
