//formating
    var removeSpace = function(str) {
        var str = str.replace(/\s+/g, '');
        return str;
    };

    var removePunctuation = function(str) {
        var str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        return str;
    };

    var downcase = function(str) {
        var str = str.toLowerCase();
        return str;
    };

var formatString = function(str) {
    var str = removeSpace(str);
    var str = removePunctuation(str);
    var str = downcase(str);
    var array = str.split("");
    return array;
};

//get square/retangle form
    var getArray = function(str) {
        var array = str.split("");
        return array;
    };

    var getLength = function(str) {
        var strLength = removeSpace(str).length;
        return strLength;
    };

    var getSquare = function(str) {
        var strLength = removeSpace(str).length;
        var square = Math.sqrt(strLength);
        colNum = Math.ceil(square);
        return colNum;
    };

    String.prototype.chunk = function(colNum) {
        var array = [];
        for (var i = 0, length=this.length; i < length, i += colNum) {
            array.push(this.substr(i, colNum));
        }
        return array;
    };


var encrypt = function(str) {

};
