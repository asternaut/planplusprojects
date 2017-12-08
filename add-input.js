var counter = 1;
var limit = 3;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}



var counterCell = 0;
var counterHome = 0;
var counterFax = 0;
var counterBusiness = 0;
function addAllInputs(divName, inputType){
     var newdiv = document.createElement('div');
     switch(inputType) {
          case 'tel':
               newdiv.innerHTML = "Entry " + (counterCell + 1) + " <br><input type='tel' name='myCells[]'>";
               counterCell++;
               break;
          case 'tel':
               newdiv.innerHTML = "Entry " + (counterHome + 1) + " <br><input type='tel' name='myHomes[]'>";
               counterHome++;
               break;
          case 'tel':
               newdiv.innerHTML = "Entry " + (counterFax + 1) + " <br><input type='tel' name='myFaxes[]'>";
               counterFax++;
               break;
          case 'tel':
	       newdiv.innerHTML = "Entry " + (counterBusiness + 1) + " <br><input  type='tel' name='myBusinesses[]'>";
               counterBusiness++;
               break;
          }
     document.getElementById(divName).appendChild(newdiv);
}
