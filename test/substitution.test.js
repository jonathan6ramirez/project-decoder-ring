// Write your tests here!
const { expect } = require("chai");
const  {substitution} = require("../src/substitution.js");

//should return false if the provided alphabet is not 26 characters long
describe("substitution", () => {
    it("should return false if the provided alphabet is not 26 characters long", () =>{
        input = "hello";
        alphabet = "hsdaj";

        actual = substitution(input, alphabet);
        expected = false
        expect(actual).to.equal(expected);
    })
})
//should return false if the provided alphabet has any repeating chracters
describe("substitution", () => {
    it("should return false if the provided alphabet has any repeating chracters", () =>{
        input = "hello";
        alphabet = "abcdefghijklmnopqrstuvwyyz";

        actual = substitution(input, alphabet);
        expected = false
        expect(actual).to.equal(expected);
    })
})
//should return the encoded message with the provided alphabet
describe("substitution", () => {
    it("should return the encoded message", () =>{
        input = "thinkful";
        alphabet = "xoyqmcgrukswaflnthdjpzibev";

        actual = substitution(input, alphabet);
        expected = 'jrufscpw'
        expect(actual).to.equal(expected);
    })
})
//should ignore capital letters and keep spaces
describe("substitution", () => {
    it("should ignore capital letters and keep spaces", () =>{
        input = "You are an excellent spy";
        alphabet = "xoyqmcgrukswaflnthdjpzibev";

        actual = substitution(input, alphabet);
        expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected);
    })
})
//should decode with the provided alphabet
describe("substitution", () => {
    it("should decode with the provided alphabet", () =>{
        input = "y&ii$r&";
        alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        encode = false;

        actual = substitution(input, alphabet, encode);
        expected = 'message'
        expect(actual).to.equal(expected);
    })
})