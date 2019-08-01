function checkdata() {
    var nameInput = document.forms["contactForm"]["name"],
        emailInput = document.forms["contactForm"]["email"],
        inputtxt= document.forms["contactForm"]["Password"];

    if(nameInput.value == "") {
        alert("You Must enter a name");
        return false;
    }
   
    if(emailInput==""||emailInput.value.length<6)
   {

    alert("You havnt entered in an valid email address!");


   }
   else {
    if(emailInput.value.indexOf("@")==-1 || emailInput.value.indexOf(".")==-1)
{
   alert("Thats not a valid email address or doesnt exist!");
   return false;

}

  
    
} 

var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(passw) < 8) 
{ 
alert('Correct password ...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}






}