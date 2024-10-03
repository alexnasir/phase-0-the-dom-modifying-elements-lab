// Write your code here!
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove('mainElement');
}
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const myName = "Alex";
newHeader.textContent = `${myName}is the champion`;
