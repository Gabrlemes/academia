let count = 1; 
let teste = document.getElementById("radio1").checked = true;

let id=$(this).find("label").attr("for");
$("."+id).on("click",function (e,h){
    console.log(e,h); 
})    

setInterval( function(){

}, 2000)

function nextImage()    {
    count++;
    if(count>3){
        count =1;
    }
    document.getElementById("radio"=count).checked = true;

}

