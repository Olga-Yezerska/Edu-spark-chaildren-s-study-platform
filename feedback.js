let details = document.getElementById("details");

//підказка
let tip = document.createElement("span");
tip.textContent = "Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка";
tip.style.display = "none";
details.parentNode.insertBefore(tip, details.nextSibling);

//курсор наведено
details.onmouseover = function () {
    details.style.backgroundColor = "white";
    details.style.border = "2px solid rgb(45, 3, 75)";
    details.style.boxShadow = "0 0 10px rgb(45, 3, 75)";
    tip.style.display = "inline";
};6

//курсор відведено
details.onmouseout = function () {
    details.style.backgroundColor = "";
    details.style.border = "";
    details.style.boxShadow = "";
    tip.style.display = "none";
};