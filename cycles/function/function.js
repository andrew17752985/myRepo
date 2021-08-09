
// let zminna;

// function firstFunction(chislo1, chislo2, chislo3){
//     let result = chislo1 + chislo2 - chislo3;
//     console.log(result);
//     if(true){
//        firstFunction(1, 2, 0);  
//     }
   
//     return result;
// }

// zminna = firstFunction(1, 2, 0);
// console.log(zminna);

// const mmm = function (d, j, l){
// return d+j;
// }

// const vvv = () => {}

function firstFunction(vhidnii1=prompt('Введіть перше число'), vhidnii2=prompt("Введіть степінь")){
   let result = Math.pow(vhidnii1, vhidnii2);
   let pershii= document.getElementById("idishka1");
   pershii.innerHTML+= ` ${vhidnii1}`;
   let drugii= document.getElementById("idishka2");
   drugii.innerHTML+= ` ${vhidnii2}`;
   let tretii= document.getElementById("idishka3");
   tretii.innerHTML+= ` ${result}`;
   pershii.addEventListener("click", function(){
       alert("Ти лох!");
   })
   drugii.addEventListener("click", function(){
    alert("Всеодно лох!!");
   })
   tretii.addEventListener("click", function(){
    alert("Тричі лох!");
   })
}

firstFunction();








