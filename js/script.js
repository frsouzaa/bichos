const baseURL = 'https://randomfox.ca/floof';
const catBtn = document.getElementById('change-cat');
const body = document.getElementById('body');
const h1 = document.getElementsByClassName('main-title')[0];
const color1 = document.getElementsByClassName('btn1')[0];
const color2 = document.getElementsByClassName('btn2')[0];
const color3 = document.getElementsByClassName('btn3')[0];
const color4 = document.getElementsByClassName('btn4')[0];
const color5 = document.getElementsByClassName('btn5')[0];
const color6 = document.getElementsByClassName('btn6')[0];

const getCats = async () => {
    const data = await fetch(baseURL)
        .then(res => res.json())
        .catch(e => console.log(e))

    return data.image;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

function changeColor (color) {
    let colors = new Array(4);
    switch (color) {
        case 1:
            colors = ["#64B7CC", "#FF3877"];
            break;
        case 2:
            colors = ["#5902EC", "#ffe4f4"];
            break;
        case 3:
            colors = ["#159052", "#D0E4AE"];
            break;
        case 4:
            colors = ["#C0322E", "#ECEECE"];
            break;
        case 5:
            colors = ["#141414", "#ffead1"];
            break;
        case 6:
            colors = ["#ffffe8ee", "#141414"];
            break;
        default:
            colors = ["#141414", "#ffead1"];
            break;                                   
    }
    
    body.style.backgroundColor = colors[0];
    catBtn.style.backgroundColor = colors[1];
    catBtn.style.color = colors[0];
    h1.style.color = colors[1];
}

catBtn.addEventListener('click', loadImg);
color1.addEventListener('click', () => changeColor(1));
color2.addEventListener('click', () => changeColor(2));
color3.addEventListener('click', () => changeColor(3));
color4.addEventListener('click', () => changeColor(4));
color5.addEventListener('click', () => changeColor(5));
color6.addEventListener('click', () => changeColor(6));

loadImg();
