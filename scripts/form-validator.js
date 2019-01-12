

function validate(){
    
    var fname = document.forms["reservate"]["firstname"]; 
    var lname = document.forms["reservate"]["lastname"]; 
    var mobile = document.forms["reservate"]["mobile"];  
    var email = document.forms["reservate"]["email"]; 
    var UserDate = document.getElementById("date").value; 

    var toDay = new Date();



    if (fname.value == "")                                  
    { 
        alert("You need to enter your firstname"); 
        return false; 
    } 

    if (lname.value == "")                                  
    { 
        alert("You need to enter your lastname"); 
        return false; 
    } 

    if (mobile.value == "")                                  
    { 
        alert("You need to enter your phone number"); 
        return false; 
    } 

    if (email.value.indexOf("@", 0) < 0 )                                   
    { 
        window.alert("You need to enter a valid e-mail address.");  
        return false; 
    } 


    if (new Date(UserDate).getTime() >= toDay.getTime()) {
        console.log("a valid date is set")
    } else {
        alert("You need to enter a valid date");
        return false;
    }



}