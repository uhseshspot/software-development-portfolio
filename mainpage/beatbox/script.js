
class Beat {
	constructor(audioSrc) {
		this.audio = new Audio(audioSrc);
	}

	play = () => {
		this.audio.currentTime = 0;
		this.audio.play();
	};
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
	constructor(color, keyCode) {
		this.color = color;
		this.keYCode = keyCode;
		this.element = document.getElementById(keyCode);
		this.setButtonColorInHTML();
		this.setATransitionEndListener();
	}

	/**
	 * set a listener to remove the styles
	 */
	setATransitionEndListener = () => {
		this.element.addEventListener('transitionend', () => {
			this.deselect();
		});
	};

	/**
	 * Set the button color based on color specified
	 */
	setButtonColorInHTML = () => {
		this.element.style.borderColor = this.color;
	};

	/**
	 * Select function to set the background color and boxShadow
	 */
	select = () => {
		this.element.style.background = this.color;
		this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
	};

	/**
	 * Deselect function to reset background color and boxShadow
	 */
	deselect = () => {
		this.element.style.background = 'transparent';
		this.element.style.boxShadow = 'none';
	};
}

let beats = {
	65: {
		beat: new Beat('assets/beatboxsounds/Synth - beat1.wav'),
		button: new Button('#dda0dd', 65),
	},
	83: {
		beat: new Beat('assets/beatboxsounds/Strings - beat2.wav'),
		button: new Button('#dda0dd', 83),
	},
	68: {
		beat: new Beat('assets/beatboxsounds/Bass - beat3.wav'),
		button: new Button('#dda0dd', 68),
	},
	70: {
		beat: new Beat('assets/beatboxsounds/arcane - beat4.wav'),
		button: new Button('#ba67e3', 70),
	},
	71: {
		beat: new Beat('assets/beatboxsounds/piano - beat5.wav'),
		button: new Button('#ba67e3', 71),
	},
	72: {
		beat: new Beat('assets/beatboxsounds/drums - beat6.wav'),
		button: new Button('#ba67e3', 72),
	},
	74: {
		beat: new Beat('assets/beatboxsounds/piano-beat7.wav'),
		button: new Button('#cf76cf', 74),
	},
	75: {
		beat: new Beat('assets/beatboxsounds/synth - beat8.wav'),
		button: new Button('#cf76cf', 75),
	},
	76: {
		beat: new Beat('assets/beatboxsounds/piano - beat9.wav'),
		button: new Button('#cf76cf', 76),
	},
};

/**
 * Function to play the beat upon a press of key
 */
const triggerBeat = (event) => {
	const KeyCode = event.keyCode;

	if (KeyCode in beats) {
		let keyPress = beats[KeyCode];

		keyPress.beat.play();
		keyPress.button.select();
	}
};

/**
 * Keydown listener to fire triggerBeat function
 */
document.addEventListener('keydown', triggerBeat);
