//loading screen
{
function loadingDisplay1()
{
    document.querySelector(".navbar").style.display="none";
    document.querySelector(".main").style.display="none";
    document.querySelector(".navbar").style.opacity="0"
    document.querySelector(".main").style.opacity="0"
    document.querySelector(".loadingContainer").style.display="flex";
    setTimeout(loadingDisplay2,1100);
    function loadingDisplay2()
    {
        document.querySelector(".loadingContainer").style.display="none";
        document.querySelector(".navbar").style.display="flex";
        document.querySelector(".main").style.display="block";
        setTimeout(loadingRepair,1);
    function loadingRepair()
    {
        document.querySelector(".navbar").style.opacity="1"
        document.querySelector(".main").style.opacity="1"
    }
    }
}
$(window).on("load",function(){
    loadingDisplay1();
});
}
//navigation
{
const home=document.getElementById("home");
const about=document.getElementById("about");
const skills=document.getElementById("skills");
const contact=document.getElementById("contact");
const works=document.getElementById("works");
const attributions=document.getElementById("attributions");
var diceDisplay=false, navButton;
home.addEventListener("click",e=>{
    navButton=1;
    loadingDisplay1();
    setTimeout(diceAppear,1100);
});
about.addEventListener("click",e=>{
    navButton=2;
    loadingDisplay1();
    setTimeout(diceAppear,1100);
});
skills.addEventListener("click",e=>{
    navButton=3;
    loadingDisplay1();
    setTimeout(diceAppear,1100);
});
contact.addEventListener("click",e=>{
    navButton=4;
    loadingDisplay1();
    setTimeout(diceAppear,1100);
});
works.addEventListener("click",e=>{
    navButton=5;
    loadingDisplay1();
    setTimeout(diceAppear,1100);
});
attributions.addEventListener("click",e=>{
    navButton=6;
    loadingDisplay1();
    setTimeout(diceAppear,1100);
});
}
//dice showing up
{
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
            roll1();
        break;
        case 2:
            roll2();
        break;
        case 3:
            roll3();
        break;
        case 4:
            roll4();
        break;
        case 5:
            roll5();
        break;
        case 6:
            roll6();
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
                document.getElementById("navbar").style.display="flex";
            break;
            case 2:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="block";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="flex";
            break;
            case 3:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="block";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="flex";
            break;
            case 4:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="block";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="flex";
            break;
            case 5:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="block";
                document.getElementById("attributionsPage").style.display="none";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="flex";
            break;
            case 6:
                document.getElementById("homePage").style.display="none";
                document.getElementById("aboutPage").style.display="none";
                document.getElementById("skillsPage").style.display="none";
                document.getElementById("contactPage").style.display="none";
                document.getElementById("worksPage").style.display="none";
                document.getElementById("attributionsPage").style.display="block";
                document.getElementById("dicePage").style.display="none";
                document.getElementById("navbar").style.display="flex";
            break;
        }
    }
}
}
//dice first image
{
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
}
//dice roll result calculation
{
const rollButton=document.getElementById("rollButton");
const skipButton=document.getElementById("skip");
var rollResult, rollResultText;
rollButton.addEventListener("click",e=>{
    rollResult=Math.floor(Math.random() * 6) + 1;
    document.getElementById("button-wrap").style.opacity="0";
    function cubeRepair()
    {
        document.getElementById("button-wrap").style.opacity="1"
    }
    setTimeout(cubeRepair,1);
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
    switch(rollResult)
    {
        case 1:
            rollResultText="Rotate";
        break;
        case 2:
            rollResultText="Opacity";
        break;
        case 3:
            rollResultText="Rainbow";
        break;
        case 4:
            rollResultText="Key Event";
        break;
        case 5:
            rollResultText="Find Clues";
        break;
        case 6:
            rollResultText=" ??? ";
        break;
    }
    document.getElementById("button-wrap").style.animation="kurwaJebanaKostka 2s ease-in-out";
    document.getElementById("button-wrap").innerHTML="<p>You hit "+rollResult+"! "+rollResultText+"</p>";
    setTimeout(diceAppear,4000);
});
skipButton.addEventListener("click",e=>{
    document.getElementById("diceImg").style.animation="rotating 1s ease-in-out";
    document.getElementById("button-wrap").innerHTML="<p>Skipped</p>";
    setTimeout(diceAppear,1000)
});
}
//contact page
{
const linkedin=document.getElementById("linkedinButton");
const github=document.getElementById("githubButton");

linkedin.addEventListener("click",e=>{
    window.open("https://www.linkedin.com/in/kamil-wr%C3%B3bel-35b559230/", "_blank");
});
github.addEventListener("click",e=>{
    window.open("https://github.com/KamilasBro", "_blank");
});
}
//works page
{
    const underbeer=document.getElementById("underbeer");
    underbeer.addEventListener("click",e=>{
        window.open("https://underbeer.netlify.app/", "_blank");
    });
    const d2calc=document.getElementById("d2calc");
    d2calc.addEventListener("click",e=>{
        window.open("https://diablo2resurrectedcalculator.netlify.app/", "_blank");
    });
    const SPG=document.getElementById("SPG");
    SPG.addEventListener("click",e=>{
        window.open("https://simplepasswordgeneratorspg.netlify.app/", "_blank");
    });
    const lukigame=document.getElementById("lukigame");
    lukigame.addEventListener("click",e=>{
        window.open("https://lukibrickgamealfa.netlify.app/", "_blank");
    });
    const lukiOOOO=document.getElementById("lukiOOOO");
    lukiOOOO.addEventListener("click",e=>{
        window.open("https://iflukihitthecorner.netlify.app/", "_blank");
    });
    const samplesite=document.getElementById("samplesite");
    samplesite.addEventListener("click",e=>{
        window.open("https://samplewebsiteessa.netlify.app/", "_blank");
    });
    const officeowo=document.getElementById("officeowo");
    officeowo.addEventListener("click",e=>{
        window.open("https://officeowo.pl/", "_blank");
    });
    const loginsim=document.getElementById("loginsim");
    loginsim.addEventListener("click",e=>{
        window.open("https://loginsimulator.netlify.app/", "_blank");
    });
    const tenzies=document.getElementById("tenzies");
    tenzies.addEventListener("click",e=>{
        window.open("https://tenziesgiera.netlify.app/", "_blank");
    });
}
//rolls
{
function roll1()
{
    document.getElementById("logo").style.animation="roll1 3s ease-in-out infinite alternate";
    document.getElementById("aboutPageImg").style.animation="roll1 3s ease-in-out infinite alternate";
    document.getElementById("skillsImg").style.animation="roll1 3s ease-in-out infinite alternate";
    document.getElementById("linkedinButton").style.animation="roll1 3s ease-in-out infinite alternate";
    document.getElementById("githubButton").style.animation="roll1 3s ease-in-out infinite alternate";
    document.getElementById("attributionsPageImg1").style.animation="roll1up 3s ease-in-out infinite alternate";
    document.getElementById("attributionsPageImg2").style.animation="roll1down 3s ease-in-out infinite alternate";
}
function roll2()
{
    document.getElementById("main").style.animation="roll2 2s infinite ease-in-out alternate";
}
function roll3()
{
    //navbar
    {
        document.getElementById("navbar").style.animation="roll3boxshadow 8s infinite ease-in-out"
    }
    //homePage
    {
    document.querySelector("#homePage #pageTitle").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector(".textDiv h1").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector(".textDiv p").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#homePage .mainCodingDec1").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#homePage .mainCodingDec2").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#homePage .mainCodingDec3").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#homePage .mainCodingDec4").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#homePage .textCodingDec1").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#homePage .textCodingDec2").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#homePage .textCodingDec3").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#homePage .textCodingDec4").style.animation="roll3 8s ease-in-out infinite";
    }
    //aboutPage
    {
    document.querySelector("#aboutPage #pageTitle").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector(".div1 p").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector(".div2 p").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#aboutPage .mainCodingDec1").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#aboutPage .mainCodingDec2").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#aboutPage .mainCodingDec3").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#aboutPage .mainCodingDec4").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#aboutPage .textCodingDec3").style.animation="roll3 8s ease-in-out infinite";
    document.querySelector("#aboutPage .textCodingDec4").style.animation="roll3 8s ease-in-out infinite";
    }
    //skillsPage
    {
        document.querySelector("#skillsPage #pageTitle").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#skillsPage .mainCodingDec1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#skillsPage .mainCodingDec2").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#skillsPage .mainCodingDec3").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#skillsPage .mainCodingDec4").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#skillsPage .textCodingDec3").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#skillsPage .textCodingDec4").style.animation="roll3 8s ease-in-out infinite";
    }
    //contactPage
    {
        document.querySelector("#contactPage #pageTitle").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#contactPage .mainCodingDec1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#contactPage .mainCodingDec2").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#contactPage .mainCodingDec3").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#contactPage .mainCodingDec4").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".form-wrapper h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".formDiv1 label").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".formDiv1 input").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".formDiv2 label").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".formDiv2 textarea").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#submit").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".form-wrapper").style.animation="roll3border 8s ease-in-out infinite";
    }
    //worksPage
    {
        document.querySelector("#worksPage #pageTitle").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#worksPage .mainCodingDec1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#worksPage .mainCodingDec2").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#worksPage .mainCodingDec3").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#worksPage .mainCodingDec4").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work1 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work2 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work3 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work4 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work5 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work6 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work7 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work8 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work9 h1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".work10 h1").style.animation="roll3 8s ease-in-out infinite";
    }
    //attributionsPage
    {
        document.querySelector("#attributionsPage #pageTitle").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#attributionsPage .mainCodingDec1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#attributionsPage .mainCodingDec2").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#attributionsPage .mainCodingDec3").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#attributionsPage .mainCodingDec4").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".ul1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".ul2").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".ul3").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector(".ul4").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#textDecAP1").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#textDecAP2").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#textDecAP3").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#textDecAP4").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#textDecAP5").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#textDecAP6").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#textDecAP7").style.animation="roll3 8s ease-in-out infinite";
        document.querySelector("#textDecAP8").style.animation="roll3 8s ease-in-out infinite";
    }
}
function roll4()
{
    document.addEventListener('keydown', (event) => {
        var keyEffect=Math.floor(Math.random() * 10) + 1;
        var R1=Math.floor(Math.random() * 256);
        var G1=Math.floor(Math.random() * 256);
        var B1=Math.floor(Math.random() * 256);
        var R2=Math.floor(Math.random() * 256);
        var G2=Math.floor(Math.random() * 256);
        var B2=Math.floor(Math.random() * 256);
        switch(keyEffect)
        {
            case 1:
                document.body.style.background="radial-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 2:
                document.body.style.background="linear-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 3:
                document.body.style.background="linear-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 4:
                document.body.style.background="linear-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 5:
                document.body.style.background="linear-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 6:
                document.body.style.background="linear-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 7:
                document.body.style.background="linear-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 8:
                document.body.style.background="linear-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 9:
                document.body.style.background="linear-gradient(90deg, rgb("+R1+","+G1+","+B1+") 50%, rgb("+R2+","+G2+","+B2+") 100%)";
            break;
            case 10:
                document.body.style.background="linear-gradient(90deg, rgba(18,17,17,1) 50%, rgba(4,4,4,1) 100%)";
            break;
        }
    }, false);
}
function roll5()
{
    document.querySelector("#homePage .mainCodingDec3").innerHTML="5";
    document.getElementById("clue2").style.display="block";//3
    document.getElementById("clue3").style.display="block";//4
    document.querySelector("#skillsPage #pageTitle").innerHTML="Clue nr4: 6";
    document.getElementById("submit").innerHTML="7";
    document.getElementById("ul5").innerHTML="1";
    console.log("Clue nr7: 5");
}
function roll6()
{
    window.location.replace('secret.html');
}
}




