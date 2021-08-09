document.getElementById("id_6").addEventListener("click", listener6);

let chislo2;
const numbers = {
    "1":"!",
    "2":"@",
    "3":"#",
    "4":"$",
    "5":"%",
    "6":"^",
    "7":"&",
    "8":"*",
    "9":"(",
    "0":")",
    "=":"+",
    "-":"_"
}

function listener6(){
    chislo2 = prompt("Введіть число:");
    alert(numbers[chislo2]);
}