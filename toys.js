let toys = ["🧸", "🧩", "🪀", "⚽", "🪁", "🚂", "🎲"]; //типи іграшок
let header = document.getElementsByTagName("header")[0];       

function dropToy() {
    let toy = document.createElement("span");                          
    toy.className = "toy";                                            
    toy.textContent = toys[Math.floor(Math.random() * toys.length)];   
    toy.style.left = Math.random() * 90 + "%";                         

    let top = -70;                        
    toy.style.top = top + "px";
    header.appendChild(toy);              

    //кожні 30 мс опускається іграшка на 2 пікселі
    let timer = setInterval(function () {
        top = top + 2;
        toy.style.top = top + "px";
        if (top > header.offsetHeight) {  
            clearInterval(timer);         
            header.removeChild(toy);      
        }
    }, 30);
}

setInterval(dropToy, 1200);   //нова іграшка кожні 1,2 секунди