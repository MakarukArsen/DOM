// Маніпулювання елементів створених в html - РОЗКОМЕНТУЙТЕ html!
// const container = document.body.querySelector(".container");
// const squareCollection = document.body.querySelectorAll(".square");
// function getRandomColor() {
//     return Math.floor(Math.random() * (256 - 1) + 1);
// }
// function generateBlocksInterval() {
//         container.style.display = "flex";
//         setInterval(() => {
//             for(item of squareCollection){
//                 item.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}`;
//             }
//         }, 1000);
// }
// generateBlocksInterval();

// Маніпулювання елементів створених в JavaScript - ЗАКОМЕНТУЙТЕ html :)
const body = document.body;
body.insertAdjacentHTML("afterbegin", `<div class="container"></div>`);
body.insertAdjacentHTML("afterbegin", `<h1>HW#11 DOM</h1>`);
const container = body.querySelector(".container");
for(let i = 1; i <= 25; i++) {
    container.insertAdjacentHTML("afterbegin", `<div class="square"></div>`);
}
const squareCollection = container.querySelectorAll(".square");

function getRandomColor() {
    return Math.floor(Math.random() * (256 - 1) + 1);
}
function generateBlocksInterval() {
        container.style.display = "flex";
        setInterval(() => {
            for(item of squareCollection){
                item.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}`;
            }
        }, 1000);
}
generateBlocksInterval();