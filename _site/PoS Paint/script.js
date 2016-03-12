$(document).ready(paint);

function paint() {

    var width = $('#bin').width();
    var height = $('#bin').height();
    var columns = Math.floor(width / 10);
    var rows = Math.ceil(height / 10);
    var area = columns * rows;
    var unit = $('.unit');
    var colors = ["cyan", "green", 'yellow', 'red', 'magenta', 'blue', 'white', 'black'];
    var selectedColor;

    function changePen() {
        $('.color').each(function () {
            $(this).empty();
        });
        selectedColor = $(this).attr("class").split(" ")[1];
        $(this).html('&nbsp');
    }

    function draw() {
        var newColor = selectedColor;
        var color = $(this).attr('class').split(' ')[1];
        $(this).removeClass(color).addClass(newColor);
    }

    function checkShift(e) {
        if (!e) e = window.event;
        if (e.shiftKey) {
            draw.call(this);
        }
    }

    for (i = 0; i < area; i++) {
        var newUnit = $("<div class='unit white'></div>").prependTo("#bin");
        newUnit.attr("id", i);
        newUnit.data("color", colors[-1]);
        newUnit.mouseenter(checkShift);
    }

    for (i = 0; i < colors.length; i++) {
        var color = $("<div class='color'></div>").prependTo("#palette");
        color.addClass(colors[i]);
        color.click(changePen);
    }
    
    var clear = $("<div class='color' id='clear'></div>").appendTo('#palette');
    clear.click(function(){
        var blocks = $('.unit');
        blocks.attr('class', 'unit white');
    });
    

    $('.color').first().click();
}