const text   = document.getElementById('stamp-text');
const result = document.getElementById('stamp-result');

text.addEventListener('keyup', function(e) {
	result.textContent = text.value;
})