import { expect } from 'chai';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import PalindromeService from '../../../src/services/palindromes.service';

chai.use(chaiHttp);
describe('CashBoxService', () => {
  let palindromeService: PalindromeService;

  beforeEach(() => {
    palindromeService = new PalindromeService();
  });
  describe('isPalindrome', () => {
    it('should return true for a palindrome number', () => {
      const palindromeNumber = 121;

      const result = palindromeService.isPalindrome(palindromeNumber);

      expect(result).to.be.true;
    });

    it('should return false for a non-palindrome number', () => {
      const nonPalindromeNumber = 123;

      const result = palindromeService.isPalindrome(nonPalindromeNumber);

      expect(result).to.be.false;
    });
  });

  describe('getAllPalindromos', () => {
    it('should return an array of palindromic numbers in the specified range', () => {
      const start = 100;
      const end = 200;
      const expectedPalindromos = ['101', '111', '121', '131', '141', '151', '161', '171', '181', '191'];

      const result = palindromeService.getAllPalindromos(start, end);

      expect(result).to.deep.equal(expectedPalindromos);
    });

    it('should throw an error for an invalid range', () => {
      const start = -10;
      const end = 20;

      expect(() => palindromeService.getAllPalindromos(start, end)).to.throw('Invalid range. Make sure start and end are non-negative numbers and start is less than or equal to end.');
    });

    it('should return an empty array for a range with no palindromic numbers', () => {
      const start = 1;
      const end = 9;

      const result = palindromeService.getAllPalindromos(start, end);

      expect(result).to.deep.equal([]);
    });
  });
});