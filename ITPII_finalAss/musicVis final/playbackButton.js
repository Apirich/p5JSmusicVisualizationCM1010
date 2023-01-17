//displays and handles clicks on the playback button.
function PlaybackButton()
{
	this.x = 20;
	this.y = 20;
    
	this.width = 20;
	this.height = 20;
    
    this.playbackButtonOn = true;

	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
	this.draw = function()
    {
        if(this.playbackButtonOn)
        {
            if(songPlaying)
            {
                rect(this.x, this.y, this.width/2 - 2, this.height);
                rect(this.x + (this.width/2 + 2), this.y, this.width/2 - 2, this.height);
            }
            else
            {	
                triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);
            }
        }
        else
        {
            
        }
	};

	//checks for clicks on the button, starts or pauses playabck.
	//@returns true if clicked false otherwise.
    
    //check when 1st song is selected
	this.hitCheckSRB = function()
    {
        if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height)
        {
            if (soundSRB.isPlaying()) 
            {
                soundSRB.pause();
            } 
            else 
            {
                soundSRB.loop();
            }
            songPlaying = !songPlaying;
            return true;
        }
        return false;
	};
}