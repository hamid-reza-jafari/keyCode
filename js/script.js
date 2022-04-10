let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('.title')

document.body.addEventListener('keydown', function (event) {

	event.preventDefault()
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

	console.log(event)
	let myH = $.getElementById('myH').innerHTML = "Your Select in Your keyboard is : <span class='events'>" + event.key.toUpperCase() + "</span>"
	let keyCode = $.querySelector('#keyCode').innerHTML = event.keyCode
	let key = $.querySelector('#key').innerHTML = event.key
	let location = $.querySelector('#location').innerHTML = event.location
	let which = $.querySelector('#which').innerHTML = event.which
	let codeAsci = $.querySelector('#code').innerHTML = event.keyCode

	if (event.key === "ContextMenu") {
		event.preventDefault()
		alert("Koor Khoundi ...")
	}
	else if (this.scroll) {
		$.querySelector('#keyCode').style.fontSize = '100px'
	} else if (event.key === " ") {
		$.getElementById('key').innerHTML = "space"
	}
})

$.body.addEventListener('drag', () => {
	alert("Don't Move and Drag Elements")
})
$.body.addEventListener('mousedown', (event) => {
	// console.log(event)
	event.preventDefault
	if (event.buttons === 2) {
		alert("Dont Right Click")
	}
})
