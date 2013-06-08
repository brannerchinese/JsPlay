// rotate_table.js
// 20130608, works
// David Prager Branner
// Given an HTML table of arbitrary size but no merged cells, 
//   flip along the top-left to bottom right diagonal, so that
//   horizontal Chinese text becomes vertical and vice versa.

function initialize(){
  this.directionVertical = false;
  reportDirection();
}

function reportDirection(){
  var tableObject = document.getElementById("theTable");
  var buttonText = "Change to columnar text";
  tableObject.setAttribute("style", "border:1px;border-spacing:0px 0px;");
  if (this.directionVertical) {
    buttonText = "Change to horizontal text";
    // If Chinese text, we also want lines separated by space.
    tableObject.setAttribute("style", "border:1px;border-spacing:20px 0px;");
  }
  document.getElementById("turnButton").innerHTML=buttonText;
  console.log("direction = vertical?", this.directionVertical);
}

function turn(){
  this.directionVertical = !this.directionVertical;
  reportDirection();
  var tableBody = document.getElementsByTagName('tbody')[0];
  var rowArray = tableBody.getElementsByTagName('tr');
  var columns= rowArray.length;
  var rows= rowArray[0].getElementsByTagName('td').length;
  var tempTableBody= document.createElement('tbody');
  for (row=0 ; row<rows ; row++){
    tempRow = document.createElement('tr');
    for (column=0 ; column<columns ; column++){
      if (this.directionVertical){index = columns-column-1;}
      else {index = column;}
      nextCell = rowArray[index].getElementsByTagName('td')[0];
      tempRow.appendChild(nextCell);
    }
    if (this.directionVertical) {tempTableBody.appendChild(tempRow);}
    else {tempTableBody.insertBefore(tempRow, tempTableBody.firstChild);}
  }
  tableBody.parentNode.replaceChild(tempTableBody, tableBody);
}
