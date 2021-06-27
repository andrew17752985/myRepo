document.getElementById("id_3").addEventListener("click", listener3);

let chislo;

function listener3(){
    chislo = prompt('введіть трьохзначне число');
    if(chislo.length == 3){
        if(chislo[0] == chislo[1] || chislo[1] == chislo[2] || chislo[0] == chislo[2]){
            alert("Ти ввів число, яке містить хоча б дві однакові цифри");
        }else {
            alert("Ти ввів число, яке не містить однакових цифр");
        }
    } else {
        alert("Ти дурачок?");
    }
}




