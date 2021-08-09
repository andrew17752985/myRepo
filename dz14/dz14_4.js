document.getElementById("id_4").addEventListener("click", listener4);

let zamovlennya;

function listener4(){
    zamovlennya = prompt('введіть суму замовення');
    if(zamovlennya <= 500){
        alert(`Ваша сумма замовлення:${zamovlennya}грн\nВаша сумма знижки: ${zamovlennya*0.01}грн\nВаша знижка:1%\nВаша сума до оплати:${zamovlennya-zamovlennya*0.01}грн`);
    }else if(zamovlennya > 500 && zamovlennya <= 1000) {
        alert(`Ваша сумма замовлення:${zamovlennya}грн\nВаша сумма знижки: ${zamovlennya*0.05}грн\nВаша знижка:5%\nВаша сума до оплати:${zamovlennya-zamovlennya*0.05}грн`);  
    }else if(zamovlennya > 1000) {
        alert(`Ваша сумма замовлення:${zamovlennya}грн\nВаша сумма знижки: ${zamovlennya*0.1}грн\nВаша знижка:10%\nВаша сума до оплати:${zamovlennya-zamovlennya*0.1}грн\nІ ДАРУЄМО ТОБІ ЖЛОБУ СЕРТИФІКАТ НА 200 грн!!!`);
    }else{
        alert("Ну ти апять за свайо!");
    }
}

