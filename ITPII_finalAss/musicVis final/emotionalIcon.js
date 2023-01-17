function EmotionalIcon()
{
	this.name = "emotionalIcon";

        
	this.draw = function()
    {
		push();
        
        //get analyze of songs
        var color_motion = fourier.analyze();
       
        strokeWeight(12);
        
        //get valuse of the slider
        var val = volSlid.value();
        
        
            
        for(var i = 0; i < color_motion.length/32; i++)
        {
            for(var j = 0; j < color_motion.length/32; j++)
            {
                var colorVal = map(color_motion[i + j], 0, 255, 255, 0);
                //create smiley icon using colors that map from analyze
                if(colorVal < 120)
                {
                    if(i == 3 && j > 12 && j < 19)
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 4 && ((j > 9 && j < 13) || (j > 18 && j < 22)))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 5 && (j == 9 || j == 22))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 6 && (j == 8 || j == 23))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 7 && (j == 7 || j == 24))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 8 && (j == 6 || j == 25))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 9 && (j == 5 || j == 26))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 10 && (j == 4 || j == 27 || (j > 8 && j < 12) || (j > 20 && j < 24)))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 11 && (j == 4 || j == 27 || j == 8 || j == 24 || j == 12 || j == 20))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 12 && (j == 4 || j == 27 || j == 8 || j == 24 || j == 12 || j == 20))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 13 && (j == 4 || j == 27 || j == 8 || j == 24 || j == 12 || j == 20))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 14 && ((j > 2 && j < 4) || (j > 27 && j < 29) || (j > 8 && j < 12) || (j > 20 && j < 24)))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 15 && (j == 3 || j == 28 || (j > 14 && j < 18)))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 16 && (j == 3 || j == 28 || j == 15 || j == 17))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 17 && (j == 3 || j == 28 || (j > 14 && j < 18)))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 18 && (j == 3 ||j == 28))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 19 && (j == 4 || j == 27))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 20 && (j == 4 || j == 27 || (j > 11 && j < 21)))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 21 && (j == 4 || j == 27 || j == 12 || j == 20))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 22 && (j == 5 || j == 26 || j == 13 || j == 19))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 23 && (j == 6 || j == 25 || j == 14 || j == 18))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 24 && (j == 7 || j == 24 || (j > 14 && j < 18)))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 25 && (j == 8 || j == 23))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 26 && (j == 9 || j == 22))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 27 && ((j > 9 && j < 13) || (j > 18 && j < 22)))
                    {
                        stroke(val, 226, 0);
                    }
                    else if(i == 28 && j > 12 && j < 19)
                    {
                        stroke(val, 226, 0);
                    }
                    else
                    {
                        stroke(color_motion[i + j], colorVal, val);
                    }
                }
                else
                {
                    stroke(color_motion[i + j], colorVal, val);
                }
                
                //draw the square board
                point(width/2.5 + j * 10, height/4 + i * 10);
            }
        }
        
		pop();
	};
}