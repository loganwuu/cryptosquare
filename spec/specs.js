describe('formatString', function() {
    it("removes spaces in the string", function() {
        expect(formatString('Have a nice day!')).to.eql(["h", "a", "v", "e", "a", "n", "i", "c", "e", "d", "a", "y"]);
    });

    it("removes punctuation in the string", function() {
        expect(formatString('Have a nice day!')).to.eql(["h", "a", "v", "e", "a", "n", "i", "c", "e", "d", "a", "y"]);
    });

    it("downcases the string", function() {
        expect(formatString('Have a Nice Day!')).to.eql(["h", "a", "v", "e", "a", "n", "i", "c", "e", "d", "a", "y"]);
    });

    it("changes the string into array", function() {
        expect(formatString('Have a nice day')).to.eql(["h", "a", "v", "e", "a", "n", "i", "c", "e", "d", "a", "y"]);
    });
});

describe('getLength', function() {
    it("gets length of the string", function() {
        expect(getLength('Have a nice day!')).to.equal(13);
    });
});

describe('getSquare', function() {
    it("gets size of square of the characters in the string", function() {
        expect(getSquare('haveaniceday')).to.equal(4);
    });
});
