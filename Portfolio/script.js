//navigation
const home=document.getElementById("home");
const about=document.getElementById("about");
const skills=document.getElementById("skills");
const contact=document.getElementById("contact");
const works=document.getElementById("works");
const attributions=document.getElementById("attributions");
var diceDisplay=true, navButton;
home.addEventListener("click",e=>{
    navButton=1;
    diceAppear();
});
about.addEventListener("click",e=>{
    navButton=2;
    diceAppear();
});
skills.addEventListener("click",e=>{
    navButton=3;
    diceAppear();
});
contact.addEventListener("click",e=>{
    navButton=4;
    diceAppear();
});
works.addEventListener("click",e=>{
    navButton=5;
    diceAppear();
});
attributions.addEventListener("click",e=>{
    navButton=6;
    diceAppear();
});
//dice showing up
function diceAppear()
{
    if(diceDisplay==false)
    {
        document.getElementById("dicePage").style.display="block";
        document.getElementById("homePage").style.display="none";
        document.getElementById("aboutPage").style.display="none";
        document.getElementById("skillsPage").style.display="none";
        document.getElementById("contactPage").style.display="none";
        document.getElementById("worksPage").style.display="none";
        document.getElementById("navbar").style.display="none";
        diceDisplay=true;
    }
    else
    {
    //dice result influence
    switch(rollResult)
    {
        case 1:
            
        break;
        case 2:
            
        break;
        case 3:
            
        break;
        case 4:
            
        break;
        case 5:
            
        break;
        case 6:
            
        break;
    }
        switch(navButton)
        {
            case 1:
                document.getElementById("homePage").style.display="block";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="block";
            break;
            case 2:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="block";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="block";
            break;
            case 3:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="block";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="block";
            break;
            case 4:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="block";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="block";
            break;
            case 5:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="block";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="block";
            break;
            case 6:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="block";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="block";
            break;
        }
    }
}
//dice first image
var firstDiceImage=Math.floor(Math.random() * 6) + 1;
switch(firstDiceImage)
{
    case 1:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die1.png' alt=''>";
    break;
    case 2:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die2.png' alt=''>";
    break;
    case 3:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die3.png' alt=''>";
    break;
    case 4:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die4.png' alt=''>";
    break;
    case 5:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die5.png' alt=''>";
    break;
    case 6:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die6.png' alt=''>";
    break;
}
//dice roll result calculation
const rollButton=document.getElementById("rollButton");
var rollResult;
rollButton.addEventListener("click",e=>{
    rollResult=Math.floor(Math.random() * 6) + 1;
    switch(rollResult)
{
    case 1:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die1.png' alt=''>";
    break;
    case 2:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die2.png' alt=''>";
    break;
    case 3:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die3.png' alt=''>";
    break;
    case 4:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die4.png' alt=''>";
    break;
    case 5:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die5.png' alt=''>";
    break;
    case 6:
        document.getElementById("dice-imgs").innerHTML="<img id='diceImg' src='Images/die6.png' alt=''>";
    break;
}
    document.getElementById("diceImg").style.animation="rotating 2s ease-in-out";
    document.getElementById("button-wrap").innerHTML="<p>You hit "+rollResult+"!</p>";
    setTimeout(diceAppear,4000)
});
