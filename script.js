let hr = 00;
let min = 00;
let sec = 00;
let count = 00;
var timer = false;

//FOR STARING : 
function start(){
    //for enabling buttons
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("stop").disabled = false;

    timer = true;
    StopWatch();
}

//chaning the btn name to pause =>coontinue=>pause 
function Pause() {
   
    var pause = document.getElementById("pause");
    if (pause.innerHTML == "Pause"){
        timer = false;
        pause.innerHTML = "Continue";
    }else{

        timer=true;
        pause.innerHTML = "Pause";
        StopWatch();
    
    }
}
//FOR STOPING 
function stop(){
    //for disabling buttons 
    document.getElementById("pause").disabled = true;
    document.getElementById("stop").disabled = true;
    timer=false;
     hr = 0;
     min = 0;
     sec = 0;
     count = 0;
    document.getElementById("hr").innerHTML="00"; 
    document.getElementById("min").innerHTML="00";  
    document.getElementById("sec").innerHTML="00"; 
    document.getElementById("start").disabled = false;
    pause.innerHTML = "Pause";
  
  

}
//MAIN FUMCTION : 
function StopWatch(){
    if(timer == true){
        count+=1;
        if(count == 100){
            sec+=1;
            count=0;
        }
        if(sec == 60){
            min+=1;
            sec =0 ;
        }
        if(min ==60){
            hr+=1
            min= 0;
            sec=0;
        }
        if(sec<10){
            document.getElementById("sec").innerHTML="0"+sec;
        }else{
            document.getElementById("sec").innerHTML=sec;
        }

        if(min<10){
            document.getElementById("min").innerHTML="0"+min;
        }else{
            document.getElementById("min").innerHTML=min;
        }
        if(hr<10){
            document.getElementById("hr").innerHTML="0"+hr;
        }else{
            document.getElementById("hr").innerHTML=hr;
        }
       
        
        setTimeout("StopWatch()",10);
    }
}