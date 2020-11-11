import { initPage } from "./modules/load.js";
import { loadMenu } from "./modules/menu.js";
import { loadAbout } from "./modules/about.js";
import { loadContact } from "./modules/contact.js";

initPage();


const contentDiv = document.querySelector('#content')
const homeBtn = document.querySelector('.home')
const menuBtn = document.querySelector('.menu')
const aboutBtn = document.querySelector('.about')
const contactBtn = document.querySelector('.contact')
const homeImg = document.querySelector('.nav-tabs img')

homeImg.onclick = () => {
  contentDiv.innerHTML = ''
  location.reload()
}

homeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  location.reload()
})


menuBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loadMenu()
});

aboutBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loadAbout()
});

contactBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loadContact()
});