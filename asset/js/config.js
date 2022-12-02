var t = "";

var miliseconds = document.querySelector("#milli_seconds");
var seconds = document.querySelector("#seconds");
var minutes = document.querySelector("#minutes");
var hours = document.querySelector("#hours");


const stopWatch = () => {

    var mili = parseInt(miliseconds.innerHTML);
    var sec = parseInt(seconds.innerHTML);
    var min = parseInt(minutes.innerHTML);
    var hrs = parseInt(hours.innerHTML);

    mili += 1;

    if( mili == 60 ) {
        mili = "00";
        sec++;

        if(sec == 60){
            sec = "00";
            min++;


            if( min == 60){
                min = "00";
                hrs++;
            }
        }
    }

    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let mi = mili < 10 ? "0" + mili : mili;

    miliseconds.innerHTML = mi;
    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
}


const start = document.querySelector("#start_button").addEventListener("click", ()=> {
    t = setInterval(stopWatch, 15);
})


const reset = document.querySelector("#reset_button").addEventListener("click", ()=> {
    clearInterval(t);

    miliseconds.innerHTML = "00"
    seconds.innerHTML = "00"
    minutes.innerHTML = "00"
    hours.innerHTML = "00"

})


const stop = document.querySelector("#stop_button").addEventListener("click", ()=> {
    clearInterval(t);
})

