describe('factorial', function() {
    // If the number is less than 0, reject it.
    it("is invalid number if the number entered is less than 0", function() {
        expect(factorial(-1)).to.equal("error");
    });

    // If the number is 0, its factorial is 1.
    it("is 1 if the number entered is 0", function() {
        expect(factorial(0)).to.equal(1);
    });

    // Otherwise, call this recursive procedure again.
    it("multiplies a number by all of the positive integers less than that number", function() {
        expect(factorial(5)).to.equal(120);
    });
});
