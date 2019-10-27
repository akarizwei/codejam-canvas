const canvas = document.getElementById('canvas');
canvas.width = 512;
canvas.height = 512;
let context = canvas.getContext('2d');

let pixel_small = [
    ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"],
    ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
    ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
    ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"]
];

let pixel_mid;


for (let i = 0; i < pixel_small.length; i++) {
    for (let j = 0; j < pixel_small[i].length; j++) {
        context.fillStyle = "#" + pixel_small[i][j];
        context.fillRect(i*128, j*128, 128, 128);
    }
}


