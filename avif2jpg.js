const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const myName = process.argv[1].split('/').reverse()[0];
const myArgs = process.argv.slice(2);

if (myArgs.length < 1) {
  console.log("Usage: node " + myName + " dir_name [JPEG quality (default: 85)]")
  console.log("       node " + myName + " images 70")
  console.log("            ... will convert all AVIF files to JPEG files under images/ directory with 70% quality.")
  console.log("       node " + myName + " .")
  console.log("            ... will convert all AVIF files to JPEG files under current directory with 85% quality.")
  process.exit(1);
}

const avifdir = myArgs[0].replace(/\/$/, "");  // remove trailing slash
var quality = 85;  // default JPEG quality is 85%

if (myArgs.length > 1) {
  quality = parseInt(myArgs[1]);
}

fs.readdir(avifdir, function(err, files) {
  const avifFiles = files.filter(el => path.extname(el) === '.avif');
  avifFiles.forEach(function(file) {
    const jpgfile = avifdir + "/" + file.substring(0, file.lastIndexOf(".")) + ".jpg";
    console.log(avifdir + "/" + file + " => " + jpgfile + " (quality: " + quality + "%)");
    sharp(`${avifdir}/${file}`)
      .jpeg({ quality: quality })
      .toFile(`${jpgfile}`);
  });
})
