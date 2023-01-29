import Img from './img3.jpeg';

export default function pageLoad() {
    const element = document.createElement('div');

    const headlineDiv = document.createElement('div');
    const headlineText = "Come and get Newcastle's finest pasta!";
    headlineDiv.innerText = headlineText;
    
    const copyDiv = document.createElement('div');
    const copyText = "By far The Toon's most elegant pasta, you simply won't believe how delicious this true Geordie-Italian pasta is.";
    copyDiv.innerText = copyText;

    element.appendChild(headlineDiv);
    const pastaImage = new Image();
    pastaImage.src = Img;
    pastaImage.classList.add('pastaImg')
    element.appendChild(pastaImage);
    element.appendChild(copyDiv);

    return element;
}