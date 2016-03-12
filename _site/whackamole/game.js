var doc = document,
    moles = [],
    imgCounter = 0
    totalMoles = 0,
    score = 0,
    board = [],
    round = 1,
    display = doc.getElementById('display'),
    rating = doc.getElementById('rating'),
    main = doc.getElementById('main'),
    admin = doc.createElement('div'),
    images = ['trump','rubio','perry','paul','pataki','jindal','huckabee','graham','fiorina','cruz','christie','carson','bush'];

var pW = Math.max(doc.documentElement.clientWidth, window.innerWidth || 0);
var pH = Math.max(doc.documentElement.clientHeight, window.innerHeight || 0);

if (pW < pH){
    var viewWidth = pW * 0.95;
    var viewHeight = pH * 0.9;
} else {
    var viewHeight = pH * 0.55;
    var viewWidth = viewHeight * 1.33;
}

if (viewWidth < 330){
    viewWidth = 330;
}
        doc.getElementById('container').style.width = viewWidth;
        display.style.width = viewWidth;
        display.style.height = 40;
        document.body.style.fontSize = 0.025 * ((viewWidth + viewHeight)/2);

var pieces = Math.floor((viewWidth)/100) * Math.floor(viewHeight/100);

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
    board.push(mole);
    main.appendChild(mole);
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
    var img = img.id || img,
        approvalFunc = approval;
    rating.innerHTML = approvalFunc();
    moles[img][1] = false;
    setTimeout(10);
    board[img].setAttribute("class", "slug");
}

function show(img){
    totalMoles++;
    moles[img][1] = true;
    var piece = randomHead();
    board[img].setAttribute("class", piece);
    setTimeout(function(){hide(img)}, Math.random() * (7000 - 1000) + 1000);
}

///display current score by %
function approval(){
    return 100 - Math.floor(100 * score/totalMoles) + "%";
}

function whack(img){
    var smackFunc = smack;
    var redFunc = red;
    var approvalFunc = approval;
    if (moles[img.id][1]){
        smackFunc();
        redFunc(img);   
        moles[img.id][1] = false;
        setTimeout(function(){hide(img.id)},50);
        approvalFunc();
        score++;
    }
}

//return random even or odd number based on request
function random(){ 
    var num = Math.floor(Math.random() * pieces);
    return num;
}

function changeTicker(string){
        setTimeout(function(){doc.getElementById('ticker').innerHTML = string;}, 7000);
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var timerInt = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            clearInterval(timerInt);
        }

    }, 1000);
}

function game(duration){
var gameLength = duration; //DURATION IN SECONDS
display = document.querySelector('#time');
startTimer(gameLength, display);

/// Start the game and set speeds
var mole1 = setInterval(function(){
    var num = random();
    if(moles[num][1] === false){
        show(moles[num][0]);
    };
}, (1500 - 1000) + 1000);

/// Start second thread
var mole2 = setInterval(function(){
    var num = random();
    if(moles[num][1] === false){
        show(moles[num][0]);
    };
}, (1250 - 750) + 750);

// stop the game
setTimeout(function(){
    clearInterval(mole1);
    clearInterval(mole2);

    setTimeout(function(){init(round)},2000);
    round++;

}, gameLength * 1000);
};

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
    board.push(mole);
    main.appendChild(mole);
}

function startGame(){
    setTimeout(function(){game(60)},500); //SET GAME DURATION IN SECONDS
    admin.style.display = "none";
}

function init(round){

    for(i = 0; i < Math.floor(pieces); i++){
    createMole();
    imgCounter++;
    }

    // var admin = doc.createElement('div');
    admin.style.display = "";
    admin.id = "admin";
    admin.innerHTML = "Round: " + round;
    admin.style.fontSize = 0.075 * ((viewWidth + viewHeight)/2);
    container.insertBefore(admin,container.firstChild);

    var info = doc.createElement('p'),
        text = "Approval rating: ";

    approval() === "NaN%" ? text = text.concat("100%") : text = text.concat(approval());
    info.innerHTML = text;
    admin.appendChild(info);

    var button = doc.createElement('div');
    button.id = "button";
    button.innerHTML = "GO!";
    button.setAttribute("class", "btn");
    button.style.fontSize = 0.050 * ((viewWidth + viewHeight)/2);
    button.onclick = function(){
        startGame();
    }

    ///// TODO:
    ///// finish game flow through admin
    ///// game over screen
    ///// round-by-round plus overall approval stats
    ///// live stats or static tickers?
    ///// shit, do I really want to track stats for all moles?
    ///// 


    var restart = doc.createElement('div');
        restartid = "button";
        restart.innerHTML = "restart";
        restart.setAttribute("class", "btn");
        restart.style.fontSize = 0.050 * ((viewWidth + viewHeight)/2);
        restart.onclick = function(){
            round = 1;
            score = 0;
            totalMoles = 0;
            init(round);
        }

    round > 3 ? admin.appendChild(restart) : admin.appendChild(button);
}

console.log(board);

window.onload = init(round);


