let start_time;

function move() {
    const left = Math.random() * 99;
    const top = Math.random() * 300;
    const wh = Math.random() * 100 + 100;

    const shape = document.getElementById("shape");
    shape.style.left = left + "%";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    shape.style.display = "block";

    start_time = new Date().getTime();
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const shape = document.getElementById("shape");

shape.onclick = function () {
    shape.style.display = "none";
    shape.style.backgroundColor = getRandomColor();
    const end_time = new Date().getTime();
    const dump_time = (end_time - start_time) / 1000;
    alert(`Hiii! You clicked in ${dump_time} seconds`);
    move();
};

window.onload = move;
