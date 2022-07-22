const codeButton=document.getElementById("codeButton");
const codeInput=document.getElementById("codeInput");
var code=5346715;
codeButton.addEventListener("click",e=>{
    if(codeInput.value==code)
    {
    document.getElementById("secret-wrapper").style.display="none";
    document.getElementById("afterCodeRoom").style.display="flex";
    }
    else
    {
        document.getElementById("secret-wrapper").style.display="none";
        document.getElementById("wrongCode").style.display="block";
        setTimeout(exitRoom,3000)
    }
    function exitRoom()
    {
        window.location.replace('home.html');
    }
});