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

//get square/retangle form to ready to encrypt
    var getSquare = function(str) {
        var strLength = removeSpace(str).length;
        var square = Math.sqrt(strLength);
        var colNum = Math.ceil(square);
        return colNum;
    };

    String.prototype.chunk = function(colNum) {
        var array = [];
        for (var i = 0, length=this.length; i < length, i += colNum) {
            array.push(this.substr(i, colNum));
        }
        return array;
    };

//final function
var cryptoSquare = function(str) {
    var array = formatString(str);
    var square = Math.sqrt(array.length);
    var colNum = Math.ceil(square);
    var stringArray = array.chunk(colNum);
    var characterArray = [];
    for (entry in stringArray) {
        var chars = stringArray[entry].split("");
        characterArray.push(chars);
    }

    var encryptedArray = [];
    for(var j = 0; j < colNum; j += 1) {
        for(var i = 0; i < colNum; i += 1) {
            encryptedArray.push(characterArray[i][j]);
        }
    }

    return encryptedArray;
};

$(document).ready(function() {
    $("form#string").submit(function(event) {
        $(".cryptoSquare").empty();
        var string = $("input#string").val();
        var result = cryptoSquare(string);
        for (i in result) {
            $(".cryptoSquare").append(result[i]);
            if (((parseInt(i) + 1) % 20) === 0) {
                $(".cryptoSquare").append("<br>");
            } else if (((parseInt(i) + 1) % 5) === 0) {
                $(".cryptoSquare").append(" ");
            }
        }
        $("#result").show();
        event.preventDefault();
    });
});
