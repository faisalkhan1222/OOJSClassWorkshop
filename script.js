function check(){

pass = document.getElementById("pass").value;

if( pass !== '12345678'){
  alert("bad password")
}

userName = document.getElementById("name").value;

if(hasNumber(userName)){

  alert("has number");
}

return false;

}

function hasNumber(myString) {
  return (
    /\d/.test(
      myString));
}
