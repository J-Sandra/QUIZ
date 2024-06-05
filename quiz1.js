const QuizData = [
    {
        question:"quelle est la charge d'un electron?",
        a: "positive",
        b:"negative",
        c:"neutre",
        correct:"b",

    },
    {
        question:"que veut dire homeomorphisme?",
        a:"bijective et continue",
        b:"continue",
        c:"croissante",
        correct:"a",
    },
    
];

const question1= document.getElementById('question')
const answer1= document.querySelectorAll('.answer')
const Quiz1= document.getElementById('quiz')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const submitBtn= document.getElementById('submit')
const valider= document.getElementById('valider')
const p= document.getElementById('reponse')

let currentQuiz=0
let score=0

loadquiz()

function loadquiz(){
    

    const value=QuizData[currentQuiz]
    question1.innerText=value.question
    a_text.innerText=value.a    
    b_text.innerText=value.b
    c_text.innerText=value.c

}

   
function getSelected(){
    let answer
        answer1.forEach(answerE1 => {
            if(answerE1.checked){
                answer=answerE1.id
            }
})

        return answer
}



    
        valider.addEventListener("click", () => {
            const answer= getSelected()
            
            if(answer) {
            if(answer === QuizData[currentQuiz].correct){
                       
                        p.innerText="Vous avez trouvé la bonne reponse"
        } else{
            p.innerText="c'est pas la bonne reponse"
        }
    }
})   
          
            
                
        
            submitBtn.addEventListener('click', () => {
                p.innerText=""
                const answer= getSelected()
            
                if(answer) {
                if(answer === QuizData[currentQuiz].correct){
                    score++
                }

                currentQuiz++

            if(currentQuiz< QuizData.length){
                loadquiz()
            }

             else {
                Quiz1.innerHTML=  `
                <h2>Vous avez trouver ${score} /${QuizData.length} question correct</h2>

                <button onclick="location.reload()">réessayer</button>
                `
            }
        }
            })    
    

