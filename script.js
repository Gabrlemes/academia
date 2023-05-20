let count = 1; 
let=document.getElementById("radio1").checked = true;

setInterval( function(){

}, 2000)

function nextImage()    {
    count++;
    if(count>3){
        count =1;
    }
    document.getElementById("radio"=count).checked = true;

}

