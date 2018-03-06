import { expect } from 'chai';
import calc from '../src/main.js';

describe('Calc', function () {
	describe('Smoke tests', function () {
		
		it('should exist the calc lib', function () {
			expect(calc).to.exist;
		});

		it('should exist the method `sum`', function () {
			expect(calc.sum).to.exist;
			expect(calc.sum).to.be.a('function');
		});

		it('should exist the method `sub`', function () {
			expect(calc.sub).to.exist;
			expect(calc.sub).to.be.a('function');
		});

		it('should exist the method `multi`', function () {
			expect(calc.multi).to.exist;
			expect(calc.multi).to.be.a('function');
		});

		it('should exist the method `div`', function () {
			expect(calc.div).to.exist;
			expect(calc.div).to.be.a('function');
		});
	});

	describe('Sum', function () {
		it('should return 4 when `sum(2,2)`', function () {
			expect(calc.sum(2,2)).to.be.equal(4);
		});
	});

	describe('Sub', function () {
		it('should return 4 when `sub(6,2)`', function () {
			expect(calc.sub(6,2)).to.be.equal(4);
		});

		it('should return -4 when `sub(6,10)`', function () {
			expect(calc.sub(6,10)).to.be.equal(-4);
		});
	});

	describe('Multi', function () {
		it('should return 4 when `multi(2,2)`', function () {
			expect(calc.multi(2,2)).to.be.equal(4);
		});
	});

	describe('Div', function () {
		it('should return 2 when `div(4,2)`', function () {
			expect(calc.div(4,2)).to.be.equal(2);
		});
		it('should return `Não é possível divisão por zero!` when divide by 0', function () {
			expect(calc.div(4, 0)).to.be.equal('Não é possível divisão por zero!');
		});
	});
});