// 
// 
// a passcode entry into the website 
	//	 
	// encountering weird problems? should i restart my laptop?
	// that didn't help 
	// problem with the code?
	// it won't let me press enter or anything

const passcodeinput = document.getElementById('passcode');
const submitbutton = document.getElementById('submit');
const resultdiv = document.getElementById('result');
const enter = document.getElementById('enter');


const correctPasscode = 'aansa123'; 

submitbutton.addEventListener('click', () => {
	const enteredPasscode = passcodeinput.value.trim();
		if (enteredPasscode === correctPasscode) { // changed = to ===
		resultdiv.innerHTML = 'Passcode correct! You may enter the website.';
		window.location.href = '/mainpage/index.html';
	
	} 
		else {
		resultdiv.innerHTML = 'Wrong Password :( Try again!';
	}

});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      document.getElementById("submit").click();
    }
  });



  // by aansa ishtiaq * . *
  // * . * . * . * . * . * . * . * . * .
// 