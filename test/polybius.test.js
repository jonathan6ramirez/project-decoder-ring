// Write your tests here!
const { expect } = require("chai");
const  {polybius} = require("../src/polybius.js");

//should return the encoded message
describe("polybius", () => {
    it("should return the encoded message", () => {
       input = "thinkful";
       encode = true;
       
       actual = polybius(input, encode);
       expected = "4432423352125413";
       expect(actual).to.equal(expected);
    })
})

//should ignore capital letters
describe("polybius", () => {
    it("should ignore capital letters and keep spaces", () => {
       input = "This IS thiNkful";
       encode = true;
       
       actual = polybius(input, encode);
       expected = "44324234 4234 4432423352125413";
       
       expect(actual).to.equal(expected);
    })
})

// should decode while keeping spaces
describe("polybius", () => {
    it("should decode while keeping spaces", () => {
       input = "44324234 4234 4432423352125413";
       encode = false;
       
       actual = polybius(input, encode);
       expected = "th(i/j)s (i/j)s th(i/j)nkful";
       
       expect(actual).to.equal(expected);
    })
})


// should return false if the length of characters minus spaces is odd
describe("polybius", () => {
    it("should return false if the length of characters minus spaces is odd", () => {
       input = "44324234 423";
       encode = false;
       
       actual = polybius(input, encode);
       expected = false;
       
       expect(actual).to.equal(expected);
    })
})