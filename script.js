//variables
let happyWhiteDuck, madWhiteDuck, sadWhiteDuck, partyWhiteDuck;
let happyButton, madButton, sadButton, partyButton;
let titleText, instructionsText;
let buttonWidth, buttonHeight;
let screen = 1;
let happyDuckAni, sadDuckAni, madDuckAni, partyDuckAni;
let font;
let mouseClick, partyMusic;

function preload() {
  //loads duck animations
  happyDuckAni = loadAni("assets/happyDuckAnimation_frame1.png", "assets/happyDuckAnimation_frame2.png");
  sadDuckAni = loadAni("assets/sadDuckAnimation_frame7.png", "assets/sadDuckAnimation_frame6.png", "assets/sadDuckAnimation_frame5.png", "assets/sadDuckAnimation_frame4.png", "assets/sadDuckAnimation_frame3.png", "assets/sadDuckAnimation_frame2.png", "assets/sadDuckAnimation_frame1.png");
  madDuckAni = loadAni("assets/madDuckAnimation_frame1.png", "assets/madDuckAnimation_frame2.png", "assets/madDuckAnimation_frame3.png", "assets/madDuckAnimation_frame4.png");
  partyDuckAni = loadAni("assets/partyDuckAnimation_frame1.png", "assets/partyDuckAnimation_frame2.png", "assets/partyDuckAnimation_frame3.png");

  //loads font
  font = loadFont("assets/slkscre.ttf");

  //loads audio
  mouseClick = loadSound("assets/mouseClickSound.mp3");
  partyMusic = loadSound("assets/pixelPartyMusic.mp3");
}

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("lightyellow");
  makeButtons();

  //makes font pixelated
  textFont(font);

  //animation
  happyDuckAni.frameDelay = 10;
  sadDuckAni.frameDelay = 7;
  madDuckAni.frameDelay = 4;
  partyDuckAni.frameDelay = 8;

  //creates ducks with emotions
  happyWhiteDuck = new Sprite (-100, -100, 80, 80, 'k');
  happyWhiteDuck.addAni(happyDuckAni);
  madWhiteDuck = new Sprite (-100, -100, 80, 80, 'k');
  madWhiteDuck.addAni(madDuckAni);
  sadWhiteDuck = new Sprite (-100, -100, 80, 80, 'k');
  sadWhiteDuck.addAni(sadDuckAni);
  partyWhiteDuck = new Sprite (-100, -100, 80, 80, 'k');
  partyWhiteDuck.addAni(partyDuckAni);


}

//draw
function draw() {
  //checking screens
  if (screen == 1) {
    happyScreen();
    backgroundText();
  }
  
  if (screen == 2) {
    madScreen();
    backgroundText();
  }
  
  if (screen == 3) {
    sadScreen();
    backgroundText();
  }
  
  if (screen == 4) {
    partyScreen();
    backgroundText();
  }

  //pressing buttons
  if (happyButton.mouse.presses()) {
    mouseClick.play();
    screen = 1;
    partyMusic.stop();
  }
  if (madButton.mouse.presses()) {
    mouseClick.play();
    screen = 2;
    partyMusic.stop();
  }
  if (sadButton.mouse.presses()) {
    mouseClick.play();
    screen = 3;
    partyMusic.stop();
  }
  if (partyButton.mouse.presses()) {
    mouseClick.play();
    screen = 4;
    partyMusic.play();
    partyMusic.loop();
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
  textSize(20);

  buttonWidth = windowWidth/6;
  buttonHeight = windowHeight/13;
  
  //makes buttons at bottom to change emotions

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

function backgroundText() {
  //text above buttons
  textAlign(CENTER);
  text('How do you feel today?', windowWidth/2, windowHeight - windowHeight/4);
}