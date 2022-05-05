const baseURL = 'https://thatcopy.pw/catapi/rest/';
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

    return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

function changeColor (color) {
    let colors = new Array(4);
    switch (color) {
        case 1:
            colors = ["#1A5276", "#f0f8ff"];
            break;
        case 2:
            colors = ["#7215db", "#f0f8ff"];
            break;
        case 3:
            colors = ["#196F3D", "#f0f8ff"];
            break;
        case 4:
            colors = ["#B03A2E", "#f0f8ff"];
            break;
        case 5:
            colors = ["#141414", "#f0f8ff"];
            break;
        case 6:
            colors = ["#f0f8ff", "#141414"];
            break;
        default:
            colors = ["#141414", "#f0f8ff"];
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
