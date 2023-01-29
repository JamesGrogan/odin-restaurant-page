import Img from './img3.jpeg';

export default function homePage() {
    const element = document.createElement('div');
    element.setAttribute('class', 'content')

    const headlineDiv = document.createElement('div');
    const headlineText = "Come and get Newcastle's finest pasta!";
    headlineDiv.innerText = headlineText;
    headlineDiv.setAttribute('class', 'flex-child');
    
    const copyDiv = document.createElement('div');
    const copyText = "By far The Toon's most elegant pasta, you simply won't believe how delicious this true Geordie-Italian pasta is.";
    copyDiv.innerText = copyText;
    copyDiv.setAttribute('class', 'flex-child');

    element.appendChild(headlineDiv);
    const pastaImage = new Image();
    pastaImage.src = Img;
    pastaImage.classList.add('pastaImg', 'flex-child')
    element.appendChild(pastaImage);
    element.appendChild(copyDiv);

    return element;
}