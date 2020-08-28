const cnvs = document.querySelector(".cnvs");
const ctx = cnvs.getContext("2d");

cnvs.width = window.innerWidth;
cnvs.height = window.innerHeight;

//   fitting the elements in window
window.addEventListener("resize", () => {
	cnvs.width = window.innerWidth;
	cnvs.height = window.innerHeight;
	// call the init function
	init();
});

// Interacting with mouse
const mouse = {
	x: undefined,
	y: undefined,
};

window.addEventListener("mousemove", (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
});

// For picking random color
const colors = ["#98979C", "#2F61A9", "#D7E5F0", "#0F151E", "#ED6157"];

// Creating  Arcs via class
class Circle {
	constructor(x, y, radius, dx, dy) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.dx = dx;
		this.dy = dy;
		this.color = ctx.fillStyle =
			colors[Math.floor(Math.random() * colors.length)];
		this.startAngle = 0;
		this.endAngle = Math.PI * 2;
		this.clockWise = false;
		this.maxRadius = 50;
		this.minRadius = radius;
	}
	draw() {
		ctx.beginPath();
		ctx.arc(
			this.x,
			this.y,
			this.radius,
			this.startAngle,
			this.endAngle,
			this.clockWise
		);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	update() {
		if (
			this.x + this.radius > window.innerWidth ||
			this.x - this.radius < 0
		) {
			this.dx = -this.dx;
		}
		if (
			this.y + this.radius > window.innerHeight ||
			this.y - this.radius < 0
		) {
			this.dy = -this.dy;
		}

		// interacting conditions
		if (
			mouse.x - this.x < 70 &&
			mouse.x - this.x > -70 &&
			mouse.y - this.y < 70 &&
			mouse.y - this.y > -70
		) {
			if (this.radius < this.maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

// initiate  an arc
// let c1 = new Circle(400, 300, 50, 2, 2);

// initiate a lot of arcs

let circles = [];
function init() {
	circles = [];
	for (let i = 0; i < 800; i++) {
		let radius = Math.random() * 10 + 1;
		let x = Math.random() * (window.innerWidth - radius * 2) + radius;
		let y = Math.random() * (window.innerHeight - radius * 2) + radius;
		let dx = (Math.random() - 0.5) * 2;
		let dy = (Math.random() - 0.5) * 2;
		circles.push(new Circle(x, y, radius, dx, dy));
	}
}

// animate the functions
const animate = () => {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	// update an arc
	// c1.update();

	// update all arcs
	for (let i = 0; i < circles.length; i++) {
		const element = circles[i];
		element.update();
	}
};

// invoking animate function
init();
animate();
