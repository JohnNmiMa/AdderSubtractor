var Utils = {}
Utils.isNumeric = function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

$(document).ready(function() {

    $("#plus_btn, #minus_btn").on("click", function(event) {
        var xval = Number($("#xval").val()),
            yval = Number($("#yval").val()),
            ans  = 0,
            target = $(event.target);

        if (Utils.isNumeric(xval) && Utils.isNumeric(yval)) {
            if (target.is("button#plus_btn")) {
                ans = xval + yval;
            } else {
                ans = xval - yval;
            }
            $("#answer").text("X (minux/plus) Y is " + ans);
        } else {
            alert("Please enter numeric values");
        }
    });

});

