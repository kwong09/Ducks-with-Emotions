//variables
let happyWhiteDuck, madWhiteDuck, sadWhiteDuck, partyWhiteDuck;
let happyButton, madButton, sadButton, partyButton, muteButton, happyButtonHighlight, madButtonHighlight, sadButtonHighlight, partyButtonHighlight, isMuted = false;
let titleText, instructionsText;
let buttonWidth, buttonHeight;
let screen = 1;
let happyDuckAni, sadDuckAni, madDuckAni, partyDuckAni;
let font;
let mouseClick, partyMusic, happyMusic, sadMusic, madMusic;
let topText;

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
  happyMusic = loadSound("assets/happyGameMusic.mp3");
  madMusic = loadSound("assets/madGameMusic.mp3");
  sadMusic = loadSound("assets/sadGameMusic.mp3");
}

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("lightyellow");
  makeButtons();

  happyDuckAni.scale = 2;
  madDuckAni.scale = 2;
  sadDuckAni.scale = 2;
  partyDuckAni.scale = 2;

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
    textAlign(CENTER);
    textSize(20);
    text(topText, windowWidth/2, windowHeight/8);
    topText = "Hooray! I hope your day \ncontinues to be awesome!";
  }
  
  if (screen == 2) {
    madScreen();
    backgroundText();
    textAlign(CENTER);
    textSize(20);
    text(topText, windowWidth/2, windowHeight/8);
    topText = "Being angry is natural for \nhumans to experience. But \ndon't let it control you";
  }
  
  if (screen == 3) {
    sadScreen();
    backgroundText();
    textAlign(CENTER);
    textSize(20);
    text(topText, windowWidth/2, windowHeight/8);
    topText = "It's okay, we all cry sometimes";
  }
  
  if (screen == 4) {
    partyScreen();
    backgroundText()
    textAlign(CENTER);
    textSize(20);
    text(topText, windowWidth/2, windowHeight/8);;
    topText = "PARTY PARTY PARTY!!";
  }

  //pressing buttons
  if (happyButton.mouse.presses()) {
    mouseClick.play();
    screen = 1;
    if (!isMuted) {
      happyMusic.play();
      happyMusic.loop();
      sadMusic.stop();
      madMusic.stop();
      partyMusic.stop();
    }
  }
  if (madButton.mouse.presses()) {
    mouseClick.play();
    screen = 2;
    if (!isMuted) {
      happyMusic.stop();
      sadMusic.stop();
      madMusic.play();
      madMusic.loop();
      partyMusic.stop();
    }
  }
  if (sadButton.mouse.presses()) {
    mouseClick.play();
    screen = 3;
    if (!isMuted) {
      happyMusic.stop();
      sadMusic.play();
      sadMusic.loop();
      madMusic.stop();
      partyMusic.stop();
    }
  }
  if (partyButton.mouse.presses()) {
    mouseClick.play();
    screen = 4;
    if (!isMuted) {
      happyMusic.stop();
      sadMusic.stop();
      madMusic.stop();
      partyMusic.play();
      partyMusic.loop();
    }
  }

  if (isMuted == true) {
    muteMusic();
  }

  //mutes or unmutes music
  if (muteButton.mouse.presses()) {
    if (!isMuted) {
      isMuted = true;
      muteButton.text = "Unmute";
      muteButton.color = 'gray';
    } else if (isMuted) {
      isMuted = false;
      muteButton.text = "Mute";
      muteButton.color = 'white';
    }
  }
}

function happyScreen() {
  background("#ffe957");
  happyWhiteDuck.pos = {x: windowWidth/2, y: windowHeight/2};
  madWhiteDuck.pos = {x: -100, y: -100};
  sadWhiteDuck.pos = {x: -100, y: -100};
  partyWhiteDuck.pos = {x: -100, y: -100};
  happyButtonHighlight.pos = {x: windowWidth/5, y: windowHeight - windowHeight/8};
  madButtonHighlight.pos = {x: -100, y: -100};
  sadButtonHighlight.pos = {x: -100, y: -100};
  partyButtonHighlight.pos = {x: -100, y: -100};
}

function madScreen() {
  background("#ed544c");
  madWhiteDuck.pos = {x: windowWidth/2, y: windowHeight/2};
  happyWhiteDuck.pos = {x: -100, y: -100};
  sadWhiteDuck.pos = {x: -100, y: -100};
  partyWhiteDuck.pos = {x: -100, y: -100};
  madButtonHighlight.pos = {x: windowWidth/5*2, y: windowHeight - windowHeight/8};
  happyButtonHighlight.pos = {x: -100, y: -100};
  sadButtonHighlight.pos = {x: -100, y: -100};
  partyButtonHighlight.pos = {x: -100, y: -100};
}

function sadScreen() {
  background("lightblue");
  sadWhiteDuck.pos = {x: windowWidth/2, y: windowHeight/2};
  happyWhiteDuck.pos = {x: -100, y: -100};
  madWhiteDuck.pos = {x: -100, y: -100};
  partyWhiteDuck.pos = {x: -100, y: -100};
  sadButtonHighlight.pos = {x: windowWidth/5*3, y: windowHeight - windowHeight/8};
  madButtonHighlight.pos = {x: -100, y: -100};
  happyButtonHighlight.pos = {x: -100, y: -100};
  partyButtonHighlight.pos = {x: -100, y: -100};
}

function partyScreen() {
  background("#eec7ff");
  partyWhiteDuck.pos = {x: windowWidth/2, y: windowHeight/2};
  happyWhiteDuck.pos = {x: -100, y: -100};
  madWhiteDuck.pos = {x: -100, y: -100};
  sadWhiteDuck.pos = {x: -100, y: -100};
  partyButtonHighlight.pos = {x: windowWidth/5*4, y: windowHeight - windowHeight/8};
  madButtonHighlight.pos = {x: -100, y: -100};
  sadButtonHighlight.pos = {x: -100, y: -100};
  happyButtonHighlight.pos = {x: -100, y: -100};
}

function makeButtons() {

  textSize(20);

  buttonWidth = windowWidth/6;
  buttonHeight = windowHeight/13;

  //makes border around buttons
  happyButtonHighlight = new Sprite (-100, -100, buttonWidth + 10, buttonHeight + 10, 'k')
  happyButtonHighlight.color = 'white';

  madButtonHighlight = new Sprite (-100, -100, buttonWidth + 10, buttonHeight + 10, 'k')
  madButtonHighlight.color = 'white';

  sadButtonHighlight = new Sprite (-100, -100, buttonWidth + 10, buttonHeight + 10, 'k')
  sadButtonHighlight.color = 'white';

  partyButtonHighlight = new Sprite (-100, -100, buttonWidth + 10, buttonHeight + 10, 'k')
  partyButtonHighlight.color = 'white';
  
  //makes buttons at bottom to change emotions
  happyButton = new Sprite(windowWidth/5, windowHeight - windowHeight/8, buttonWidth, buttonHeight, 'k');
  happyButton.color = "#ffe957";
  happyButton.text = "Happy";

  madButton = new Sprite(windowWidth/5 * 2, windowHeight - windowHeight/8, buttonWidth, buttonHeight, 'k');
  madButton.color = "#ed544c";
  madButton.text = "Mad";

  sadButton = new Sprite(windowWidth/5 * 3, windowHeight - windowHeight/8, buttonWidth, buttonHeight, 'k');
  sadButton.color = "lightblue";
  sadButton.text = "Sad";

  partyButton = new Sprite(windowWidth/5 * 4, windowHeight - windowHeight/8, buttonWidth, buttonHeight, 'k');
  partyButton.color = "#eec7ff";
  partyButton.text = "Party";

  //mute button for music
  muteButton = new Sprite (windowWidth - windowWidth/8, windowHeight/16, buttonWidth, buttonHeight, 'k');
  muteButton.color = 'white';
  muteButton.text = "Mute";
}

function backgroundText() {
  //text above buttons
  textAlign(CENTER);
  text('How do you feel today?', windowWidth/2, windowHeight - windowHeight/4);
}

function muteMusic() {
  happyMusic.stop();
  madMusic.stop();
  sadMusic.stop();
  partyMusic.stop();
}