function Manuals()
{
    this.draw = function()
    {
        fill(255, 255, 255);
        textSize(9);
        
        //draw slider label
        text("Slide to play effects", 90, 17);
        
        //draw instruction for Song lists
        text("Press S to choose a song", 190, 17);
        
        //draw instruction for visuals
        text("Press Space to choose a song", 310, 17);
        
        //draw instruction to click on flyingSaucer visuallisation
        if(vis.selectedVisual == vis.visuals[5])
        {
            text("Click to have fun", mouseX - 30, mouseY);
        }
        
    }
}