var reset = document.getElementById('reset');
var stop = document.getElementById('stop');

class Time{

    constructor(web , pressed){

        this.website = web;
        this.pressed = pressed;
    }

    reset = () => {

        var tag = document.getElementById(this.website);
        var times = ['h' , 'm' , 's'];

        for(let i=0 ; i<tag.children.length;i++)
        {
            tag.children[i].innerHTML = 0 + times[i] + " ";
        }

        this.pressed = false;
    }

    stop = () => {
        this.pressed = false;
    }

    showwatch(){
        
        var seconds = 0;
        var minutes = 0;
        var hours = 0;

        reset.addEventListener('click' , this.reset);
        stop.addEventListener('click' , this.stop);

        var frames = setInterval( () => {
                
                if(seconds >= 60){
                    seconds = 0;
                    minutes++;

                    if (minutes >= 60)
                    {
                        hours++;
                        minutes = 0;
                    }
                }
                else{
                    seconds++;
                }

                var web = document.getElementById(this.website);

                if (this.pressed){

                    web.children[0].innerHTML = hours + "h ";
                    web.children[1].innerHTML = minutes + "m ";
                    web.children[2].innerHTML = seconds + "s ";

                }
                else{

                    clearInterval(frames)
                }
                
            }, 1000
        )
    }
}

new Time('github' , true).showwatch();
new Time('stackoverflow' , true).showwatch();