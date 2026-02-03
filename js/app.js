import p5 from 'p5';

// p5.js sketch
const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.fill(255, 0, 0);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
};

// Create p5 instance
new p5(sketch);
