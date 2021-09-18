// const = document.createElement('button');

const counter = document.getElementById('counter');
const incr = document.querySelector('.incr');
const decr = document.querySelector('.decr');

let count = 0;
incr.addEventListener('click', () => {
	count++;
	counter.innerHTML = count;
});

decr.addEventListener('click', () => {
	count--;
	counter.innerHTML = count;
});

function colorChange() {
	if (count < 0) {
		zeroDisplay.style.color = 'red';
	} else {
		zeroDisplay.style.color = 'black';
	}
}
