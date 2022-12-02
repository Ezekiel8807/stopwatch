var t = "";
var s = "";

var timeValue = document.querySelector("#milli_seconds");
var seconds = document.querySelector("#seconds");

const stopWatch = () => {
    var mili = parseInt(timeValue.innerHTML);

    if( timeValue.innerHTML == 999 ) {
        timeValue.innerHTML = "000";

    }else {

        if ( mili < 10 ) {
            timeValue.innerHTML = "00" + ++mili;

        }else if ( mili < 100){
            timeValue.innerHTML = "0" + ++mili;

        }else {
            timeValue.innerHTML = ++mili;
        }
        
    }
}

//function to start seconds counting
const startSeconds = () => {
    var sec = parseInt(seconds.innerHTML);

    if( sec == 60){
        seconds.innerHTML = "00";

    }else {

        if( sec < 10 ){
            seconds.innerHTML = "0" + ++sec;

        }else {
            seconds.innerHTML = ++sec;
        }
    }
}



const start = document.querySelector("#start_button").addEventListener("click", ()=> {
    t = setInterval(stopWatch, 60);
    s = setInterval(startSeconds, 1000);
})


const reset = document.querySelector("#reset_button").addEventListener("click", ()=> {
    timeValue.innerHTML = "000";

})


const stop = document.querySelector("#stop_button").addEventListener("click", ()=> {
    clearInterval(t);
})

