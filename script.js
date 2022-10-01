
//function for hiding hamburger menu

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})

//function for light and dark modes

// const button = document.querySelector('.darktoggle');
// const body = document.querySelector('body')


// function darktoggle() {
//     body.classList.toggle('dark-theme');
// }
// button.addEventListener('click', darktoggle);

var icon =document.getElementById("icon");

// icon.onclick = 
function darkness() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-theme")

    var theme;
    if(SetTheme.classList.contains("dark-theme")){
        console.log("Dark mode");
        theme = "DARK";

        icon.src = "images/sun.png";
        icon.title = "lightmode";
    }else{
        console.log("Light mode");
        theme = "LIGHT";
        icon.title = "darkmode";
        icon.src = "images/moon.png";
    }
    
    //saving to localStorage(converting it to JSON)
    localStorage.setItem("PageTheme",
    JSON.stringify(theme));
}icon.onclick = darkness;

// setInterval(() => {
//     let GetTheme =
//     JSON.parse(localStorage.getItem("PageTheme"));
//     console.log(GetTheme);
//     if(GetTheme === "DARK"){
//         document.body.classList = "dark-theme";
//         icon.src = "images/sun.png";
//     }else{
//         document.body.classList = "";
//         icon.src = "images/moon.png";
//     }
//     },);

        let GetTheme =
        JSON.parse(localStorage.getItem("PageTheme"));
        console.log(GetTheme);
        if(GetTheme === "DARK"){
            document.body.classList = "dark-theme";
            icon.src = "images/sun.png";
            icon.title = "lightmode";

        }else{
            document.body.classList = "";
            icon.src = "images/moon.png";
            icon.title = "darkmode";

        }

// var icon =document.getElementById("icon");

// icon.onclick = function() {
//     document.body.classList.toggle("dark-theme");
//     // if(document.body.classList.contains("dark-theme")){
//     //     icon.src = "images/sun.png";
//     //     icon.title= "lightmode";
//     // }else{
//     //     icon.src = "images/moon.png";
//     //     icon.title= "darkmode";
//     // }
// }

//function for calender
try{
document.querySelector(".date-number").innerHTML =  new Date().getDate();
document.querySelector(".year").innerHTML =  new Date().getFullYear();
document.querySelector(".day-name").innerHTML =  new Date().toLocaleString("default" ,{weekday: "long"});
document.querySelector(".month-name").innerHTML =  new Date().toLocaleString("default" ,{month: "long"});
}catch(err){}

//drop down menu home page
try{
let click = document.querySelector('.click');
    let list = document.querySelector('.list');
    click.addEventListener("click",()=>{
        list.classList.toggle('newlist');
    });
}catch(err){}

//load timetables + prep page based on selection

// document.getElementById("prep-section").href="Preperation.html";

function loadCS4() {

        // document.getElementById("cs3").style.display = "none";
        document.getElementById("cs4").style.display = "block";
        document.getElementById("t1").style.display = "none";
        // document.getElementById("cs3Table").style.display="none";
        // document.getElementById("cs4Table").style.display="block";
        document.getElementById("prep-section").href="prep-cs4.html";

        var view = "v1";

        // alert(stuff);
    
    localStorage.setItem('TableView',
    JSON.stringify(view));
}
    
function loadCS3() {

    // document.getElementById("cs4").style.display = "none";
    // document.getElementById("cs3").style.display = "block";
    document.getElementById("cs4").style.display = "block";
    document.getElementById("t1").style.display = "none";
    document.getElementById("prep-section").href="prep-cs3.html";
    


    var view = "v2";

    localStorage.setItem('TableView',
    JSON.stringify(view));
    }

    let stuff = localStorage.getItem('TableView');
    var checkLinks = document.getElementsByClassName('links curve')[0];


    // checkLinks.addEventListener('click', () => {

    // alert(stuff);

    // })

// const tbvalue = JSON.parse(window.localStorage.getItem('Tableview'));
// if(tbvalue === "v1"){
//     document.getElementById("cs4Table").style.display="block";

// }else{
//     // document.getElementById("cs4Table").style.display="none";

// }

    
//printout timetabe

// function tablePrint(){
//     var printContents = document.querySelector('.timetable').innerHTML;
//     var originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
    
//     }

// function tablePrint() {
//     var mywindow =window.open();
//     var content= document.querySelector('.timetable').innerHTML;
//     mywindow.document.write(content);
//     mywindow.print();
// }

function tablePrint() {
    print();
}

// let tempC = JSON.parse(localStorage.getItem("TableView"));
// if(tempC === "v1"){
//     document.getElementById("prep-section").href="prep-cs4.html";
//     // document.getElementById("cs3Table").style.display="block";
// }else if (tempC === "v2"){
//     document.getElementById("prep-section").href="prep-cs3.html";
// }else {
//     document.getElementById("prep-section").href="Preperation.html";
// };

// let tempV = JSON.parse(localStorage.getItem("TableView"));
// if(tempV === "v1"){
//     document.getElementById("cs4Table").style.display="block";
//     document.getElementById("t2").style.display = "none";
//     document.getElementById("prep-section").href="prep-cs4.html";
//     // document.getElementById("cs3Table").style.display="block";
// }else if (tempV === "v2"){
//     document.getElementById("cs3Table").style.display="block";
//     document.getElementById("t2").style.display = "none";
//     document.getElementById("prep-section").href="prep-cs3.html";
// }else if (tempV === "") {
//     document.getElementById("prep-section").href="Preperation.html";
// };