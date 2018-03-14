import { expect } from 'chai';
import FizzBuzz from '../src/main.js';

/*
 * Desafio FizzBuzz
 * 
 * Escreva uma lib que receba um número e:
 * 
 * Se o número for divisível por 3, no lugar do número escreva 'Fizz'
 * Se o número for divisível por 5, no lugar do número escreva 'Buzz'
 * Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
 * Se não for múltiplo de nada, retorna o número
 * 
 */
describe('FizzBuzz', () => {
	it('should return `Fizz` when multiple of 3', function () {
		expect(FizzBuzz(3)).to.be.equal('Fizz');
		expect(FizzBuzz(6)).to.be.equal('Fizz');
	});

	it('should return `Buzz` when multiple of 5', function () {
		expect(FizzBuzz(5)).to.be.equal('Buzz');
		expect(FizzBuzz(10)).to.be.equal('Buzz');
	});
	
	it('should return `FizzBuzz` when multiple of 3 and 5', function () {
		expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
		expect(FizzBuzz(45)).to.be.equal('FizzBuzz');
	});
	
	it('should return the number when non-multiple', function () {
		expect(FizzBuzz(7)).to.be.equal(7);
		expect(FizzBuzz(14)).to.be.equal(14);
	});
});