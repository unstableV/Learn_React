function validate() {
    var text;
    if(document.myForm.name.value == "") {
        text = "Name cannot be empty";
              document.getElementById("demo").innerHTML = text;
              document.myForm.name.focus() ;
              return false;
    }
    if(document.myForm.email.value == "") {
            text = "Email cannot be empty";
                  document.getElementById("demo").innerHTML = text;
                  document.myForm.name.focus() ;
                  return false;
    }
    atRate = document.myForm.email.value.indexOf("@");
    dot = document.myForm.email.value.indexOf(".");
    if(atRate < 1 || (dot-atRate<2)) {
        text = "Please write valid email";
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus() ;
        return false;
    }
    if(document.myForm.phone.value == "" || isNaN(document.myForm.phone.value)
    || document.myForm.phone.value.length!=10) {
        text = "Please enter valid 10 digit number";
                  document.getElementById("demo").innerHTML = text;
                  document.myForm.name.focus() ;
                  return false;
    }
    document.getElementById("demo").innerHTML = "Thanks for submitting";
    return true;
}