const body = document.querySelector("body");

const canvas = document.createElement("div");
canvas.setAttribute('id', "canvas");
body.appendChild(canvas);

const clear = document.querySelector("#clear");
clear.addEventListener('click', clearCanvas);

const generator = document.querySelector("#generator");
generator.addEventListener('click', () => {
    var seed = document.querySelector("#seed");
    if ((seed.value % 1) != 0) { //decimal validator
        alert("Please input a whole number! No decimals!");
    } else if (!(seed.value >= 2) || !(seed.value <= 100)) { //quantity validator
        alert("Please input a number greater than 2 or less than 100!");
    } else {
        genCanvas(seed.value);
    }
});

function genCanvas(dim) {
    clearCanvas();
    for (i = 0; i < dim; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
    }
    let rows = document.querySelectorAll(".row");
    rows.forEach(row1 => {
        for (i = 0; i < dim; i++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row1.appendChild(pixel);
        }
    })
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add('active');
        })
    });
}

function clearCanvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}