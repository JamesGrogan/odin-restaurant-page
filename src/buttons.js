export default function makeButtons() {
    const homeButton = document.createElement('button');
    homeButton.innerText = "Home";
    homeButton.setAttribute('id', 'homeButton');
    homeButton.setAttribute('class', 'clickedButton');
    buttonContainer.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.innerText = "Menu";
    menuButton.setAttribute('id', 'menuButton');
    buttonContainer.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.innerText = "Contact";
    contactButton.setAttribute('id', 'contactButton');
    buttonContainer.appendChild(contactButton);

    return {homeButton, menuButton, contactButton};
}