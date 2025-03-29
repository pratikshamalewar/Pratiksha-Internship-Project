let screen=document.getElementById("display");

let counterValue=0;

//by default output should be 0;
screen.textContent=0;

//increase value by +1 in current value
function increment(){
    counterValue++; //+1
    screen.textContent=counterValue;
}

//decrease value by -1 in current value \
function decrement(){
    if(counterValue>0){
        counterValue--;
    }
    screen.textContent=counterValue;
}

//reset value on 0 value 
function reset(){
    counterValue=0;
    screen.textContent=counterValue;
}
