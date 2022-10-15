
document.getElementById("day").innerHTML = 0;
const oldDate = new Date('2021/10/03');
const newDate = new Date();

var gap = newDate-oldDate;
var days = Math.ceil(gap/(1000*60*60*24));

const counters = document.getElementById("day");
const speed = 200;

const updateCount = () => {
    const target = days;
    const count = +counters.innerText;
    const increment = 1;
    if (count<target * 0.95){
        counters.innerText = count+increment;
        setTimeout(updateCount, 1);
    }
    else if (count<target*0.97){
        counters.innerText = count+increment;
        setTimeout(updateCount, 50);
    }
    else if (count < target-4){
        counters.innerText = count+increment;
        setTimeout(updateCount, 100);
    }
    else if (count < target-2){
        counters.innerText = count+increment;
        setTimeout(updateCount, 400);
    }
    else if (count < target){
        counters.innerText = count+increment;
        setTimeout(updateCount, 700);
    }
    else{
        counters.innerText = target;
    }
}

updateCount();

var heartO = document.getElementById("heart1");
var heartT = document.getElementById("heart2");

heartO.style.height = "30px";

