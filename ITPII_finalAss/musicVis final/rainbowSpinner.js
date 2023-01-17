function RainbowSpinner()
{
	this.name = "rainbowSpinner";
    
    //array to store amplitude values
    var volArr = [];
    
	this.draw = function()
    {
        //get amplitude values
        var vol = amp.getLevel();
        volArr.push(vol);
        
        var valMo = volSlid.value();
        var tUser = map(valMo, 0, 255, 70, 0);
        var ran_tUser = random(0, tUser);
        
        //call this.spinner to draw the spinner 
        this.spinner(width/2, height/2, 2, noFill(), 175, 0, 70, 0, 155, 50, 500);
        
        
        //duplicate the spinner using currentTime
        for(var i = 0; i < songsInput.length; i++)
        {
            if(songsInput[i].currentTime() > 8)
            {
                this.spinner(width/6 + ran_tUser, height/3 + ran_tUser, 4, noFill(), 30, 230, 190, 200, 79, 90, 400);
            }   
            
            if(songsInput[i].currentTime() > 16)
            {
                this.spinner(width/1.5 + ran_tUser, height/1.5 + ran_tUser, 3, noFill(), 230, 80, 220, 27, 199, 20, 200);
            }    
            
            if(songsInput[i].currentTime() > 24)
            {
                this.spinner(width/1.2 + ran_tUser, height/1.2 + ran_tUser, 1, noFill(), 20, 80, 138, 227, 39, 124, 300);
            }   
            
            if(songsInput[i].currentTime() > 36)
            {
                this.spinner(width/1.2 + ran_tUser, height/7 + ran_tUser, 5, noFill(), 120, 33, 18, 244, 139, 34, 120);
            }   
            
            if(songsInput[i].currentTime() > 48)
            {
                this.spinner(width/7 + ran_tUser, height/1.3 + ran_tUser, 8, noFill(), 8, 23, 186, 123, 59, 27, 160);
            }   
        }
    };
    
    
    //draw the spinner
    this.spinner = function(tranX, tranY, st, fillOpt, rStLeft, rStRight, gStLeft, bStLeft, bStRight, rLeft, rRight)
    {
        var val = volSlid.value();
        push();
        translate(tranX, tranY);
        
        beginShape();
        strokeWeight(st);
        fillOpt;
        for(var i = 0; i < 360; i++)
        {
            var rSt = map(volArr[i], 0, 1, rStLeft, rStRight);
            var gSt = random(gStLeft, val);
            var bSt = map(volArr[i], 0, 1, bStLeft, bStRight);
            stroke(rSt, gSt, bSt);

            var r = map(volArr[i], 0, 1, rLeft, rRight);
            var x = r*cos(i);
            var y = r*sin(i);
            vertex(x, y);
        }
        endShape();

        if(volArr.length > 360)
        {
           volArr.splice(0, 1);
        }
        
        pop();
    };
}