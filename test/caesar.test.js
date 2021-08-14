// Write your tests here!
const { expect } = require("chai");
const  {caesar} = require("../src/caesar.js");

// test to see if the function returns false if the shift value is less than -25,
// greater than 25, or equal to 0
describe("caesarShift", ()=> {
    it("should return false if the shift value is less than -25, greater than 25, or equal to 0", () =>{
        
        let shift1 = 0;
        let shift2 = -26;
        let shift3 = 26;

        encode = true;
        input = "Hello"

        const actual1 = caesar(input, shift1, encode);
        const actual2 = caesar(input, shift2, encode);
        const actual3 = caesar(input, shift3, encode);

        expected = false;

        expect(actual1).to.equal(expected);
        expect(actual2).to.equal(expected);
        expect(actual3).to.equal(expected);
    })
})

//should ignore capital letters
describe("caesarShift", () => {
    it("should ignore capital letters", () => {
        input = "ThEse";
        encode = true;
        expected = "ymjxj";
        shift = 5;

        const actual = caesar(input, shift, encode)

        expect(actual).to.equal(expected)
    })
})

// should wrap around the alphabet when the shift reaches a or z
describe("caesarShift", () => {
    it("should wrap around the alphabet if the shift reaches a or z", () => {
        
        encode = true;
        expected1 = "y";
        expected2 = "b";

        input1 = "a";
        input2 = "z";

        shift1 = -2;
        shift2 = 2;

        const actual1 = caesar(input1, shift1, encode);
        const actual2 = caesar(input2, shift2, encode);

        expect(actual1).to.equal(expected1);
        expect(actual2).to.equal(expected2);

    })
})
//should encode a word when provided with a shift
 describe ("caesarShift", () => {
     it("should encode a word when provided with shift", () => {

         shift = 3;
         encode = true;
         expected = "khoor";
         input = "Hello";

         const actual = caesar(input, shift, encode)

         expect(actual).to.equal(expected);
     })
 })
 //should ignore spaces and other characters
 describe("caesarShift", () => {
     it("should ignore spaces and other characters", () => {
         shift = 3;
         encode = true;
         input = "a very good day!";
         expected = "d yhub jrrg gdb!";

         const actual = caesar(input, shift, encode)
         expect(actual).to.equal(expected);
     })
 })
 //should decode a message
 describe("caesarShift", () => {
    it("should decode a message", () => {
        shift = 8;
        encode = false;
        input = "BPQA qa I amkzmb umaaiom!";
        expected = "this is a secret message!";
        
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected);
    })
})