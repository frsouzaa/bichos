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

const changeColor1 = async () => {
    body.style.backgroundColor = "#1A5276";
    catBtn.style.backgroundColor = "#f0f8ff";
    catBtn.style.color = "#1A5276";
    h1.style.color = "#f0f8ff";
};

const changeColor2 = async () => {
    body.style.backgroundColor = "#7215db";
    catBtn.style.backgroundColor = "#f0f8ff";
    catBtn.style.color = "#7215db";
    h1.style.color = "#f0f8ff";
};

const changeColor3 = async () => {
    body.style.backgroundColor = "#196F3D";
    catBtn.style.backgroundColor = "#f0f8ff";
    catBtn.style.color = "#196F3D";
    h1.style.color = "#f0f8ff";
};

const changeColor4 = async () => {
    body.style.backgroundColor = "#B03A2E";
    catBtn.style.backgroundColor = "#f0f8ff";
    catBtn.style.color = "#B03A2E";
    h1.style.color = "#f0f8ff";
};

const changeColor5 = async () => {
    body.style.backgroundColor = "#141414";
    catBtn.style.backgroundColor = "#f0f8ff";
    catBtn.style.color = "#141414";
    h1.style.color = "#f0f8ff";
};

const changeColor6 = async () => {
    body.style.backgroundColor = "#f0f8ff";
    catBtn.style.backgroundColor = "#141414";
    catBtn.style.color = "#f0f8ff";
    h1.style.color = "#141414";
};

catBtn.addEventListener('click', loadImg);
color1.addEventListener('click', changeColor1);
color2.addEventListener('click', changeColor2);
color3.addEventListener('click', changeColor3);
color4.addEventListener('click', changeColor4);
color5.addEventListener('click', changeColor5);
color6.addEventListener('click', changeColor6);

loadImg();
