// catch the canvas element and definte its context type
const cnvs = document.querySelector(".cnvs");
const ctx = cnvs.getContext("2d");

// define canvas width & height
cnvs.width = window.innerWidth;
cnvs.height = window.innerHeight;

// For picking random color
// const colors = [
// 	"#FF6633",
// 	"#FFB399",
// 	"#FF33FF",
// 	"#FFFF99",
// 	"#00B3E6",
// 	"#E6B333",
// 	"#3366E6",
// 	"#999966",
// 	"#99FF99",
// 	"#B34D4D",
// 	"#80B300",
// 	"#809900",
// 	"#E6B3B3",
// 	"#6680B3",
// 	"#66991A",
// 	"#FF99E6",
// 	"#CCFF1A",
// 	"#FF1A66",
// 	"#E6331A",
// 	"#33FFCC",
// 	"#66994D",
// 	"#B366CC",
// 	"#4D8000",
// 	"#B33300",
// 	"#CC80CC",
// 	"#66664D",
// 	"#991AFF",
// 	"#E666FF",
// 	"#4DB3FF",
// 	"#1AB399",
// 	"#E666B3",
// 	"#33991A",
// 	"#CC9999",
// 	"#B3B31A",
// 	"#00E680",
// 	"#4D8066",
// 	"#809980",
// 	"#E6FF80",
// 	"#1AFF33",
// 	"#999933",
// 	"#FF3380",
// 	"#CCCC00",
// 	"#66E64D",
// 	"#4D80CC",
// 	"#9900B3",
// 	"#E64D66",
// 	"#4DB380",
// 	"#FF4D4D",
// 	"#99E6E6",
// 	"#6666FF",
// ];

// Draw a single arc
// ctx.beginPath();
// ctx.arc(100, 200, 50, 0, Math.PI * 2, false);
// ctx.stroke();

// Draw arc via function
// const circle = (ctx, x, y, r) => {
// 	ctx.beginPath();
// 	ctx.arc(x, y, r, 0, Math.PI * 2, false);
// 	ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
// 	ctx.fill();
// 	// console.log("Circle Drawn!");
// };
// circle(ctx, 100, 200, 50);

// Creating multiple arc using loop
// for (let i = 0; i < 45; i++) {
// 	let x = Math.random() * window.innerWidth;
// 	let y = Math.random() * window.innerHeight;
// 	circle(ctx, x, y, 50);
// }

// randomizing all the values of arc
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let r = 50;
let speedX = (Math.random() - 0.5) * 8;
let speedY = (Math.random() - 0.5) * 8;

// animating the  elements
const animate = () => {
	requestAnimationFrame(animate);
	// clearing the canvas
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	// defining the arc
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2, false);
	ctx.fillStyle = "#44ff99";
	ctx.fill();

	// bounding the arc in inner the body
	if (x + r > window.innerWidth || x - r < 0) {
		speedX = -speedX;
	}
	if (y + r > window.innerHeight || y - r < 0) {
		speedY = -speedY;
	}

	// incrementing the valocity
	x += speedX;
	y += speedY;
};
animate();
