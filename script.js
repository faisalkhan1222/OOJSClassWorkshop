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
