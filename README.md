# avif2jpg
A CLI tool to convert [AV1 Image File Format (AVIF)](https://aomediacodec.github.io/av1-avif/) files to JPEG.

## Requirements
- [Node.js](https://nodejs.org/) (tested with v16.15.0)
- [npm](https://www.npmjs.com/) (tested with 8.9.0)
- [sharp # High performance Node.js image processing](https://sharp.pixelplumbing.com/)

## Download
Clone from this repository and install [sharp](https://sharp.pixelplumbing.com/) by `npm install`.
```sh
git clone https://github.com/funasoul/avif2jpg.git
cd avif2jpg
npm install sharp
```

## How to use
```sh
# Convert all AVIF files under current directory with 85% (default) quality.
node avif2jpg.js .

# Convert all AVIF files under ~/Downloads/images/ directory with 70% quality.
node avif2jpg.js ~/Downloads/images 70
```
