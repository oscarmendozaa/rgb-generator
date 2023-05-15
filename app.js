let rgb1 = document.getElementById('rgb1')
let rgb2 = document.getElementById('rgb2')
let rgb3 = document.getElementById('rgb3')

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')

let colorContainer = document.getElementById("color-container")

colorContainer.style.backgroundColor = "rgb(0,0,0)";

num1.addEventListener("input", ()=>{
    rgb1.innerText = num1.value;
    colorContainer.style.backgroundColor = `rgb(${num1.value}, ${num2.value}, ${num3.value})`
    document.documentElement.style.setProperty('--num1-value', num1.value);
})

num2.addEventListener("input", ()=>{
    rgb2.innerText = num2.value;
    colorContainer.style.backgroundColor = `rgb(${num1.value}, ${num2.value}, ${num3.value})`
    document.documentElement.style.setProperty('--num2-value', num2.value);
})

num3.addEventListener("input", ()=>{
    rgb3.innerText = num3.value;
    colorContainer.style.backgroundColor = `rgb(${num1.value}, ${num2.value}, ${num3.value})`
    document.documentElement.style.setProperty('--num3-value', num3.value);
})









