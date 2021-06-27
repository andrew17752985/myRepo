document.getElementById("id_2").addEventListener("click", listener2);

let grivnas;
let valuta;

function listener2(){
   grivnas = prompt('введіть суму в гривнях');
   if (typeof grivnas === 'undefined' || grivnas === null || grivnas == ""){
    alert("Ти далбайоб?");
   } else {
     
    alert("Чого так мало?");
    console.log(grivnas);
    valuta = prompt('виберіть валюту: USD, EUR, dogecoin');
    console.log(valuta);
 
    if(valuta=="USD"){
     alert("Вот твої копійки: "+grivnas*27);
    } else if(valuta=="EUR"){
     alert("Вот твої копійки: "+grivnas*30);
    } else if(valuta=="dogecoin"){
     alert("Вот твої копійки: "+grivnas*1000);
    } else {
        alert("Ти точно не дибіл?");
    }
}

   
}

