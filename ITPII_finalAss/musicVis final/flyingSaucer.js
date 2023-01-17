function FlyingSaucer()
{
	this.name = "flyingSaucer";
    var volArr = [];
    
    //variable for the shape to be animated
    var posX = 0;
    var posY = 0;
    
    //array to store mouseX, mouseY value
    var mulSaucer = [];
    
	this.draw = function()
    {
        this.tripleSaucer(40, 40);
        for(var i = 0; i < mulSaucer.length; i++)
        {
            this.tripleSaucer(mulSaucer[i].x, mulSaucer[i].y);
        }
	};
    
    //draw flying saucer shape
    this.tripleSaucer = function(specX, specY)
    {
        push();
        
        //get value of amplitude
        var vol = amp.getLevel();
        volArr.push(vol);
        
        //get value of the slider
        var val = volSlid.value();

        
        for(var i = 0; i < volArr.length; i++)
        {       
            var rSt2 = map(volArr[i], 0, 1, 0, 255);
            var gSt2 = random(50, val);
            var bSt2 = map(volArr[i], 0, 1, 255, 0);
            fill(0, 0, 0);
            stroke(rSt2, gSt2, bSt2);

            var r2 = map(volArr[i], 0, 1, 100, 500);
            var x2 = r2*cos(i);
            var y2 = r2*sin(i);
            ellipse(posX + specX, posY + specY, x2, y2);
        

            var speed2 = map(volArr[i], 0, 1, 0.002, 0.007)
            if(volArr.length > 80)
            {
                posX += speed2;
                posY += speed2;
            }

            //if saucers are out of screen will be re-appeared on the others end
            if(posX > width)
            {
                posX = 0;
            }

            if(posX < 0)
            {
               posX = width;
            }

            if(posY > height)
            {
                posY = 0;
            }

            if(posY < 0)
            {
                posY = height;
            }
        }


            if(volArr.length > 360)
            {
               volArr.splice(0, 1);
            }
        
        pop();
        
    };
    
    //get mouseX, mouseY values when mousePressed
    this.mousePressed = function mousePressed()
    {
        var xy = {x: mouseX, y: mouseY};
        mulSaucer.push(xy);
        
        if(mulSaucer.length > 4)
        {
            mulSaucer.splice(0, 1);
        }
    };
    
    
}