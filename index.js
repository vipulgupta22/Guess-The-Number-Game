function showeasy(){
    var show = document.getElementById("game");
    show.style.display="flex";
    document.getElementById("hard").style.display="none";
    document.getElementById("easy").style.display="block";
}
function showhard(){
    var show = document.getElementById("game");
    show.style.display="flex";
    document.getElementById("easy").style.display="none";
    document.getElementById("hard").style.display="block";
}
function playagain(){
    var show = document.getElementById("game");
    show.style.display="none";
}