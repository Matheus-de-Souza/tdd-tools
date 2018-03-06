const { expect } = require('chai');

describe('Main', function () {

	let arr;

	// Roda uma vez antes do bloco
	before(function () {

	});

	// Roda uma vez após o bloco
	after(function () {

	});
	
	// Roda todas as vezes, antes de CADA bloco
	beforeEach(function () {
		arr = [1,2,3];
	});

	// Roda todas as vezes, depois de CADA bloco
	afterEach(function () {

	});

	it('should have a size of 4 when push another value to the array', function () {
		arr.push(4);

		expect(arr).to.have.lengthOf(4);
	});
});