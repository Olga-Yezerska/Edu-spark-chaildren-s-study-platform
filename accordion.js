let box = document.getElementById("accordion");
let titles = document.querySelectorAll(".course h2"); //назви курсів зі сторінки

let descriptions = [
    "Solve puzzles and mysteries, find patterns and train logical thinking.",
    "Numbers, addition and geometry through games and timed challenges.",
    "Simple experiments about light, magnets and everything around us.",
    "Travel across continents and oceans and meet different cultures.",
    "Learn where animals live, what they eat and what they can do.",
    "Learn to save water, sort waste and take care of the planet.",
    "First steps in programming: algorithms and robot instructions.",
    "Money basics: needs and wants, budget and saving for a dream.",
    "Read stories, put events in order and invent new endings.",
    "Colors, shapes and imagination: create your own characters and worlds."
];

//кнопкf-заголовок і блок з описом
for (let i = 0; i < titles.length; i++) {
    let button = document.createElement("button");
    button.className = "acc-title";
    button.textContent = titles[i].textContent;
    button.setAttribute("type", "button");             

    let text = document.createElement("div");
    text.className = "acc-text";
    text.textContent = descriptions[i];
    text.style.display = "none";                        

    box.appendChild(button);
    box.appendChild(text);

    button.onclick = function () {
        if (text.style.display === "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    };
}

//приховування всіх
function closeAll() {
    let texts = document.getElementsByClassName("acc-text");
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = "none";
    }
}

//розгортання всіх
function openAll() {
    let texts = document.getElementsByTagName("div");          
    for (let i = 0; i < texts.length; i++) {
        if (texts[i].className === "acc-text") {
            texts[i].style.display = "block";
        }
    }
}