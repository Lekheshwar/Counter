var count = 0;
function upCount(){
    count += 1;
    document.getElementById("count").innerHTML=count;
    
}

function downCount(){
    count -= 1;
    document.getElementById("count").innerHTML=count;
    
}

function reset(){
    count = 0;
    document.getElementById("count").innerHTML=count;
    
}
