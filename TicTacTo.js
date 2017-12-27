var ticTacTo = {};

ticTacTo.init = function () {
    ticTacTo.currentPlayer = "red";
    ticTacTo.PlayerIndicator = $(".current-player-indicator");
    ticTacTo.PlayerIndicator.addClass(ticTacTo.currentPlayer);
    ticTacTo.boxes = $('.box');
    ticTacTo.boxes.on('click', ticTacTo.boxClicked);

}

ticTacTo.boxClicked = function () {
        $(this).addClass(ticTacTo.currentPlayer);
        }

$(document).ready(function () {
    ticTacTo.init();
});