/***********************************************************************************
	Rooms of a House
	by Natalie Morris

 This program navigates you throw a series of six "rooms" simulated by mood states that
 draw pngs on the user's screen. The user uses the mouse to click on buttons that allow
 them to explore the different rooms. They can also press and "play" and "pause" button
 that allows them to sit back and have the rooms auto-navigate like a slideshow.

***********************************************************************************/

// Timer variables
var simpleTimer;
var timerButton;
var timerActive;

// Function variable
var drawFunction;

// Button movement variables
var buttonMove;
var buttonSpeed;

// Image variables

	// Pause and play variables
	var playButton;
	var playingButton;

	// Splash variables
	var keys;
	var instructions;

	// Bathroom variables
	var bathroomBackground;
	var bathroomFaucet;
	var bathroomPlant;
	var bathroomButtonToBedroom;

	// Bedroom variables
	var bedroomBackground;
	var bedroomBed;
	var bedroomMirror;
	var bedroomTable;
	var bedroomButtonToBathroom;
	var bedroomButtonToStairs;
	var bedroomButtonToOffice;

	// Kitchen variables
	var kitchenBackground;
	var kitchenRack;
	var kitchenStove;
	var kitchenTable;
	var kitchenButtonToLiving;

	// Living room variables
	var livingBackground;
	var livingCouch;
	var livingRug;
	var livingTable;
	var livingArt;
	var livingButtonToStairs;
	var livingButtonToKitchen;

	// Stairway variables
	var stairsBackground;
	var stairsStaircase;
	var stairsCase;
	var stairsPlant;
	var stairsMirror;
	var stairsButtonToBedroom;
	var stairsButtonToLiving;

	// Office variables
	var officeBackground;
	var officeDesk;
	var officeChair;
	var officePlant;
	var officeComp;
	var officeScreen;
	var officeLamp;
	var officeButtonToBedroom

// Load all images
function preload() {

	// Pause and play assets
	playButton = loadImage('assets/play.png');
	playingButton = loadImage('assets/playing.png');

	// Splash assets
	keys = loadImage('assets/splash.png');
	instructions = loadImage('assets/instructions.png');

	// Bathroom assets
	bathroomBackground = loadImage('assets/Bathroom/background.png');
	bathroomFaucet = loadImage('assets/Bathroom/faucet.png');
	bathroomPlant = loadImage('assets/Bathroom/plant.png');
	bathroomButtonToBedroom = loadImage('assets/Bathroom/bathroomtobedroom.png');

	// Bedroom assets
	bedroomBackground = loadImage('assets/Bedroom/background.png');
	bedroomBed = loadImage('assets/Bedroom/bed.png');
	bedroomTable = loadImage('assets/Bedroom/table.png');
	bedroomMirror = loadImage('assets/Bedroom/mirror.png');
	bedroomButtonToOffice = loadImage('assets/Bedroom/bedroomtooffice.png');
	bedroomButtonToStairs = loadImage('assets/Bedroom/bedroomtostairs.png');
	bedroomButtonToBathroom = loadImage('assets/Bedroom/bedroomtobathroom.png');

	// Office assets
	officeBackground = loadImage('assets/Office/background.png');
	officeDesk = loadImage('assets/Office/desk.png');
	officeScreen = loadImage('assets/Office/screen.png');
	officeComp = loadImage('assets/Office/comp.png');
	officePlant = loadImage('assets/Office/plant.png');
	officeChair = loadImage('assets/Office/chair.png');
	officeLamp = loadImage('assets/Office/lamp.png');
	officeButtonToBedroom = loadImage('assets/Office/officetobedroom.png');

	// Stairway assets
	stairsBackground = loadImage('assets/Stairs/background.png');
	stairsStaircase = loadImage('assets/Stairs/staircase.png');
	stairsPlant = loadImage('assets/Stairs/plant.png');
	stairsMirror = loadImage('assets/Stairs/mirror.png');
	stairsCase = loadImage('assets/Stairs/case.png');
	stairsButtonToLiving = loadImage('assets/Stairs/stairstoliving.png');
	stairsButtonToBedroom = loadImage('assets/Stairs/stairstobedroom.png');

	// Living room assets
	livingBackground = loadImage('assets/Living/background.png');
	livingCouch = loadImage('assets/Living/couch.png');
	livingRug = loadImage('assets/Living/rug.png');
	livingTable = loadImage('assets/Living/table.png');
	livingArt = loadImage('assets/Living/wallart.png');
	livingButtonToKitchen = loadImage('assets/Living/livingtokitchen.png');
	livingButtonToStairs = loadImage('assets/Living/livingtoStairs.png');

	// Kitchen assets
	kitchenBackground = loadImage('assets/Kitchen/background.png');
	kitchenTable = loadImage('assets/Kitchen/table.png');
	kitchenRack = loadImage('assets/Kitchen/rack.png');
	kitchenStove = loadImage('assets/Kitchen/stove.png');
	kitchenButtonToLiving = loadImage('assets/Kitchen/kitchentoliving.png');
}

// Build canvas and center images
function setup() {
	createCanvas(windowWidth, windowHeight);

	// Center images and text on screen
	imageMode(CENTER);
	textAlign(CENTER);

	// Set button animation variables
	buttonMove = 5;
	buttonSpeed = .2;

	// Set startup state to instructions page
	drawFunction = drawSplash;

	// Initialize timer which is inactive until prompted by play button
	simpleTimer = new Timer(0);
	timerActive = false;

	// Initialize timer button to play button
	timerButton = playButton;
 }

 // Draw code goes here
function draw() {
	background(255);

	// Call first state
	drawFunction();

	// Calls timer function
	drawTimer();
}

// Draws play and pause button on the screen and triggers timer
function drawTimer() {
	image(timerButton, width / 2, height / 2 + 330, 
	playButton.width / 2, playButton.height / 2);

	// When timer is activated, it prompts the slideshow to begin
	if (timerActive) {
		drawSlideshow();
	}
}

// Rooms auto play when timer is active
function drawSlideshow() {
	// The first 5 seconds draws the kitchen
	if ( (simpleTimer.getRemainingTime() < 30000) && 
		(simpleTimer.getRemainingTime() > 25000) ) {
		drawFunction = drawKitchen;
	}

	// The next 5 seconds draws the living room
	else if ( (simpleTimer.getRemainingTime() < 24999) && 
		(simpleTimer.getRemainingTime() > 20000) ) {
		drawFunction = drawLiving;
	}

	// The next 5 seconds draws the stairway
	else if ( (simpleTimer.getRemainingTime() < 19999) && 
		(simpleTimer.getRemainingTime() > 15000) ) {
		drawFunction = drawStairs;
	}

	// The next 5 seconds draws the bedroom
	else if ( (simpleTimer.getRemainingTime() < 14999) && 
		(simpleTimer.getRemainingTime() > 10000) ) {
		drawFunction = drawBedroom;
	}

	// The next 5 seconds draws the office
	else if ( (simpleTimer.getRemainingTime() < 9999) && 
		(simpleTimer.getRemainingTime() > 5000) ) {
		drawFunction = drawOffice;
	}

	// The last 5 seconds draws the bathroom
	else if ( (simpleTimer.getRemainingTime() < 4999) &&
		(simpleTimer.getRemainingTime() > 1000 ) ) {
		drawFunction = drawBathroom;
	}

	// Return to splash page when slideshow is done
	else if ( (simpleTimer.getRemainingTime() < 999) &&
		(simpleTimer.getRemainingTime() > 1 ) ) {
		drawFunction = drawSplash;
	}

	// Timer button returns back to play button prompt
	else if (simpleTimer.getRemainingTime() === 0) {
		timerButton = playButton;
	}
}

// Depending on what room the user is in, clicking the button area with change the state
 function mousePressed() {
	// When the play button is clicked, the timer is set and activated.
 	if ( (mouseX > 400) && (mouseX < 900) && (mouseY < 730) && (mouseY > 700) ) {
 		simpleTimer.setTimer(30000);
 		simpleTimer.start();
 		timerButton = playingButton;
 		timerActive = true;
 		drawSlideshow();
 	}

 	// Pressing the arrow on the splash page enters the house
 	if (drawFunction === drawSplash) {
 		if ( (mouseX > 675) && (mouseX < 960) && (mouseY < 488) && (mouseY > 280) ) {
 			drawFunction = drawStairs;
 		}
 	}

 	// Bathroom goes to the bedroom
	else if (drawFunction === drawBathroom) {
		if ( (mouseX > 950) && (mouseY < 300) ) {
			drawFunction = drawBedroom;
		}
	}

	// Bedroom goes to the bathroom, office, and stairs
	else if (drawFunction === drawBedroom) {
		// Bedroom to bathroom
		if ( (mouseX > 950) && (mouseY < 300) ) {
			drawFunction = drawBathroom;
		}

		// Bedroom to office
		else if ( (mouseX < 800) && (mouseX > 635) && (mouseY < 270) ) {
			drawFunction = drawOffice;
		}

		// Bedroom to stairs
		else if ( (mouseX < 335) && (mouseY < 315) && (mouseY > 200) ) {
			drawFunction = drawStairs;
		}
	}

	// Office goes to the bedroom
	else if (drawFunction === drawOffice) {
		if ( (mouseX < 615) && (mouseX > 420) && (mouseY < 200) ) {
			drawFunction = drawBedroom;
		}
	}

	// Stairs go to bedroom and living room
	else if (drawFunction === drawStairs) {
		// Stairway to bedroom
		if ( (mouseX < 410) && (mouseY < 228) ) {
			drawFunction = drawBedroom;
		}
		// Stairway to living room
		if ( (mouseX > 942) && (mouseY > 490) ) {
			drawFunction = drawLiving;
		}
	}

	// Living room goes to kitchen and stairway
	else if (drawFunction === drawLiving) {
		// Living room to stairway
		if ( (mouseX > 970) && (mouseY < 350) && (mouseY > 250) ) {
			drawFunction = drawStairs;
		}
		// Living room to kitchen
		if ( (mouseX < 360) && (mouseY < 230) ) {
			drawFunction = drawKitchen;
		}
	}

	// Kitchen goes to living room
	else if (drawFunction === drawKitchen) {
		if ( (mouseX > 935) && (mouseY > 318) && (mouseY < 446) ) {
			drawFunction = drawLiving;
		}
	}
}

// Draw bathroom pngs into canvas
drawBathroom = function() {
	// Background
	image(bathroomBackground, width / 2, height / 2, 
		bathroomBackground.width / 2, bathroomBackground.height / 2);

	// Faucet
	image(bathroomFaucet, width / 2 - 250, height / 2, 
		bathroomFaucet.width / 2, bathroomFaucet.height / 2);

	// Plant
	image(bathroomPlant, width / 2 + 100, height / 2, 
		bathroomPlant.width / 2, bathroomPlant.height / 2);

	// Bathroom to bedroom button
	image(bathroomButtonToBedroom, width / 2 + 350, height / 2 - 150 + buttonMove, 
		bathroomButtonToBedroom.width / 2, bathroomButtonToBedroom.height / 2);

	// Calls function to make buttons go up and down
	buttonBounce();
}

// Draw bedroom pngs into canvas
drawBedroom = function() {
	// Background
	image(bedroomBackground, width / 2, height / 2, 
		bedroomBackground.width / 2, bedroomBackground.height / 2);

	// Bed
	image(bedroomBed, width / 2 + 19, height / 2 + 90, 
		bedroomBed.width / 2, bedroomBed.height / 2);

	// Mirror
	image(bedroomMirror, width / 2 - 120, height / 2 - 132, 
		bedroomMirror.width / 2, bedroomMirror.height / 2);

	// Table
	image(bedroomTable, width / 2 - 330 , height / 2, 
		bedroomTable.width / 2, bedroomTable.height / 2);

	// Bedroom to bathroom button
	image(bedroomButtonToBathroom, width / 2 + 350, height / 2 - 190 + buttonMove, 
		bedroomButtonToBathroom.width / 2, bedroomButtonToBathroom.height / 2);

	// Bedroom to office button
	image(bedroomButtonToOffice, width / 2 + 65, height / 2 - 195 + buttonMove, 
		bedroomButtonToOffice.width / 2, bedroomButtonToOffice.height / 2);

	// Bedroom to stairs button
	image(bedroomButtonToStairs, width / 2 - 410, height / 2 - 100 + buttonMove, 
		bedroomButtonToStairs.width / 2, bedroomButtonToStairs.height / 2);

	// Calls function to make buttons go up and down
	buttonBounce();
}

// Draw office pngs into canvas
drawOffice = function() {
	// Background
	image(officeBackground, width / 2, height / 2, 
		officeBackground.width / 2, officeBackground.height / 2);

	// Desk
	image(officeDesk, width / 2 + 20, height / 2 + 50, 
		officeDesk.width / 2, officeDesk.height / 2);

	// Tablet screen
	image(officeScreen, width / 2 - 100, height / 2 - 70, 
		officeScreen.width / 2, officeScreen.height / 2);

	// Desktop computer
	image(officeComp, width / 2 + 230, height / 2 - 110, 
		officeComp.width / 2, officeComp.height / 2);

	// Chair
	image(officeChair, width / 2, height / 2 + 135, 
		officeChair.width / 2, officeChair.height / 2);

	// Plant
	image(officePlant, width / 2 - 360, height / 2 - 70, 
		officePlant.width / 2, officePlant.height / 2);

	// Lamp
	image(officeLamp, width / 2 + 320, height / 2 - 85, 
		officeLamp.width / 2, officeLamp.height / 2);

	// Office to bedroom button
	image(officeButtonToBedroom, width / 2 - 130, height / 2 - 210 + buttonMove, 
		officeButtonToBedroom.width / 2, officeButtonToBedroom.height / 2);

	// Calls function to make buttons go up and down
	buttonBounce();
}

// Draw stairway pngs into canvas
drawStairs = function() {
	// Background
	image(stairsBackground, width / 2, height / 2, 
		stairsBackground.width / 2, stairsBackground.height / 2);

	// Staircase
	image(stairsStaircase, width / 2 - 25, height / 2 - 16, 
		stairsStaircase.width / 2, stairsStaircase.height / 2);

	// Plant
	image(stairsPlant, width / 2 + 230, height / 2 - 20, 
		stairsPlant.width / 2, stairsPlant.height / 2);

	// Mirror
	image(stairsMirror, width / 2 + 398, height / 2 - 50, 
		stairsMirror.width / 2, stairsMirror.height / 2);

	// Display case
	image(stairsCase, width / 2 - 280, height / 2 + 25, 
		stairsCase.width / 2, stairsCase.height / 2);

	// Stairway to living room button
	image(stairsButtonToLiving, width / 2 + 380, height / 2 + 180 + buttonMove, 
		stairsButtonToLiving.width / 2, stairsButtonToLiving.height / 2);

	// Stairway to bedroom button
	image(stairsButtonToBedroom, width / 2 - 360, height / 2 - 200 + buttonMove, 
		stairsButtonToBedroom.width / 2, stairsButtonToBedroom.height / 2);

	// Calls function to make buttons go up and down
	buttonBounce();
}

// Draw living room pngs into canvas
drawLiving = function() {
	// Background
	image(livingBackground, width / 2, height / 2, 
		livingBackground.width / 2, livingBackground.height / 2);

	// Couch
	image(livingCouch, width / 2 - 293, height / 2 + 79, 
		livingCouch.width / 2, livingCouch.height / 2);

	// Rug
	image(livingRug, width / 2 + 150, height / 2 + 165, 
		livingRug.width / 2, livingRug.height / 2);

	// Table
	image(livingTable, width / 2 + 200, height / 2, 
		livingTable.width / 2, livingTable.height / 2);

	// Wall art
	image(livingArt, width / 2 + 50, height / 2 - 150, 
		livingArt.width / 2, livingArt.height / 2);

	// Living room to stairway button
	image(livingButtonToStairs, width / 2 + 400, height / 2 - 80 + buttonMove, 
		livingButtonToStairs.width / 2, livingButtonToStairs.height / 2);

	// Living room to kitchen button
	image(livingButtonToKitchen, width / 2 - 380, height / 2 - 200 + buttonMove, 
		livingButtonToKitchen.width / 2, livingButtonToKitchen.height / 2);

	// Calls function to make buttons go up and down
	buttonBounce();
}

// Draw kitchen pngs into canvas
drawKitchen = function() {
	// Background
	image(kitchenBackground, width / 2, height / 2, 
		kitchenBackground.width / 2, kitchenBackground.height / 2);

	// Table
	image(kitchenTable, width / 2 - 40, height / 2 + 200, 
		kitchenTable.width / 2, kitchenTable.height / 2);

	// Stove
	image(kitchenStove, width / 2 - 270, height / 2 + 180, 
		kitchenStove.width / 2, kitchenStove.height / 2);

	// Rack
	image(kitchenRack, width / 2, height / 2 - 80, 
		kitchenRack.width / 2, kitchenRack.height / 2);
	
	// Kitchen to living room button
	image(kitchenButtonToLiving, width / 2 + 360, height / 2 + buttonMove, 
		kitchenButtonToLiving.width / 2, kitchenButtonToLiving.height / 2);

	// Calls function to make buttons go up and down
	buttonBounce();
}

drawSplash = function() {
	//Keys
	image(keys, width / 2 - 170, height / 2, 
		keys.width / 2, keys.height / 2);

	//Instructions
	image(instructions, width / 2 + 170, height / 2 + buttonMove, 
		instructions.width / 2, instructions.height / 2);

	// Calls function to make buttons go up and down
	buttonBounce();
}

// Animates the button to move up and then down again before it gets too high
function buttonBounce() {
	if (buttonMove > 10) {
		buttonSpeed = -.2;
	}

	if (buttonMove < 0) {
		buttonSpeed = .2;
	}

	buttonMove = buttonMove + buttonSpeed;
}