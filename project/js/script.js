//Output functions
function calc() {
  var width = getByIdNumber('width');
  var length = getByIdNumber('length');
  var area = width * length;
  var cost = getByIdNumber('cost');
  var tileCost = cost * area;
  print('output', "<h4>The area of the given dimensions are: " + area + "sq feet </h4>");
  print('output1', "<h4>The cost to tile this floor will be: $" + tileCost + " dollars </h4>");
}


function reset() {
  var width = getByIdNumber('width');
  var length = getByIdNumber('length');
  var area = width * length;
  var cost = getByIdNumber('cost');
  var tileCost = cost * area;
  getById('cost').value = '';
  getById('width').value = '';
  getById('length').value = '';
  width = '';
  length = '';
  area = '';
  cost = '';
  tileCost = '';
  
  print('output', '');
  print('output1', '');

}


//Functality Functions Below

//Limit Keys entered to Intergers only (Need to fix (.) attr, keycode = 190;
//function isNumberKey(evt) {
//  var charCode = (evt.which) ? evt.which : event.keyCode
//  if (charCode === 190)
//    return true;
//  else if (charCode > 31 && (charCode < 48 || charCode > 57))
//    return false;
//  else
//    return true;
//}

function print(x, message) {
  getById(x).innerHTML = message;
}

function getById(x) {
  return document.getElementById(x);
}

function getByIdNumber(x) {
  return parseFloat(document.getElementById(x).value, 10);
}
