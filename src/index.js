import { initPage } from "./modules/load.js";
import { loadMenu } from "./modules/menu.js";
import { loadAbout } from "./modules/about.js";
import { loadReserve } from "./modules/reserve.js";

initPage();


const contentDiv = document.querySelector('#content')
const menuBtn = document.querySelector('.menu')
const aboutBtn = document.querySelector('.about')
const reserveBtn = document.querySelector('.reserve')
const homeImg = document.querySelector('.nav-tabs img')

homeImg.onclick = () => {
  contentDiv.innerHTML = ''
  initPage()
}


menuBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loadMenu()
});

aboutBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loadAbout()
});

reserveBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loadReserve()
});