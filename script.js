/* ==========================================
   BEST FRIEND WEBSITE V2
   PART 1 - CORE ENGINE
========================================== */

// ==========================================
// PAGE REFERENCES
// ==========================================

const pages = document.querySelectorAll(".page");

const landing = document.getElementById("landing");
const giftRoom = document.getElementById("giftRoom");
const museum = document.getElementById("museum");
const arcade = document.getElementById("arcade");
const wheelPage = document.getElementById("wheelPage");
const giftPage = document.getElementById("giftPage");
const quizPage = document.getElementById("quizPage");
const achievementPage = document.getElementById("achievementPage");
const letterPage = document.getElementById("letterPage");
const endingPage = document.getElementById("endingPage");

// ==========================================
// AUDIO
// ==========================================

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    playClick();

    if (bgMusic.paused) {

        bgMusic.volume = 0.45;
        bgMusic.play();
        musicBtn.innerHTML = "🔇";

    } else {

        bgMusic.pause();
        musicBtn.innerHTML = "🎵";

    }

});

const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");

let musicPlaying = false;

// ==========================================
// TYPEWRITER
// ==========================================

const typingText =

"Welcome to a tiny adventure built specially for my favourite chaos partner ❤️";

const typing = document.getElementById("typing");

let typeIndex = 0;

function typeWriter(){

    if(typeIndex >= typingText.length) return;

    typing.innerHTML += typingText.charAt(typeIndex);

    typeIndex++;

    setTimeout(typeWriter,40);

}

typeWriter();

// ==========================================
// PAGE SWITCHER
// ==========================================

function showPage(page){

    pages.forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

    window.scrollTo(0,0);

}

// ==========================================
// BUTTON SOUND
// ==========================================

function playClick(){

    clickSound.currentTime=0;

    clickSound.play();

}

// ==========================================
// MUSIC BUTTON
// ==========================================

musicBtn.onclick=()=>{

    playClick();

    if(!musicPlaying){

        bgMusic.volume=.45;

        bgMusic.play().catch(()=>{});

        musicBtn.innerHTML="🔇";

        musicPlaying=true;

    }

    else{

        bgMusic.pause();

        musicBtn.innerHTML="🎵";

        musicPlaying=false;

    }

};

// ==========================================
// START BUTTON
// ==========================================

document.getElementById("startBtn").onclick = () => {

    playClick();

    if (bgMusic.paused) {
        bgMusic.volume = 0.45;
        bgMusic.play().catch(() => {});
        musicBtn.innerHTML = "🔇";
    }

    showPage(giftRoom);

};

// ==========================================
// POPUP
// ==========================================

const popup=document.getElementById("popup");

const popupTitle=document.getElementById("popupTitle");

const popupImage=document.getElementById("popupImage");

const popupText=document.getElementById("popupText");

const closePopup=document.getElementById("closePopup");

function showPopup(title,text,image=""){

    popup.classList.add("show");

    popupTitle.innerHTML=title;

    popupText.innerHTML=text;

    if(image!=""){

        popupImage.src=image;

        popupImage.style.display="block";

    }

    else{

        popupImage.style.display="none";

    }

}

closePopup.onclick=()=>{

    popup.classList.remove("show");

};

// ==========================================
// PARTICLES
// ==========================================

const particles=document.getElementById("particles");

for(let i=0;i<150;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    particles.appendChild(star);

}

// ==========================================
// PROGRESS VARIABLES
// ==========================================

let giftsOpened=0;

let memesViewed=0;

let gamesCompleted=0;

let quizScore=0;

// ==========================================
// ACHIEVEMENTS
// ==========================================

const achievements={

wheel:false,

gift:false,

quiz:false,

friend:false

};

// ==========================================
// HELPER
// ==========================================

function unlockBadge(id){

    document.getElementById(id).classList.add("unlocked");

}

function finishGame(card){

    if(card.classList.contains("done")) return;

    card.classList.add("done");

    gamesCompleted++;

    document.getElementById("arcadeProgress").innerHTML=

    gamesCompleted+" / 3 Games Completed";

    if(gamesCompleted==3){

        document.getElementById("achievementBtn").style.display="inline-block";

        achievements.friend=true;

        unlockBadge("badgeFriend");

    }

}

// ==========================================
// RANDOM HELPER
// ==========================================

function random(min,max){

    return Math.floor(Math.random()*(max-min+1))+min;

}

console.log("✅ Core Engine Loaded");

/* ==========================================
        PART 2
        GIFT ROOM
========================================== */

const gifts=[

{
title:"🏆 Achievement Unlocked",
text:"You've unlocked Best Friend Premium™. Unlimited annoying rights granted forever.",
image:"images/meme1.jpg"
},

{
title:"😂 Daily Braincell",
text:"Scientists confirmed we collectively own one braincell... and it's currently buffering.",
image:"images/meme2.jpg"
},

{
title:"🍕 Friendship Coupon",
text:"Redeem this coupon for one free snack. Valid forever.",
image:"images/meme3.jpg"
},

{
title:"📱 Average Chat",
text:"95% memes, 4% random nonsense, 1% actual conversation.",
image:"images/meme4.jpg"
},

{
title:"👀 Certified Chaos",
text:"If our chats ever leaked, we'd probably end up on the news.",
image:"images/meme5.jpg"
},

{
title:"❤️ Final Gift",
text:"Thanks for making life way more fun. Here's to many more dumb memories.",
image:"images/meme6.jpg"
}

];

const giftBoxes=document.querySelectorAll(".gift");

giftBoxes.forEach(box=>{

box.onclick=()=>{

playClick();

if(box.classList.contains("opened")) return;

box.classList.add("opened");

box.innerHTML="🎉";

successSound.play();

const item=gifts[box.dataset.id];

showPopup(

item.title,

item.text,

item.image

);

createConfetti();

giftsOpened++;

document.getElementById("giftProgress").innerHTML=

giftsOpened+" / 6 Gifts Opened";

if(giftsOpened===6){

document.getElementById("museumUnlock").style.display="inline-block";

}

};

});

document.getElementById("museumUnlock").onclick=()=>{

playClick();

showPage(museum);

};

/* ==========================================
      CONFETTI
========================================== */

function createConfetti(){

for(let i=0;i<120;i++){

const conf=document.createElement("div");

conf.style.position="fixed";

conf.style.width="8px";

conf.style.height="8px";

conf.style.borderRadius="50%";

conf.style.background=

`hsl(${Math.random()*360},100%,50%)`;

conf.style.left=Math.random()*100+"vw";

conf.style.top="-20px";

conf.style.zIndex=9999;

conf.style.transition="3s linear";

document.body.appendChild(conf);

setTimeout(()=>{

conf.style.top="110vh";

conf.style.left=Math.random()*100+"vw";

conf.style.transform=

`rotate(${Math.random()*720}deg)`;

},50);

setTimeout(()=>{

conf.remove();

},3000);

}

}

console.log("🎁 Gift Room Loaded");

/* ==========================================
        PART 3
        MEME MUSEUM + ARCADE
========================================== */

const captions = [

"Average day with us 😂",

"Our combined IQ when together 📉",

"When one meme turns into 3 hours of laughing 🤣",

"POV: We said 'one game' 💀",

"Chaos level: Maximum ☠️",

"Friendship certified ❤️"

];

const frames = document.querySelectorAll(".frame");

frames.forEach((frame,index)=>{

    frame.onclick=()=>{

        playClick();

        if(!frame.classList.contains("seen")){

            frame.classList.add("seen");

            memesViewed++;

            frame.style.transform="scale(.95)";

            setTimeout(()=>{

                frame.style.transform="";

            },200);

        }

        showPopup(

            frame.querySelector("h3").innerHTML,

            captions[index],

            frame.querySelector("img").src

        );

        if(memesViewed===6){

            document.getElementById("arcadeUnlock").style.display="inline-block";

        }

    };

});

/* ==========================================
      ENTER ARCADE
========================================== */

document.getElementById("arcadeUnlock").onclick=()=>{

    playClick();

    showPage(arcade);

};

/* ==========================================
      ARCADE BUTTONS
========================================== */

const wheelGame=document.getElementById("wheelGame");

const giftGame=document.getElementById("giftGame");

const quizGame=document.getElementById("quizGame");

wheelGame.onclick=()=>{

    playClick();

    showPage(wheelPage);

};




/* ==========================================
      BACK BUTTONS
========================================== */

document.getElementById("wheelBack").onclick=()=>{

    playClick();

    showPage(arcade);

};

document.getElementById("giftBack").onclick=()=>{

    playClick();

    showPage(arcade);

};

document.getElementById("quizBack").onclick=()=>{

    playClick();

    showPage(arcade);

};

/* ==========================================
      ACHIEVEMENT PAGE
========================================== */

document.getElementById("achievementBtn").onclick=()=>{

    playClick();

    unlockBadge("badgeWheel");

    if(achievements.gift){

        unlockBadge("badgeGift");

    }

    if(achievements.quiz){

        unlockBadge("badgeQuiz");

    }

    if(achievements.friend){

        unlockBadge("badgeFriend");

    }

    document.getElementById("letterBtn").style.display="inline-block";

    showPage(achievementPage);

};



console.log("🖼️ Museum + Arcade Loaded");

/* ==========================================
        PART 4A
        SPIN THE WHEEL
========================================== */

const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");

const prizes = [
    "🍕 Free Snack",
    "😂 Meme King",
    "👑 Best Friend",
    "🎮 Gaming Night",
    "🍫 Chocolate",
    "⭐ Lucky Day",
    "🎁 Surprise",
    "❤️ Infinite Friendship"
];

const colors = [
    "#ff7675",
    "#74b9ff",
    "#55efc4",
    "#ffeaa7",
    "#a29bfe",
    "#fd79a8",
    "#81ecec",
    "#fab1a0"
];

const slice = (Math.PI * 2) / prizes.length;

let wheelRotation = 0;
let spinning = false;

/* ---------------- DRAW WHEEL ---------------- */

function drawWheel() {

    ctx.clearRect(0, 0, 500, 500);

    for (let i = 0; i < prizes.length; i++) {

        const start = i * slice + wheelRotation;
        const end = start + slice;

        ctx.beginPath();
        ctx.moveTo(250,250);
        ctx.arc(250,250,230,start,end);
        ctx.closePath();

        ctx.fillStyle = colors[i];
        ctx.fill();

        ctx.save();

        ctx.translate(250,250);
        ctx.rotate(start + slice/2);

        ctx.textAlign="right";
        ctx.fillStyle="white";
        ctx.font="bold 18px Poppins";

        ctx.fillText(prizes[i],205,8);

        ctx.restore();

    }

    ctx.beginPath();
    ctx.arc(250,250,55,0,Math.PI*2);
    ctx.fillStyle="#ffffff";
    ctx.fill();

}

drawWheel();

/* ---------------- SPIN ---------------- */

document.getElementById("spinBtn").onclick = () => {

    if(spinning) return;

    playClick();

    spinning = true;


    let speed = Math.random()*0.28 + 0.45;

    function animate(){

        wheelRotation += speed;

        speed *= 0.985;

        drawWheel();

        if(speed > 0.003){

            requestAnimationFrame(animate);

        }else{

            spinning = false;

           // Pointer is at the TOP (-90°)
            const pointerAngle = -Math.PI / 2;

// Find which slice is under the pointer
            let index = Math.floor(
            ((pointerAngle - wheelRotation + Math.PI * 2) % (Math.PI * 2)) / slice
            );

            index = (index + prizes.length) % prizes.length;

            successSound.play();

            createConfetti();

            showPopup(
                "🎉 Wheel Result!",
                    "You won:<br><br><h2>" + prizes[index] + "</h2>",
                    ""
            );

            achievements.wheel = true;
            unlockBadge("badgeWheel");

            finishGame(document.getElementById("wheelGame"));

            document.getElementById("wheelBack").style.display = "inline-block";

        }

    }

    animate();

};

/* ==========================================
        PART 4B
        CATCH THE GIFT
========================================== */

const arena = document.getElementById("giftArena");
const movingGift = document.getElementById("movingGift");
const giftStatus = document.getElementById("giftStatus");

let giftCaught = false;

let gameStartTime = 0;
let giftSize = 70;

// Initial Position
moveGift();

/* ---------------- MOVE GIFT ---------------- */

function moveGift(){

    if(giftCaught) return;

    const elapsed = (Date.now() - gameStartTime) / 1000;

    // Gift grows every second
    giftSize = Math.min(140, 70 + elapsed * 5);

    movingGift.style.width = giftSize + "px";
    movingGift.style.height = giftSize + "px";
    movingGift.style.lineHeight = giftSize + "px";
    movingGift.style.fontSize = (giftSize * 0.7) + "px";

    // After 15 seconds it stops running
    if(elapsed >= 15){
        return;
    }

    const maxX = arena.clientWidth - giftSize;
    const maxY = arena.clientHeight - giftSize;

    movingGift.style.left =
        Math.random() * maxX + "px";

    movingGift.style.top =
        Math.random() * maxY + "px";

}

/* ---------------- RUN AWAY ---------------- */

arena.addEventListener("mousemove",(e)=>{

    if(giftCaught) return;

    const elapsed = (Date.now()-gameStartTime)/1000;

    if(elapsed >= 15) return;

    const rect = arena.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const giftX = movingGift.offsetLeft + giftSize/2;
    const giftY = movingGift.offsetTop + giftSize/2;

    const distance = Math.hypot(mouseX-giftX,mouseY-giftY);

    // Gets lazier over time
    const runDistance = Math.max(40,120-elapsed*5);

    if(distance < runDistance){

        moveGift();

    }

});

/* ---------------- CATCH ---------------- */

movingGift.onclick=()=>{

    if(giftCaught) return;

    playClick();

    giftCaught = true;

    movingGift.innerHTML="🎉";

    movingGift.style.transform="scale(1.4)";

    giftStatus.innerHTML="🎉 You caught it!";

    successSound.play();

    createConfetti();

    achievements.gift = true;

    unlockBadge("badgeGift");

    finishGame(document.getElementById("giftGame"));

    document.getElementById("giftBack").style.display="inline-block";

};

/* ---------------- RESET WHEN PAGE OPENS ---------------- */

giftGame.onclick=()=>{

    playClick();

    giftCaught = false;
    gameStartTime = Date.now();
    giftSize = 70;

    movingGift.style.width = giftSize + "px";
    movingGift.style.height = giftSize + "px";
    movingGift.style.fontSize = "50px";

    giftStatus.innerHTML="";

    movingGift.innerHTML="🎁";

    movingGift.style.transform="scale(1)";

    document.getElementById("giftBack").style.display="none";

    moveGift();

    showPage(giftPage);

};

console.log("🎁 Catch The Gift Loaded");

/* ==========================================
        PART 4C
        FRIENDSHIP QUIZ
========================================== */
const quizQuestions = [

{
question:"Who's the bigger yapper? 😂",
answers:["Me","You","Both","Depends on the day"],
correct:3
},

{
question:"Our chats usually end at...",
answers:[
"9 PM",
"11 PM",
"3 AM",
"We never stop talking"
],
correct:2
},

{
question:"What's our friendship mostly made of?",
answers:[
"Homework",
"Memes",
"Late-night talks",
"Awkward silence"
],
correct:2
},

{
question:"What's the first thing we usually send each other?",
answers:[
"Good morning",
"A random reel/meme",
"Homework",
"Nothing"
],
correct:1
},

{
question:"How long does 'just 5 more minutes' of chatting actually last?",
answers:[
"5 minutes",
"20 minutes",
"2 hours",
"Till someone falls asleep"
],
correct:3
},

{
question:"Our chats are usually...",
answers:[
"Very serious",
"Random nonsense",
"Life updates",
"A mix of everything"
],
correct:3
},

{
question:"What's the biggest enemy of our late-night conversations?",
answers:[
"Sleep",
"Battery 1%",
"Parents saying 'Go to bed'",
"All of the above"
],
correct:3
},

{
question:"Who's usually the sleepier one at 3 AM?",
answers:[
"Me",
"You",
"Both equally",
"No one 😂"
],
correct:2
},

{
question:"What's priceless?",
answers:[
"Money",
"Our friendship",
"Sleep schedule",
"Wi-Fi"
],
correct:1
},

{
question:"Final Question ❤️",
answers:[
"This website is awesome",
"You're awesome",
"Both",
"None"
],
correct:2
}

];

let currentQuestion = 0;
quizScore = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const score = document.getElementById("quizScore");

/* ---------------- LOAD QUESTION ---------------- */

function loadQuestion(){

    if(currentQuestion >= quizQuestions.length){

        finishQuiz();

        return;

    }

    const q = quizQuestions[currentQuestion];

    question.innerHTML =
    (currentQuestion+1)+". "+q.question;

    answers.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        const btn = document.createElement("div");

        btn.className = "answer";

        btn.innerHTML = answer;

        btn.onclick = ()=>{

            checkAnswer(index,btn);

        };

        answers.appendChild(btn);

    });

}

/* ---------------- CHECK ANSWER ---------------- */

function checkAnswer(choice,element){

    const correct =
    quizQuestions[currentQuestion].correct;

    document.querySelectorAll(".answer").forEach(a=>{

        a.style.pointerEvents="none";

    });

    if(choice===correct){

        element.classList.add("correct");

        quizScore++;

        successSound.play();

    }

    else{

        element.classList.add("wrong");

        document.querySelectorAll(".answer")[correct]
        .classList.add("correct");

    }

    score.innerHTML =
    "Score : "+quizScore+" / "+quizQuestions.length;

    setTimeout(()=>{

        currentQuestion++;

        loadQuestion();

    },1000);

}

/* ---------------- FINISH QUIZ ---------------- */

function finishQuiz(){

    question.innerHTML="🎉 Quiz Complete!";

    answers.innerHTML="";

    let message="";

    if(quizScore===10){

        message="🏆 PERFECT SCORE!";

    }

    else if(quizScore>=8){

        message="🌟 Amazing!";

    }

    else if(quizScore>=5){

        message="😄 Nice Job!";

    }

    else{

        message="😂 Better luck next time!";

    }

    const result=document.createElement("h2");

    result.innerHTML=

    message+
    "<br><br>"+
    quizScore+
    " / "+
    quizQuestions.length;

    answers.appendChild(result);

    achievements.quiz=true;

    unlockBadge("badgeQuiz");

    finishGame(document.getElementById("quizGame"));

    createConfetti();

    successSound.play();

    document.getElementById("quizBack").style.display="inline-block";

}

/* ---------------- START QUIZ ---------------- */

quizGame.onclick=()=>{

    playClick();

    currentQuestion=0;

    quizScore=0;

    score.innerHTML="Score : 0 / "+quizQuestions.length;

    document.getElementById("quizBack").style.display="none";

    loadQuestion();

    showPage(quizPage);

};

console.log("🧠 Friendship Quiz Loaded");

/* ==========================================
        PART 5
        LETTER + ENDING + RESTART
========================================== */

/* ---------------- SECRET LETTER ---------------- */

const finalLetter = `Hey Ganji Chudail ❤️,

If you've made it this far...

Congratulations 😂

You officially survived this entire adventure.

I know this website is full of memes, chaos and random games...

...which is honestly the perfect way to describe our friendship.

Thanks for always being there,
for making boring days funny,
and for being someone I can always count on.

Life's simply more fun with you around.

Here's to many more memes,
many more laughs,
many more games...

and hopefully many more years of friendship.

Stay awesome. ❤️`;

const letterText = document.getElementById("letterText");

let letterIndex = 0;

function typeLetter(){

    if(letterIndex >= finalLetter.length) return;

    letterText.innerHTML += finalLetter.charAt(letterIndex);

    letterIndex++;

    setTimeout(typeLetter,35);

}

document.getElementById("letterBtn").onclick=()=>{

    playClick();

    showPage(letterPage);

    letterText.innerHTML="";

    letterIndex=0;

    typeLetter();

};

/* ---------------- ENDING PAGE ---------------- */

document.getElementById("endingBtn").onclick=()=>{

    playClick();

    showPage(endingPage);

    createStars();

    startFireworks();

};

/* ---------------- STARS ---------------- */

function createStars(){

    const stars=document.getElementById("stars");

    stars.innerHTML="";

    for(let i=0;i<250;i++){

        const s=document.createElement("div");

        s.className="star2";

        s.style.left=Math.random()*100+"vw";

        s.style.top=Math.random()*100+"vh";

        s.style.animationDelay=Math.random()*3+"s";

        stars.appendChild(s);

    }

}

/* ---------------- FIREWORKS ---------------- */

const fireCanvas=document.getElementById("fireworks");
const fireCtx=fireCanvas.getContext("2d");

fireCanvas.width=window.innerWidth;
fireCanvas.height=window.innerHeight;

const fireParticles=[];

function launchFirework(){

    const x=Math.random()*fireCanvas.width;
    const y=Math.random()*fireCanvas.height*0.6+50;

    for(let i=0;i<70;i++){

        fireParticles.push({

            x:x,

            y:y,

            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,

            life:100,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animateFireworks(){

    fireCtx.clearRect(0,0,fireCanvas.width,fireCanvas.height);

    for(let i=fireParticles.length-1;i>=0;i--){

        const p=fireParticles[i];

        p.x+=p.dx;

        p.y+=p.dy;

        p.dy+=0.03;

        p.life--;

        fireCtx.beginPath();

        fireCtx.arc(p.x,p.y,3,0,Math.PI*2);

        fireCtx.fillStyle=p.color;

        fireCtx.fill();

        if(p.life<=0){

            fireParticles.splice(i,1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

let fireworkInterval;

function startFireworks(){

    fireParticles.length=0;

    animateFireworks();

    clearInterval(fireworkInterval);

    fireworkInterval=setInterval(()=>{
        launchFirework();
    },700);

}

/* ---------------- RESTART ---------------- */

document.getElementById("restartBtn").onclick=()=>{

    location.reload();

};

/* ---------------- RESIZE ---------------- */

window.addEventListener("resize",()=>{

    fireCanvas.width=window.innerWidth;
    fireCanvas.height=window.innerHeight;

});

console.log("🌌 Ending Loaded");

