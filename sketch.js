let latP = {};
let longP = {};

function setup() {
  intervalCurrentPosition(gpsPrint, 5000);
  latP = createP();
  longP = createP();

}

function gpsPrint(gps) {
  latP.html(gps.latitude);
  longP.html(gps.longitude);
}

function draw() {
  background(220);
}