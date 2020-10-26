const setTime = 15;
let seconds = setTime;
let time = document.createElement("h2");
setInterval(function () { getCountdown(); }, 1000);
function getCountdown(){
    time.innerHTML = "( " + seconds + " seconds left)";
    document.body.append(time);  
    if(seconds<=0) {
        document.body.innerHTML = '';
        seconds = setTime;
        game(1);
    }
    seconds--;
}

function game(level) {

    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let count = Math.pow(level + 1,2);

    let h1 = document.createElement("h1");
    h1.innerHTML = "Round " + level;
    document.body.append(h1);



    function divColored(r_, g_, b_, size, status) {
        let div = document.createElement("div");
        div.style.backgroundColor = "rgb(" + r_ + "," + g_ + "," + b_ + ")";
        div.style.height = size;
        div.style.width = size;
        div.style.margin = "0.25vw";
        if(status=="imposter") {
            div.onclick = function() {
                document.body.innerHTML = '';
                seconds = setTime;
                game(level+1);
            }
        } else {
            div.onclick = function() {
                document.body.innerHTML = '';
                seconds = setTime;
                game(1);
            }
        }
        return div;
    }

    let imposter = Math.floor(Math.random() * count);
    let wrapper = document.createElement("div");
    for (let i = 0; i < count; i++) {
        let size = (40 / (level + 1)-0.5) + "vw";
        if (i == imposter) {
            if (level < 7) {
                wrapper.append(divColored(r + 64 - (level*8), g + 64 - (level*8), b + 64 - (level*8), size, "imposter"));
            } else {
                wrapper.append(divColored(r + 20, g + 20, b + 20, size, "imposter"));
            }
        } else {
            wrapper.append(divColored(r, g, b, size, "crew"));
        }
    }
    wrapper.className="wrapper";
    document.body.append(wrapper);

}



game(1);