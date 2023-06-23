 
let kresRide = document.querySelector('#crash-ride');
let hihatTop = document.querySelector('#hihat-top');


 const animateCrashOrRide = () => {
	kresRide.style.transform = 'rotate(0deg) scale(1.5)';

};

const animateHiHAtClosed = () => {
	hihatTop.style.top = '171px';

}





window.addEventListener("keydown", (event) => {
	 
	 let code = event.keyCode;
	 let keyElement = document.querySelector(`div[data-key="${code}"`);
	 if (!keyElement) return;

	 let audio = document.querySelector(`audio[data-key = "${code}" ]`);
	 audio.currentTime = 0;
	 audio.play();

	 	switch (code) {


		case 69:
		case 82:
			animateCrashOrRide();
		break;

		case 75:
		case 73: 
			animateHiHAtClosed();
			break;
	}
	keyElement.classList.add('playing');

});



const removeAnimation = (element) =>{
	if(element.propertyName !== 'transform') return;

	element.target.style.transform = 'rotate(-7.2deg) scale(1.5)';

	 // ako se nije desilo nesto sto nije transform, prekidamo

}

const removeHihatTopTransition = e => {
	if(e.propertyName !== 'top') return;
	e.target.style.top = '166px';
}

const removeKeyTransition = e => {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing')
}


let drumKeys = document.querySelectorAll('.key');
drumKeys.forEach(key => {
key.addEventListener("transitionend", removeKeyTransition)
});
kresRide.addEventListener("transitionend", removeAnimation);
hihatTop.addEventListener("transitionend", removeHihatTopTransition);