let cards = document.querySelectorAll("#authors article");

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let figure = card.querySelector("figure");     
    let photo = card.querySelector("img");        
    let quote = card.querySelector("figcaption");  

    figure.style.transition = "transform 0.3s";
    quote.style.display = "none";                 

    function flip(showQuote) {
        figure.style.transform = "rotateY(90deg)";
        setTimeout(function () {
            if (showQuote) {
                photo.style.display = "none";
                quote.style.display = "block";
            } else {
                photo.style.display = "block";
                quote.style.display = "none";
            }
            figure.style.transform = "rotateY(0deg)";
        }, 300);
    }

    card.addEventListener("mouseenter", function () {
        flip(true);
    });
    card.addEventListener("mouseleave", function () {
        flip(false);
    });
}