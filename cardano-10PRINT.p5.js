// Nonce of epoch 258, change to the current epoch to generate a new picture
var epoch_nonce = "9b44c056ec028cff21ea95544f3af7126da358dce7bd637e5e4f63dfd9b1d0b4";

// Extract as much precision as possible
var epoch_nonce_int = BigInt("0x" + epoch_nonce)
var epoch_nonce_int = Number(epoch_nonce_int % BigInt(Number.MAX_SAFE_INTEGER))

function setup() {
  createCanvas(2480/5, 3508/5, SVG);
  strokeWeight(1.5);
  stroke(0)
  frameRate(300);
}

function draw() {
  randomSeed(epoch_nonce_int);
  if (random(1) < 0.5) {
    r_t = random(0.1, 0.3)
  } else {
    r_t = random(0.7, 0.9)
  }
  for (var y = 0; y < height; y += 22) {
    for (var x = 0; x < width; x += 22) {
      if (random(1) > r_t) {
        line(x, y, x + 22, y + 22);
      } else {
        line(x, y + 22, x + 22, y);
      }
    }
  }
  noLoop();
  save("cardano_10print.svg");
}
