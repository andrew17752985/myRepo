// // for (let i = 10; i >= 1; i=i-2) {
// // console.log ("Youre Count: " + i);

// let i = 10;

// do {
//     console.log("Count " + i);
//     i=i-2;
//     if(i == 6){
//          continue;
//     }
//     console.log("gjgjg");
// }while ( i >= 0)
let zminnares = "";
let chisliki = prompt("Введіть число");
for(let j=chisliki; j>=1; j--){
    let proste;

        for (let i = j-1; i > 1; i--){
            if(j % i == 0){
                break;
            }else{
                proste = j; 
            }
        }

    if(proste){
        zminnares = zminnares + ", "+proste;
    }
}
alert(zminnares);

