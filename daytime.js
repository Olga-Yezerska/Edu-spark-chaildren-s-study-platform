let hour = new Date().getHours(); //поточна година

if (hour >= 6 && hour < 21) {
    let style = document.createElement("style");              
    style.textContent = "* { background: rgb(254, 251, 233); }";
    document.head.appendChild(style);                         
}