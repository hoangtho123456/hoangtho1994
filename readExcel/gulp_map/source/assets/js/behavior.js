var RADIO = $(".map-group-radio input[type='radio']"); //radio for hide/how select box
var SELECT1 = $(".select1-js"); //select box in left
var SELECT2 = $(".select2-js"); //select box in right
var NATION_SELECT = $("#nations");
var NATION_SEARCH = $("#search");
var BTN_SUBMIT = $(".btn-submit-js");
/*=======Event handler========*/
$(document).ready(function() {
  SetActive();
});

RADIO.on('click', function () {
  var curRa = $(RADIO).index(this);
  switch(curRa) {
    case 0:
      SELECT1.removeAttr('disabled');
      SELECT2.attr('disabled','true');
      break;
    case 1:
      SELECT1.attr('disabled','true');
      SELECT2.removeAttr('disabled');
      break;
  }
});

/*=========function=============*/
/*
*Set active checkbox and radio-box
*/
function SetActive() {
  if(RADIO.eq(0).prop("checked", true)) {
    SELECT1.removeAttr('disabled');
    SELECT2.attr('disabled','true');
  } else if(RADIO.eq(1).prop("checked", true)) {
    SELECT1.attr('disabled','true');
    SELECT2.removeAttr('disabled');
  }
}