import initPage from './modules/load';
import loadMenu from './modules/menu';
import loadAbout from './modules/about';
import loadContact from './modules/contact';

initPage();


const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');
const contactBtn = document.querySelector('.contact');
const homeImg = document.querySelector('.nav-tabs img');

homeImg.onclick = () => {
  contentDiv.innerHTML = '';
  window.location.reload();
};

homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});


menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loadMenu();
});

aboutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loadAbout();
});

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loadContact();
});