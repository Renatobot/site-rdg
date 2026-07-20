const Jimp = require('jimp');

Jimp.read('C:/Users/renat/Desktop/Antigravity/logo RDG.jpg')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      if (r < 25 && g < 25 && b < 25) {
        this.bitmap.data[idx + 3] = 0;
      } else if (r < 90 && g < 90 && b < 90) {
        const maxColor = Math.max(r, g, b);
        this.bitmap.data[idx + 3] = Math.min(255, maxColor * 2.5);
      }
    });
    return image.writeAsync('C:/Users/renat/Desktop/Antigravity/lovable-Site RDG/public/logo.png');
  })
  .then(() => console.log('Background removed successfully!'))
  .catch(err => console.error(err));
