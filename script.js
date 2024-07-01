//variables
let happyWhiteDuck, madWhiteDuck, sadWhiteDuck, partyWhiteDuck;
let happyButton, madButton, sadButton, partyButton;
let titleText, instructionsText;
let buttonWidth, buttonHeight;
let screen = 1;

function preload() {
  
}

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  makeButtons();
  background("lightyellow");

  //creates ducks with emotions
  happyWhiteDuck = new Sprite (-100, -100, 60, 60, 'k');
  happyWhiteDuck.color = 'yellow';
  madWhiteDuck = new Sprite (-100, -100, 60, 60, 'k');
  madWhiteDuck.color = 'red';
  sadWhiteDuck = new Sprite (-100, -100, 60, 60, 'k');
  sadWhiteDuck.color = 'blue';
  partyWhiteDuck = new Sprite (-100, -100, 60, 60, 'k');
  partyWhiteDuck.color = 'purple';


}

//draw
function draw() {
  //checking screens
  if (screen == 1) {
    happyScreen();
    background("lightyellow");
  }
  
  if (screen == 2) {
    madScreen();
  }
  
  if (screen == 3) {
    sadScreen();
  }
  
  if (screen == 4) {
    partyScreen();
  }

  //pressing buttons
  if (happyButton.mouse.presses()) {
    screen = 1;
  }
  if (madButton.mouse.presses()) {
    screen = 2;
  }
  if (sadButton.mouse.presses()) {
    screen = 3;
  }
  if (partyButton.mouse.presses()) {
    screen = 4;
  }
}

function happyScreen() {
  background("lightyellow");
  happyWhiteDuck.pos = {x: windowWidth/2, y: windowHeight/2};
  madWhiteDuck.pos = {x: -100, y: -100};
  sadWhiteDuck.pos = {x: -100, y: -100};
  partyWhiteDuck.pos = {x: -100, y: -100};
}

function madScreen() {
  background("red");
  madWhiteDuck.pos = {x: windowWidth/2, y: windowHeight/2};
  happyWhiteDuck.pos = {x: -100, y: -100};
  sadWhiteDuck.pos = {x: -100, y: -100};
  partyWhiteDuck.pos = {x: -100, y: -100};
}

function sadScreen() {
  background("lightblue");
  sadWhiteDuck.pos = {x: windowWidth/2, y: windowHeight/2};
  happyWhiteDuck.pos = {x: -100, y: -100};
  madWhiteDuck.pos = {x: -100, y: -100};
  partyWhiteDuck.pos = {x: -100, y: -100};
}

function partyScreen() {
  background("plum");
  partyWhiteDuck.pos = {x: windowWidth/2, y: windowHeight/2};
  happyWhiteDuck.pos = {x: -100, y: -100};
  madWhiteDuck.pos = {x: -100, y: -100};
  sadWhiteDuck.pos = {x: -100, y: -100};
}

function makeButtons() {

  buttonWidth = windowWidth/6;
  buttonHeight = windowHeight/13;
  
  //makes buttons at bottom to change emotions
  textSize(20);

  happyButton = new Sprite(windowWidth/5, windowHeight - windowHeight/8, buttonWidth, buttonHeight, 'k');
  happyButton.color = "lightyellow";
  happyButton.text = "Happy";

  madButton = new Sprite(windowWidth/5 * 2, windowHeight - windowHeight/8, buttonWidth, buttonHeight, 'k');
  madButton.color = "red";
  madButton.text = "Mad";

  sadButton = new Sprite(windowWidth/5 * 3, windowHeight - windowHeight/8, buttonWidth, buttonHeight, 'k');
  sadButton.color = "lightblue";
  sadButton.text = "Sad";

  partyButton = new Sprite(windowWidth/5 * 4, windowHeight - windowHeight/8, buttonWidth, buttonHeight, 'k');
  partyButton.color = "plum";
  partyButton.text = "Party";
}