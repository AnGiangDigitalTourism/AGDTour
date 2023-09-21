
function zoomInCard(n) {
    let cards = document.getElementsByClassName('card');
    let images = document.getElementsByClassName('card-image');
    let title = document.getElementsByClassName('card-title');
    let caption = document.getElementsByClassName('card-caption');
    cards[n].style.height = "120px";
    images[n].style.height = "120px";
    title[n].style.fontSize = "22px";
    caption[n].style.fontSize = "17px";
}

function zoomOutCard(n) {
    let cards = document.getElementsByClassName('card');
    let images = document.getElementsByClassName('card-image');
    let title = document.getElementsByClassName('card-title');
    let caption = document.getElementsByClassName('card-caption');
    cards[n].style.height = "100px";
    images[n].style.height = "100px";
    title[n].style.fontSize = "20px";
    caption[n].style.fontSize = "15px";
}

function moveTo(code) {
    window.location.href += '/'+code;
}


// function zoomInCard2(n) {
//     let cards = document.getElementsByClassName('card');
//     let images = document.getElementsByClassName('card-image');
//     let title = document.getElementsByClassName('card-title');
//     cards[n].style.width = "220px";
//     images[n].style.width = "220px";
//     title[n].style.fontSize = "17px";
// }


// function zoomOutCard2(n) {
//     let cards = document.getElementsByClassName('card');
//     let images = document.getElementsByClassName('card-image');
//     let title = document.getElementsByClassName('card-title');
//     cards[n].style.width = "200px";
//     images[n].style.width = "200px";
//     title[n].style.fontSize = "15px";
// }


function toggleAsideInfo() {
    let currentDisplay = document.getElementsByClassName('aside-info')[0].style.display;
    if (currentDisplay == 'none') currentDisplay = 'block';
    else currentDisplay = 'none';
    document.getElementsByClassName('aside-info')[0].style.display = currentDisplay;
}