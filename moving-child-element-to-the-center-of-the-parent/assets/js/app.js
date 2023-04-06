const field = document.getElementById("field");
const ball = document.getElementById("ball");

let xCord = (field.clientWidth - ball.offsetWidth)/2;
let yCord = (field.clientHeight - ball.offsetHeight)/2;

ball.style.left = xCord + "px";
ball.style.top = yCord + "px";

console.log(xCord);
console.log(yCord);
console.log(field.clientWidth);
console.log(ball.offsetWidth);