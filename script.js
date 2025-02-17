const btn1 = document.querySelector("#btn12");
const btn2 = document.querySelector("#btn21");
const copydiv = document.querySelector(".cp");
let rgb1 ="#005773";
let rgb2 ="#54d542";
const hexvalues = () => {
    let myhexvalue = "0123456789abcdef";
    let color ="#";
    for(i=0 ; i<6 ; i++){
        color = color + myhexvalue[Math.floor(Math.random()*16)];
    }
    return color;
};

const handlebtn1 = () => {

    rgb1 = hexvalues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    copydiv.innerHTML = `backgroundImage : linear-gradient(to right, ${rgb1},${rgb2})`;
    
};
const handlebtn2 = () => {
    rgb2 = hexvalues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    copydiv.innerHTML = `backgroundImage : linear-gradient(to right, ${rgb1},${rgb2})`;

};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);
copydiv.addEventListener("click", () =>{
    navigator.clipboard.writeText(copydiv.innerText);
})
