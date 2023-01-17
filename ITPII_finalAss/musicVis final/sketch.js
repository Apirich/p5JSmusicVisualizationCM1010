//global for the controls and input 
var controls = null;
//global for manual
var manuals = null;
//store visualisations in a container
var vis = null;
//store songs in a list
var song = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;
//variable for p5.Amplitude
var amp;
//variable to switch between songs list and visualisations menu
var prevKeycode = 0;
//variable to create a slider
var volSlid;
//variable to switch playbackButton
var songPlaying = false;
//variable to create a microphone
var micr;
//array to push songs to set input for amplitude
var songsInput = [];


function preload()
{
	soundSRB = loadSound('assets/amplified.mp3');
    soundANCA = loadSound('assets/coyote.mp3');
    soundCHP = loadSound('assets/roundTableRival.mp3');
}

function setup()
{
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(0);

    //volume slider
    volSlid = createSlider(0, 255, 127);
    volSlid.position(90, 20);
    volSlid.style('width', '80px');
    
    //add ControlsAndInput
    controls = new ControlsAndInput();
    
    //add Manuals
    manuals = new Manuals();

    //store songs in songsInput to set songs as input for amplitude rather then microphone.getLevel
    songsInput.push(soundSRB);
    songsInput.push(soundANCA);
    songsInput.push(soundCHP);
    
    //instantiate the fft object
    fourier = new p5.FFT();
    
    //instantiate the Amplitude
    amp = new p5.Amplitude();
    
    //set songs as input for amplitude
    for(var i = 0; i < 3; i++)
    {
        amp.setInput(songsInput[i]);
    }
    
    //instantiate microphone feature
    micr = new p5.AudioIn();
    

	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new Spectrum());
	 vis.add(new WavePattern());
	 vis.add(new Needles());
     vis.add(new ColorSnakeShape());
     vis.add(new RainbowSpinner());
     vis.add(new FlyingSaucer());
     vis.add(new EmotionalIcon());
    
    
     //create a new songs list container and add songs
     song = new SongsList();
     song.add(new SRB());
     song.add(new ANCA());
     song.add(new CHP());
}

function draw()
{
	background(0);
    
	//draw the selected visualisation
	vis.selectedVisual.draw();
    
	//draw the controls on top.
	controls.draw();
    
   //draw manuals on top
    manuals.draw();
}


function mouseClicked()
{
    getAudioContext().resume()
	controls.mousePressed();
}

function keyPressed()
{
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
