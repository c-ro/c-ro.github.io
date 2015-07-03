var moles = [],
    size = 8;
    pieces = size * size,
    counter = 0
    totalMoles = 0,
    score = 0,
    hole = "slug.png",
    mole = "bush.jpg",
    images = ['trump.png','rubio.png','perry.png','paul.png','pataki.png','jindal.png','huckabee.png','graham.png','fiorina.png','cruz.png','christie.png','carson.png','bush.png'];

var pW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var pH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var createMole = function(){
    var mole = document.createElement("img");
    mole.src = hole;
    mole.id = counter;
    mole.width = 80;
    mole.height = 80;
    mole.vis = false;
    moles.push([mole.id, mole.vis]);
    // mole.onmouseup = function(){hide(mole.id)};
    // mole.onmouseout = function(){hide(mole.id)};
    mole.onclick = function(){whack(mole)};
    
    if(pW >= 400){
        document.getElementById('container').style.width = size * 85;
    } else {
        document.getElementById('container').style.width = (pW);
        document.getElementById('container').style.height = (pH * 0.90);
        pieces = Math.floor(pW/85) * Math.floor(pH/85);
    };

    document.getElementById('main').appendChild(mole);
}

for(i = 0; i < Math.floor(pieces); i++){
    createMole();
    counter++;
}

console.log(pieces);

function randomHead(){
    return images[Math.floor(Math.random() * images.length)];
}

function red(img){ 
    var filename = img.src.search(/[^\/]*$/);
    filename = img.src.slice(filename);
    document.getElementById(img.id).setAttribute("src", "hit" + filename);
}

function smack() {
    var smk = new Audio("whack.mp3");
    smk.play();
}

function hide(img){
    var img = img.id || img;
    moles[img][1] = false;
    document.getElementById(img).setAttribute("src", hole);
}

function show(img){
    totalMoles++;
    moles[img][1] = true;
    document.getElementById('scoreboard').innerHTML = totalMoles + "/" + score;
    var change = document.getElementById(img);
    var piece = randomHead();
    change.setAttribute("src", piece);
    setTimeout(function(){hide(img)}, Math.random() * (7000 - 1000) + 1000);
}

function whack(img){
    if (moles[img.id][1]){
        red(img);
        smack();
        moles[img.id][1] = false;
        score++;
        setTimeout(function(){hide(img.id)},125);
        document.getElementById('scoreboard').innerHTML = totalMoles + "/" + score;
    }

}

//return random even or odd number based on request
function random(type){
    num = Math.floor(Math.random() * pieces);
    return type === "even" && num % 2 === 0 ? num : num + 1;
}

/// Start the game and set speeds
window.setInterval(function(){show(moles[random("odd")][0])}, (1000 - 500) + 500);
window.setInterval(function(){show(moles[random("even")][0])}, (1250 - 750) + 750);