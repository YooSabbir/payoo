document.getElementById("login-btn").addEventListener("click", function () {
    //1. get the mobile number
    const numberInput=document.getElementById("input-number");
    const contactNumber= numberInput.value;

    //2. get the pin number 
    const pinInput= document.getElementById("input-pin");
    const pinNumber = pinInput.value;
    
    //3. match the pin and mobile number
    if(contactNumber=="01234567890" && pinNumber=="1234"){
    
        //jodi true hoi: alert dekhabo login successful > home page
        alert("login succesfully")
        window.location.assign("./home.html")
    }else{
        
        //jodi false hoi taile alert dekhabo enter currect and pin
        alert("login faild")
        return;
    }
})