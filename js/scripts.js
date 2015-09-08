var factorial = function(num) {
    if (num < 0) {
        return "error";
    } else if (num === 0) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
};

$(document).ready(function() {
    $("form#factorial").submit(function(event){
        var num = parseInt($("input#num").val());
        var calculation = factorial(num);

        $("#calculation").text(calculation);

        $("#result").show();
        event.preventDefault();
    })
});
