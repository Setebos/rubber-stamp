const text    = document.getElementById('stamp-text');
const color   = document.getElementById('stamp-color');
const result  = document.getElementById('stamp-result');
const button = document.getElementById('stamp-convert');
const convert = document.getElementById('convert-div');

color.addEventListener('change', function(e) {
	result.style.color       = color.value;
	result.style.borderColor = color.value;
})

text.addEventListener('keyup', function(e) {
	result.textContent = text.value;
})

button.addEventListener('click', function() {
	html2canvas(convert).then(function(canvas) {
		return Canvas2Image.saveAsPNG(canvas)
	})
});