import makeButtons from './buttons.js';
import homePage from './homePage.js'
import menuPage from './menuPage.js';
import contactPage from './contactPage.js';
import removeAllChildNodes from './utils.js';
import './style.css'

//button container
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id', 'buttonContainer')
document.body.appendChild(buttonContainer);

//content container
const contentContainer = document.createElement('div');
contentContainer.setAttribute('id', 'contentContainer');
document.body.appendChild(contentContainer);

//buttons
const buttons = makeButtons();
Object.values(buttons).forEach(button => {
    buttonContainer.appendChild(button);
    button.addEventListener("click", (e) => {
        removeAllChildNodes(contentContainer);
        switch (e.target) {
            case homeButton:
                contentContainer.appendChild(homePage());
                break;
            case menuButton:
                contentContainer.appendChild(menuPage());
                break;
            case contactButton:
                contentContainer.appendChild(contactPage());
                break;
            default:
                break;
        }
    })
})

//initial load is home page
contentContainer.appendChild(homePage());

