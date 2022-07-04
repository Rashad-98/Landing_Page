/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');
const frag = document.createDocumentFragment();
const listItems = document.getElementsByClassName('menu__link');
const anchors = document.getElementsByTagName('a');
const icon = document.querySelector('.icon');

/**
 * @description this function adds the your-active-class class to the section in view and removes it from other sections (the section in view is assumed to be the one having its upper border above the middle of the screen and its lower border below the middle of the screen.)
 * @description this funciton adds the active__bar class to the navigation bar list item that corresponds to the section in view.
*/
function inView(){
	const windowHeight = window.innerHeight;
	let scrollY = window.scrollY;
	for ( let u = 0; u<sections.length; u++){
		if (sections[u].getBoundingClientRect().top < (0.5*windowHeight) && sections[u].getBoundingClientRect().bottom > (0.5*windowHeight)){
			sections[u].classList.add('your-active-class');
			const li = document.getElementsByClassName('menu__link');
			li[u].classList.add('active__bar');
		}else{
			sections[u].classList.remove('your-active-class');
			const li = document.getElementsByClassName('menu__link');
			li[u].classList.remove('active__bar');
		}

	}
}

/**
 *@description this funciton toggles both the 'horizontal' and 'vertical' classes for the element with class 'navbar__menu'.
*/
function navButton(){
	const link= document.querySelector('.navbar__menu');
	link.classList.toggle('horizontal');
	link.classList.toggle('vertical');	
}


// Events
window.addEventListener('scroll',inView);
icon.addEventListener('click',navButton);

// Build menu 
for ( let i = 1; i <= sections.length; i++ ){
	const listItem = document.createElement('li');
	frag.appendChild(listItem);
	listItem.classList.add('menu__link');
	const attr = sections[i-1].getAttribute('data-nav');
	listItem.innerHTML = `<a href = '#section${i}'>${attr}</a>`;
}
navBar.appendChild(frag);

// Scroll to section on link click using scrollIntoView
for ( let j = 1; j <= sections.length; j++){
	listItems[j-1].addEventListener('click',function(){
		sections[j-1].scrollIntoView({behavior:'smooth',block:'center'});
		});
}
// prevent the default action of clicking the anchor element.
for (let x =0; x<anchors.length; x++){
	const hoba = anchors[x]
	hoba.addEventListener('click',function(event){
	event.preventDefault();
	});
}




