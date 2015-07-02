var moles = [],
    size = 8;
    counter = 0,
    totalMoles = 0,
    score = 0,
    hole = "http://i.imgur.com/gJ6MKsG.png",
    mole = "http://i.imgur.com/bdg42Sc.png",
    hitmole = "http://i.imgur.com/SaENQoX.png";

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

document.write("width: " + w + "\n");
document.write("height: " + h);

var createMole = function(){
    var mole = document.createElement("img");
    mole.src = hole;
    mole.id = counter;
    mole.width = 80;
    mole.height = 80;
    mole.vis = false;
    moles.push([mole.id, mole.vis]);
    mole.onmouseup = function(){hide(mole.id)};
    mole.onmousedown = function(){whack(mole)};

    document.getElementById('main').style.width = size * 80;
    document.getElementById('main').appendChild(mole);
}

for(i = 0; i < size * size; i++){
    createMole();
    counter++;
}

function red(img){
    document.getElementById(img).setAttribute("src", hitmole);
};

function smack() {
    var smk = new Audio("whack.mp3");
    smk.play();
}

function hide(img){
    var img = img.id || img;
    moles[img][1] = false;
    document.getElementById(img).setAttribute("src", "http://i.imgur.com/gJ6MKsG.png");
}

function show(img){
    totalMoles++;
    moles[img][1] = true;
    document.getElementById('scoreboard').innerHTML = totalMoles + "/" + score;
    var change = document.getElementById(img);
    change.setAttribute("src", mole);
    setTimeout(function(){hide(img)}, Math.random() * (7000 - 1000) + 1000);
}

function whack(img){
    if (moles[img.id][1]){
        smack();
        moles[img.id][1] = false;
        score++;
        red(img.id);
        document.getElementById('scoreboard').innerHTML = totalMoles + "/" + score;
    }

}
window.setInterval(function(){show(moles[Math.floor(Math.random() * (size * size - 1))][0])}, (750 - 500) + 500);
// window.setInterval(function(){show(moles[Math.floor(Math.random() * 8)][0])}, (1000 - 500) + 500);
