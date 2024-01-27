let a = 0;
let timer;
let result;
function start() {
    let sec = 0;
    timer = setInterval(() => {
        document.getElementById("timer").innerText = sec;
        sec++;
        if (sec == 10) {
            clearInterval(timer);
            document.getElementById("timer").innerText = 0;
            result = a/sec;
            document.getElementById("result").innerText ="Your Click per second is  " +result+" per second";
            sec = 0;
            a = 0 ;
        }
    }, 1000)

}
function increment() {
    a++;
    document.getElementById("turzo").innerText = a;
}