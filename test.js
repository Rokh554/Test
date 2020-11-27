const button = document.querySelector('.btn')
const squares = document.querySelectorAll('.square')
function changeColor () {
	console.log(squares)
	squares.forEach(el => el.style.backgroundColor = 'red')
}

button.addEventListener('click', changeColor)
