//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput()
{
    this.x = 20;
    this.y = 20;
    this.width = 20;
    this.height = 20;
    
	this.menuDisplayed = false;
    
    this.songDisplayed = false;
    
    this.xMicro = 60;
    this.yMicro = 20;
    
	
	//playback button displayed in the top left of the screen
    this.playbackButton = new PlaybackButton();
    
    //microphone symbols displayed in the top left of the screen
    this.micrIn = new MicrIn();
    

	
	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function()
    {
        //display menu for visualisations
		if(keyCode == 32)
        {
			this.menuDisplayed = !this.menuDisplayed;
            prevKeycode = 32;
            this.songDisplayed = false;
            this.playbackButton.playbackButtonOn = !this.playbackButton.playbackButtonOn;
		}
        
        //keycode to select visualisations
		if(prevKeycode == 32 && keyCode > 48 && keyCode < 58)
        {
			var visNumber = keyCode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
        
        //display menu for songs list
        if(keyCode == 83)
        {
            this.songDisplayed = !this.songDisplayed;
            prevKeycode = 83;
            this.menuDisplayed = false;
            this.playbackButton.playbackButtonOn = true;
        }
        
        
        //auto play when switching songs
        //stop 2nd, and 3rd songs to play 1st song
        if(prevKeycode == 83 && keyCode == 49)
        {
            if (soundANCA.isPlaying() || soundCHP.isPlaying()) 
            {
                soundANCA.stop() || soundCHP.stop();
                soundSRB.loop();
            } 
        }
        
        //stop 1st, and 3rd songs to play 2nd song
        if(prevKeycode == 83 && keyCode == 50)
        {
            if (soundSRB.isPlaying() || soundCHP.isPlaying()) 
            {
                soundSRB.stop() || soundCHP.stop();
                soundANCA.loop();
            }
        }
        
        //stop 1st, and 2nd songs to play 3rd song
        if(prevKeycode == 83 && keyCode == 51)
        {
            if (soundSRB.isPlaying() || soundANCA.isPlaying()) 
            {
                soundSRB.stop() || soundANCA.stop();

                soundCHP.loop();
            }
        }
	};
    
    
    //call functions when mouse is pressed
	this.mousePressed = function()
    {
        //is flying saucer visualisation is selected, call it mousePressed() to pass in mouseX, mouseY
        if(vis.selectedVisual == vis.visuals[5])
        {
            vis.visuals[5].mousePressed();
            
        }
        
        
        //check if microphone features is on or off
        if(mouseX >= (this.xMicro - 7) && mouseX <= (this.xMicro + 10) && mouseY >= (this.yMicro - 10) && mouseY <= (this.yMicro + 20))
        {
            this.micrIn.pressCheck();
        }
        
        
        //default play first song and switch songs without disturb
        if(prevKeycode == 0 || prevKeycode == 32 || prevKeycode == 83)
        {
            if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height)
            {
                if(soundANCA.isPlaying())
                {
                    soundANCA.pause();
                    songPlaying = !songPlaying;
                }
                else if(soundANCA.isPaused())
                {
                    soundANCA.loop();
                    songPlaying = !songPlaying;
                }
                else if(soundCHP.isPlaying())
                {
                    soundCHP.pause();
                    songPlaying = !songPlaying;
                }
                else if(soundCHP.isPaused())
                {
                    soundCHP.loop();
                    songPlaying = !songPlaying;
                }
                else
                {
                    this.playbackButton.hitCheckSRB();
                }
            }
        }
	};


	//draws the playback button and potentially the menu
	this.draw = function()
    {
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button 
		this.playbackButton.draw();
        
        //draw micro symbol
        this.micrIn.draw();
        
        
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed)
        {

			text("Select a visualisation:", 500, 30);
			this.menu();
        }
        
        //only draw the songs list if song displayed is set to true.
        if(this.songDisplayed)
        {
			text("Select a song:", 500, 30);
			this.songslist();
		}	
		pop();

	};

    
	this.menu = function()
    {
		//draw out menu items for each visualisation
		for(var i = 0; i < vis.visuals.length; i++)
        {
			var yLoc = 70 + i*40;
			text((i+1) + ":  " + vis.visuals[i].name, 500, yLoc);
		}
    };
        
    
    this.songslist = function()
    {
        //draw out menu for songs list
		for(var i = 0; i < song.songs.length; i++)
        {
			var yLoc = 70 + i*40;
			text((i+1) + ":  " + song.songs[i].name, 500, yLoc);
        }
    
	};
}