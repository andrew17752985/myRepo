document.getElementById("id_5").addEventListener("click", listener5);

function listener5(){
    let result = 0;
    alert('прівєтіки5');

   
    const questions = [
        {
            question: "Земля кругла?(y/n)",
            answ: "y"
        }, 
        {
             question: "5*0?",
             answ: "0"
            },
        {
             question: "Котики милі?(y/n)",
             answ: "y"
            },
        { 
            question: "А собачки милі?(y/n)",
            answ: "y"
        },
        {
             question: "А шашлички любиш?(y/n)",
             answ: "y"
            }
    ]

    for(let i=0; i<questions.length; i++){
        let ans = prompt(questions[i].question);
        if(ans == questions[i].answ){
            result++;
        }
    }
    alert(`Кількість правильних відповідей: ${result}`);
    

}