const textContainer = document.getElementById("text-container");
const sigContainer = document.getElementById("sig-container");

const clickMeBtn = document.getElementById("click-me");

clickMeBtn.addEventListener("click", () => {
    
    removeAllChildNodes(textContainer);
    removeAllChildNodes(sigContainer);
    const heart = document.getElementById("heart");
    heart.style.visibility = "hidden";

    setTimeout(addHappy, 300);
    setTimeout(addMothers, 1000);
    setTimeout(addDay, 1500);
    setTimeout(addHeart, 2000);
    setTimeout(addLove, 4800);
    setTimeout(addTiia, 5200);
    
});

function addHappy(){
    const happy = document.createElement("div");
    happy.classList.add("happy");
    happy.innerHTML = "HAPPY";
    textContainer.appendChild(happy);
};

function addMothers() {
    const mothers = document.createElement("div");
    mothers.classList.add("mothers");
    mothers.innerHTML = "MOTHER'S";
    textContainer.appendChild(mothers);
};

function addDay() {
    const day = document.createElement("div");
    day.classList.add("day");
    day.innerHTML = "DAY!";
    textContainer.appendChild(day);
};

function addHeart(){
    const heart = document.getElementById("heart");
    heart.style.visibility = "visible";
};

function addLove(){
  
    const love = document.createElement("span");
    love.classList.add("love");
    love.innerHTML = "Love, ";
    sigContainer.appendChild(love);
    const tiia = document.createElement("span");
    tiia.id = "tiia";
    tiia.classList.add("tiia");
    tiia.innerHTML = "Tiia";
    sigContainer.appendChild(tiia);
};

function addTiia(){
    const tiia = document.getElementById("tiia");
    tiia.style.visibility = "visible";
};


function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
};
