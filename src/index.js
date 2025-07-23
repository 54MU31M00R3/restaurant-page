import './styles.css';

import { homePage } from './pages/home.js';
import { menuPage } from './pages/menu.js';
import { aboutPage } from './pages/about.js';

document.body.appendChild(homePage.getPage());

const refreshPage = () => {
    try {
        document.querySelector('#content').remove();
    } catch {
        console.log("no content to remove");
    }
}

const homeButton = document.querySelector('#home-button');
homeButton.addEventListener('click', () => {
    refreshPage();
    document.body.appendChild(homePage.getPage());
})

const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', () => {
    refreshPage();
    document.body.appendChild(menuPage.getPage());
})

const aboutButton = document.querySelector('#about-button');
aboutButton.addEventListener('click', () => {
    refreshPage();
    document.body.appendChild(aboutPage.getPage());
})