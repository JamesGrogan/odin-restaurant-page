export default function menuPage() {
    const element = document.createElement('div');
    element.setAttribute('class', 'content');

    const menuTextDiv = document.createElement('div');
    const menuText = "Placeholder text for some schweet grub";
    menuTextDiv.innerText = menuText;
    menuTextDiv.setAttribute('class', 'flex-child');

    element.appendChild(menuTextDiv);

    return element;
}