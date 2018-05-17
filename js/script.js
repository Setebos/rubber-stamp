const text   = document.getElementById('stamp-text');
const color  = document.getElementById('stamp-color');
const result = document.getElementById('stamp-result');

color.addEventListener('change', function(e) {
	result.style.color       = color.value;
	result.style.borderColor = color.value;
})

text.addEventListener('keyup', function(e) {
	result.textContent = text.value;
})