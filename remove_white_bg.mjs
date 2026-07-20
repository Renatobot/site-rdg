import { Jimp } from "jimp";

async function main() {
  try {
    const imagePath = "c:/Users/renat/Desktop/Antigravity/lovable-Site RDG/public/logo.png";
    const image = await Jimp.read(imagePath);
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // Remove white background
      if (r > 240 && g > 240 && b > 240) {
        this.bitmap.data[idx + 3] = 0; // Fully transparent
      } else if (r > 100 && g > 100 && b > 100 && (Math.abs(r-g) < 20 && Math.abs(g-b) < 20)) {
        // Anti-aliasing for grey/white edges (assuming cyan is high in G and B, low in R)
        // Actually, cyan is R=0, G=255, B=255.
        // So if R is high, it's a white/grey edge!
        if (r > 50) {
           const opacity = Math.max(0, 255 - r);
           this.bitmap.data[idx + 3] = Math.min(this.bitmap.data[idx + 3], opacity);
        }
      }
    });
    
    await image.write(imagePath);
    console.log("Success");
  } catch (err) {
    console.error(err);
  }
}
main();
