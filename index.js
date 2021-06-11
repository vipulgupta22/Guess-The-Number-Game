var secretnum;
var current=0;
function showeasy(){
    var show = document.getElementById("game");
    show.style.display="flex";
    document.getElementById("hard").style.display="none";
    document.getElementById("easy").style.display="block";
    this.secretnum = Math.ceil(Math.random()*10);
}
function showhard(){
    var show = document.getElementById("game");
    show.style.display="flex";
    document.getElementById("easy").style.display="none";
    document.getElementById("hard").style.display="block";
    secretnum = Math.ceil(Math.random()*100);
}
function playagain(){
    var show = document.getElementById("game");
    show.style.display="none";
    location.reload();
}
function easygame(){
    var input = document.getElementById("inputnum").value;
    var turnstr = document.getElementById("turns").textContent;
    var matches = turnstr.match(/\d+/);
    var turn = matches[0];
    var turnstr = document.getElementById("turns").textContent;
    var matches = turnstr.match(/\d+/);
    var turn = matches[0];
    this.current = this.current+1;
    if(input>=1 && input<=10){
        if(this.current<5){
            if(input == this.secretnum){
                document.getElementById("currentturn").style.display="none";
                document.getElementById("result").innerHTML = "You find the secret number "+this.secretnum +" in "+this.current+" Turns.";
                document.getElementById("result").style.color="Blue";
                document.getElementById("head").style.display="none";
                document.getElementById("turns").style.display="none";
                document.getElementById("formi").style.display="none";
            }
            else if(input<this.secretnum){
                document.getElementById("currentturn").innerHTML="Turn "+(this.current+1);
                document.getElementById("result").innerHTML="Your guess "+input+" is low.";
                document.getElementById("turns").innerHTML= (turn-1)+" Turns left.";
            }
            else{
                document.getElementById("currentturn").innerHTML="Turn "+(this.current+1);
                document.getElementById("result").innerHTML="Your guess "+input+" is high.";
                document.getElementById("turns").innerHTML= (turn-1)+" Turns left.";
            }
        }
        else{
            document.getElementById("currentturn").style.display="none";
            document.getElementById("result").innerHTML="NO Turns Left.";
            document.getElementById("head").innerHTML="Secret Number is "+this.secretnum+".";
            document.getElementById("turns").style.display="none";
            document.getElementById("formi").style.display="none";
        }
    }
    else{
        if(this.current<5){
            document.getElementById("currentturn").innerHTML="Turn "+(this.current+1);
            document.getElementById("result").innerHTML="The number entered is outside the range.";
            document.getElementById("turns").innerHTML=(turn-1)+" Turns left.";
        }
        else{
            document.getElementById("currentturn").innerHTML="No Turn Left";
            document.getElementById("result").innerHTML="The number entered is outside the range.";
            document.getElementById("head").innerHTML="Secret Number is "+this.secretnum+".";
            document.getElementById("turns").style.display="none";
            document.getElementById("formi").style.display="none";
        }
    }
}

function hardgame(){
    var input = document.getElementById("inputnum1").value;
    var turnstr = document.getElementById("turns1").textContent;
    var matches = turnstr.match(/\d+/);
    var turn = matches[0];
    var turnstr = document.getElementById("turns1").textContent;
    var matches = turnstr.match(/\d+/);
    var turn = matches[0];
    this.current = this.current+1;
    if(input>=1 && input<=100){
        if(this.current<8){
            if(input == this.secretnum){
                document.getElementById("currentturn1").style.display="none";
                document.getElementById("result1").innerHTML = "You find the secret number "+this.secretnum +" in "+this.current+" Turns.";
                document.getElementById("result1").style.color="Blue";
                document.getElementById("head1").style.display="none";
                document.getElementById("turns1").style.display="none";
                document.getElementById("formi1").style.display="none";
            }
            else if(input<this.secretnum){
                document.getElementById("currentturn1").innerHTML="Turn "+(this.current+1);
                document.getElementById("result1").innerHTML="Your guess "+input+" is low.";
                document.getElementById("turns1").innerHTML= (turn-1)+" Turns left.";
            }
            else{
                document.getElementById("currentturn1").innerHTML="Turn "+(this.current+1);
                document.getElementById("result1").innerHTML="Your guess "+input+" is high.";
                document.getElementById("turns1").innerHTML= (turn-1)+" Turns left.";
            }
        }
        else{
            document.getElementById("currentturn1").style.display="none";
            document.getElementById("result1").innerHTML="NO Turns Left.";
            document.getElementById("head1").innerHTML="Secret Number is "+this.secretnum+".";
            document.getElementById("turns1").style.display="none";
            document.getElementById("formi1").style.display="none";
        }
    }
    else{
        if(this.current<8){
            document.getElementById("currentturn1").innerHTML="Turn "+(this.current+1);
            document.getElementById("result1").innerHTML="The number entered is outside the range.";
            document.getElementById("turns1").innerHTML=(turn-1)+" Turns left.";
        }
        else{
            document.getElementById("currentturn1").innerHTML="No Turn Left";
            document.getElementById("result1").innerHTML="The number entered is outside the range.";
            document.getElementById("head1").innerHTML="Secret Number is "+this.secretnum+".";
            document.getElementById("turns1").style.display="none";
            document.getElementById("formi1").style.display="none";
        }
    }
}