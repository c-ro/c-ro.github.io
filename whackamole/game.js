var doc = document,
    moles = [],
    imgCounter = 0
    totalMoles = 0,
    score = 0,
    cache = [],
    display = doc.getElementById('display');
    main = doc.getElementById('main');
    images = ['trump','rubio','perry','paul','pataki','jindal','huckabee','graham','fiorina','cruz','christie','carson','bush'];

var pW = Math.max(doc.documentElement.clientWidth, window.innerWidth || 0);
var pH = Math.max(doc.documentElement.clientHeight, window.innerHeight || 0);

if (pW < pH){
    var viewWidth = pW * 0.95;
    var viewHeight = pH * 0.95;
} else {
    var viewHeight = pH * 0.55;
    var viewWidth = viewHeight * 1.33;
}
        doc.getElementById('container').style.width = viewWidth;
        doc.getElementById('container').style.height = viewHeight;
        doc.getElementById('display').style.width = viewWidth;
        doc.getElementById('display').style.height = viewHeight * 0.05;

var pieces = Math.floor(viewWidth/100) * Math.floor(viewHeight/100);


var createMole = function(){
    var mole = doc.createElement("div");
    mole.setAttribute('class', 'slug');
    mole.id = imgCounter;
    mole.width = 100;
    mole.height = 100;
    mole.vis = false;
    moles.push([mole.id, mole.vis]);
    whackFunc = whack;
    mole.onclick = function(){whackFunc(mole)};
    cache.push(mole);
    main.appendChild(mole);
}

for(i = 0; i < Math.floor(pieces); i++){
    createMole();
    imgCounter++;
}

function randomHead(){
    return images[Math.floor(Math.random() * images.length)];
}

function red(img){ 
    doc.getElementById(img.id).setAttribute("class", "hit" + img.className);
}

function smack() {
    var smk = new Audio("whack.mp3");
    smk.play();
}

function hide(img){
    var img = img.id || img;
    moles[img][1] = false;
    setTimeout(10);
    cache[img].setAttribute("class", "slug");
}

function show(img){
    totalMoles++;
    moles[img][1] = true;
    display.innerHTML = totalMoles + "/" + score;
    var piece = randomHead();
    cache[img].setAttribute("class", piece);
    setTimeout(function(){hide(img)}, Math.random() * (7000 - 1000) + 1000);
}

function whack(img){
    var smackFunc = smack;
    var redFunc = red;
    if (moles[img.id][1]){
        smackFunc();
        redFunc(img);   
        moles[img.id][1] = false;
        setTimeout(function(){hide(img.id)},50);
        display.innerHTML = totalMoles + "/" + score;
        score++;
    }
}

//return random even or odd number based on request
function random(){ 
    var num = Math.floor(Math.random() * pieces);
    return num;
}

/// Start the game and set speeds
window.setInterval(function(){
    var num = random();
    if(moles[num][1] === false){
        show(moles[num][0]);
    };
}, (1500 - 1000) + 1000);

window.setInterval(function(){
    var num = random();
    if(moles[num][1] === false){
        show(moles[num][0]);
    };
}, (1250 - 750) + 750);