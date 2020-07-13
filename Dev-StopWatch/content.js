class Time{

    constructor(web , pressed){

        this.website = web;
        this.pressed = pressed;

    }   

    showwatch(){
        
        var seconds = 0;
        var minutes = 0;
        var hours = 0;

        if (this.pressed){
            
            setInterval( () => {

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

                    console.log(web)

                    web.children[0].innerHTML = hours + "h ";
                    web.children[1].innerHTML = minutes + "m ";
                    web.children[2].innerHTML = seconds + "s ";
                    
                }, 1000
            )
        }
    }
}

new Time('github' , true).showwatch();
new Time('stackoverflow' , true).showwatch();

