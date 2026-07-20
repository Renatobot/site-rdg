import { Jimp } from "jimp";

async function main() {
  try {
    const imagePath = "c:/Users/renat/Desktop/Antigravity/lovable-Site RDG/public/logo.png";
    const image = await Jimp.read(imagePath);
    
    let minX = image.bitmap.width;
    let minY = image.bitmap.height;
    let maxX = 0;
    let maxY = 0;
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const a = this.bitmap.data[idx + 3];
      if (a > 10) { // If pixel is not almost fully transparent
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    });
    
    // Add a tiny 20px padding to avoid cutting too close to the glow
    const padding = 20;
    minX = Math.max(0, minX - padding);
    minY = Math.max(0, minY - padding);
    maxX = Math.min(image.bitmap.width - 1, maxX + padding);
    maxY = Math.min(image.bitmap.height - 1, maxY + padding);
    
    const cropWidth = maxX - minX + 1;
    const cropHeight = maxY - minY + 1;
    
    if (cropWidth > 0 && cropHeight > 0) {
      image.crop({ x: minX, y: minY, w: cropWidth, h: cropHeight });
      await image.write(imagePath);
      console.log("Success: cropped to " + cropWidth + "x" + cropHeight);
    } else {
      console.log("Skipped: no visible pixels found.");
    }
  } catch (err) {
    console.error(err);
  }
}
main();
