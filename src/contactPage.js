export default function contactPage() {
    const element = document.createElement('div');
    element.setAttribute('class', 'content');

    const contactTextDiv = document.createElement('div');
    const contactText = "Placeholder text for some contact deets"
    contactTextDiv.innerText = contactText;
    contactTextDiv.setAttribute('class', 'flex-child');

    element.appendChild(contactTextDiv);

    return element;
}