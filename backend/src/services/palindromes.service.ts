import { Response, Request } from "express";

class PalindromeService {

  private isPalindrome(num: number): boolean {
    const numStr = num.toString();
    const reversedNumStr = numStr.split('').reverse().join('');
    return numStr === reversedNumStr;
  }

  public getAllPalindromos(start: number, end: number): string[] {
    if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
      throw new Error('Invalid range. Make sure start and end are non-negative numbers and start is less than or equal to end.');
    }

    const palindromos: string[] = [];
    for (let i = Math.max(start, 10); i <= end; i++) {
      if (this.isPalindrome(i)) {
        palindromos.push(i.toString());
      }
    }
    return palindromos;
  }

}

export default PalindromeService;
