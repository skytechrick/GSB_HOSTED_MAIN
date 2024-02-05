
function D() {
    let MENU_W = document.getElementById("MENU_W");
    MENU_W.addEventListener('click', () => {
        document.getElementById('Aside').style.animationName = "Slide";
        document.getElementById('Background_Menu').style.display = "block";
        document.getElementById('Social_DIV').style.display = "none";

    });
    let ENU_W = document.getElementById("MENU_W_DIV");
    ENU_W.addEventListener('click', () => {
        document.getElementById('Aside').style.animationName = "Slide1";
        setTimeout(() => {
            document.getElementById('Social_DIV').style.display = "block";
            document.getElementById('Background_Menu').style.display = "none";
        }, 500);
    });
    let Background_Menu_BG = document.getElementById("Background_Menu_BG");
    Background_Menu_BG.addEventListener('click', () => {
        document.getElementById('Aside').style.animationName = "Slide1";
        setTimeout(() => {
            document.getElementById('Social_DIV').style.display = "block";
            document.getElementById('Background_Menu').style.display = "none";
        }, 500)
    });
};

D();



function Percentage_Off(a, aa) {
let el = "";
if(a.length > 3){
let d = a.split(",")
d.forEach(element => {
    el = el + element;
});
}else{
el = el + a
}
let Selling_Price_Fun = eval(el);
let news = '';
if(aa.length >3){
let dd = aa.split(",");
dd.forEach(element => {
    news = news + element
});
}else{
news = news + aa
}
let MRP_Price_Fun = eval(news);
let OFF_Value = ((MRP_Price_Fun - Selling_Price_Fun)/MRP_Price_Fun)*100;
let g = "-" + String(Math.floor(OFF_Value)) + "%";
document.getElementsByClassName("MRP_OFF")[0].innerHTML = g;
}

Percentage_Off('999', '1999')

