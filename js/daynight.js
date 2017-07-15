sunrise = {"0":"0800","1":"0730","2":"0630","3":"0515","4":"0415","5":"0345","6":"0400","7":"0445","8":"0545","9":"0630","10":"0730","11":"0815"};
sunset  = {"0":"1630","1":"1715","2":"1815","3":"1900","4":"1945","5":"2030","6":"2030","7":"1930","8":"1830","9":"1715","10":"1615","11":"1600"};

function compareTime(sunrise,sunset) {
    currentTime = new Date();
    sunriseTime = new Date();
    sunsetTime  = new Date();

    var sr = sunrise[currentTime.getMonth()];
    var ss = sunset[currentTime.getMonth()];

    sunriseTime.setHours(sr.substr(0,2),sr.substr(2,2),0);
    sunsetTime.setHours(ss.substr(0,2),ss.substr(2,2),0);

    console.log("currentMonth: "+currentTime.getMonth());
    console.log("currentTime:  "+currentTime.getTime());
    console.log("sunrise:      "+sunriseTime.getTime());
    console.log("sunset:       "+sunsetTime.getTime());

    if (currentTime.getTime() >= sunriseTime.getTime()) {
        console.log("sun has risen ("+currentTime+" => "+sunrise[currentTime.getMonth()]+")");
        document.body.classList.remove("dark");
    }
    else if (currentTime.getTime() >= sunsetTime.getTime()) {
        console.log("sun has set ("+currentTime+" <= "+sunset[currentTime.getMonth()]+")");
        document.body.classList.add("dark");
    }
}
compareTime(sunrise,sunset);

window.onload=function() {
    document.getElementById('form').onsubmit=function() {
        goto = document.getElementById('goto').value;
        if (!goto.match(/^[a-zA-Z]+:\/\//)) {
            goto = 'http://' + goto;
        }
        window.location.replace(goto);
        return false;
    }
} 