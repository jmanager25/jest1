const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
    });
    describe("subtraction function", () => {
        
    });
    describe("multiply function", () => {
        
    });
    describe("division function", () => {
        
    });
});


