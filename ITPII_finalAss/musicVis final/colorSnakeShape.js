function ColorSnakeShape()
{
	this.name = "colorSnakeShape";

	this.draw = function()
    {
		this.snakeShape();
	};
    
    
    //draw the snake shape
    this.snakeShape = function()
    {
        push();
        //get analyze of songs
        var color_motion = fourier.analyze();
        for(var i = 0; i < color_motion.length%980; i++)
        {
            var c = map(color_motion[i], 0, 255, 255, 0);
            var val = volSlid.value();
            var r = random(c, val);
 
            stroke(c, r, color_motion[i]);
            noFill();
            
            //draw shape with x and y position base on analyze and mouseX, mouseY
            var x = c + mouseX;
            var y = c + mouseY;

            beginShape();
            curveVertex(x + i * 20, y + 80 + i * 3);
            curveVertex(x + i * 20, y + 80 + i * 3);
            curveVertex(x + 40 + i * 20, y + 90 + i * 3);
            curveVertex(x + 40 + i * 20, y + 140 + i * 3);
            curveVertex(x + i * 20, y + 130 + i * 3);
            curveVertex(x + i * 20, y + 180 + i * 3);
            curveVertex(x + 40 + i * 20, y + 170 + i * 3);
            curveVertex(x + 40 + i * 20, y + 220 + i * 3);
            curveVertex(x + i * 20, y + 230 + i * 3);
            curveVertex(x + i * 20, y + 180 + i * 3);
            curveVertex(x + 40 + i * 20, y + 170 + i * 3);
            curveVertex(x + 40 + i * 20, y + 130 + i * 3);
            curveVertex(x + i * 20, y + 130 + i * 3);
            curveVertex(x + i * 20, y + 80 + i * 3);
            curveVertex(x + 27 + i * 20, y + 80 + i * 3);
            curveVertex(x + 27 + i * 20, y + 50 + i * 3);
            curveVertex(x + 27 + i * 20, y + 50 + i * 3); 
            endShape();
        }
        
        pop();
    };
}

