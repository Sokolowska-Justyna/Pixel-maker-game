const table = $('#pixelCanvas');
const inputHeight = $('#inputHeight');
const inputWeight = $('#inputWeight');
const form = $('form');
const colorPicker = $('#colorPicker');
const cells = $('#pixelCanvas td');
const defaultColor = "rgba(0, 0, 0, 0)";
var mouseDrag = false;
const SeeMore2 = $('#SeeMore2');


function makeGrid() {
  for (var i = 0; i < inputHeight.val(); i++) {
    var row = $("<tr>");
    for (var j = 0; j < inputWeight.val(); j++) {
      var column = $('<td>');
      row.append(column);
    }
    table.append(row);
  }
}

function clearGrid() {
  table.children().remove();
}


form.submit(function (e) {
  e.preventDefault();
  clearGrid();
  makeGrid();


});

$(document).on('click', 'td', function () {
  var color = colorPicker.val();
  var currentColor = $(this).css('background-color');
  if (currentColor !== defaultColor) {
    $(this).css('background-color', defaultColor);
  }
  else {
    $(this).css('background-color', color);
  }

});

table.on("mousedown", "td", function () {
  //event.preventDefault();
  mouseDrag = true;
});

table.on("mousemove", "td", function () {
  color = $("#colorPicker").val();
  if (mouseDrag) {
    $(this).css("background-color", color);
  }
});

table.on("mouseup mouseleave ", function () {
  mouseDrag = false;
});

$('.SeeMore2').click(function () {
  var $this = $(this);
  $this.toggleClass('SeeMore2');
  if ($this.hasClass('SeeMore2')) {
    $this.text('Przeslij');
  } else {
    $this.text('Reset');
  }
});