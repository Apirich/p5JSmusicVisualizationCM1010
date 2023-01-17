function MicrIn()
{
    this.micrOn = false;
    
    //x, y positions for microphone feature symbols
    this.xMicro = 60;
    this.yMicro = 20;
    
    //store voice levels from microphone
    this.micRArr = [];
    
    this.draw = function()
    {   
        push();
        //microphone feature is on
        if(this.micrOn)
        {
            fill(255, 0, 0);
            rect(this.xMicro - 5, this.yMicro - 3, 20, 20);
            
            var micStart = micr.start();
            var micLevel = micr.getLevel();
            
            var micY = map(micLevel, 0, 1, 80, 120);
            var micR = map(micLevel, 0, 1, 20, 220);
            
            this.micRArr.push(micR);
            if(this.micRArr.length > 20)
            {
                this.micRArr.splice(0, 1);
            }
            
            //get value of the slider
            var val = volSlid.value();
            
            var micRCol = map(micLevel, 0, 1, 205, 70);
            var micGCol = random(20, val);
            var micBCol = map(micLevel, 0, 1, 120, 190);
            
            fill(micRCol, micGCol, micBCol, 20);
            noStroke();
            
            //draw effects using voice levels
            for( var i = 0; i < this.micRArr.length; i++)
            {
                ellipse(width/2, height - 30 - micY, this.micRArr[i], this.micRArr[i]);
            }
        }
        //micro feature off
        else
        {
            //outside circle
            stroke(255, 0 , 0);
            noFill();
            ellipse(this.xMicro + 5, this.yMicro + 8, 20, 20);
            
            //inside circle
            noStroke();
            fill(255, 0, 0);
            ellipse(this.xMicro + 5, this.yMicro + 8, 15, 15);
            var micStop = micr.stop();
        }
        pop();
    };
    
    //check if microphone feature symbols is pressed
    this.pressCheck = function()
    {
        if(mouseX >= (this.xMicro - 7) && mouseX <= (this.xMicro + 10) && mouseY >= (this.yMicro - 10) && mouseY <= this.yMicro + 20)
        {
            this.micrOn = !this.micrOn;
            return true;
        }
        return false;
    };
}