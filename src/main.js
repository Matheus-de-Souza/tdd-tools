module.exports = {
	sum: function (a, b) {
		return a + b;
	}, 
	sub: function (a, b) {
		return a - b; 
	}, 
	multi: function (a, b) {
		return a * b;
	}, 
	div: function (a, b) {
		if (b === 0) { 
			return 'Não é possível divisão por zero!';
		} else {
			return a / b;
		}
	}, 
}