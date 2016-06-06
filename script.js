/*
function check(){

pass = document.getElementById("pass").value;

if( pass !== '12345678'){
  alert("bad password")
}

userName = document.getElementById("name").value;

if(hasNumber(userName) && pass === '12345678'){

document.getElementById("myForm").innerHTML = "<h1> The userName and Password are good </h1>"

}

return false;

}

function hasNumber(myString) {
  return (
    /\d/.test(
      myString));
}
*/
/*part 1*/
var person = function(fname, lname,age){
  this.fname=fname,   this.lname=lname,   this.age=age;
}

objectPerson = new person("faisal","khan",20);

for (property in objectPerson) {
    console.log(property);
}

/*part 2*/

var lastAnswer;

function Multiplier(suppliedNumber){

this.multiplyThis = function(){
  timeOne = suppliedNumber * 1;
  lastAnswer = suppliedNumber * timeOne;
  console.log(lastAnswer);
  return timeOne * suppliedNumber;
}

this.getCurrentValue = function(){
  console.log(lastAnswer);
  return lastAnswer;
}
}

multiply = new Multiplier(3);
multiply.multiplyThis();
multiply.getCurrentValue();

/*part 3*/
