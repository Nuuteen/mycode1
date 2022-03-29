let inputID=document.getElementById('input-users')
let inputPass=document.getElementById('input-passwordz')
let showbutton=document.getElementById("show-but");

function myFunction() {
let text = inputID.value;
let pass = inputPass.value;
alert(text);
}

function myshow() {
    let x = inputPass;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

{
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
  }
  
  {
    function pass(){ document.getElementById('input-passwordz').type="password"; } 
    function text(){ document.getElementById('input-passwordz').type="text"; }
  }