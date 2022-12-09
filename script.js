
const app = {

    //You can put the questions here

    quizData : [
        {
            question: 'In which movie Christopher Lloyd is a toon ? ',
            a: 'Back to the future',
            b: 'Jurassic Park',
            c: 'Who framed Roger Rabbit',
            d: 'Terminator',
            correct: 'c'
        }, {
            question: 'Which character played Alan Rickman in Die Hard ?',
            a: 'Hans Gruber',
            b: 'John McClane',
            c: 'Holly Gennero',
            d: 'None of the above',
            correct: 'a'
        }, {
            question: 'In Jurassic Park, what catch phrase does Robert Muldoon say just before dying in Jurassic Park?',
            a: '"This is Sparta !"',
            b: '"Clever Girl ..."',
            c: '"You Shall Not Pass !"',
            d: '"Say hello to my little friend."',
            correct: 'b'
        }, {
            question: 'In Back to The Future, what nationality are the terrorists seeking to recover the plutonium?',
            a: 'Luxembourgish',
            b: 'Italian',
            c: 'Syrian',
            d: 'Lybian',
            correct: 'd'
        }, {
            question: 'In which movie played Rick Moranis (Louis Tully in Ghost Busters) ?',
            a: 'Honey, I Shrunk the kids',
            b: 'The Flintstones',
            c: 'Tron',
            d: 'All of these answers are correct',
            correct: 'd'
        }
    ],

    quiz : document.querySelector('#quiz'),
    answerEls : document.querySelectorAll('.answer'),
    questionEl : document.querySelector('#question'),
    a_text : document.querySelector('#a_text'),
    b_text : document.querySelector('#b_text'),
    c_text : document.querySelector('#c_text'),
    d_text : document.querySelector('#d_text'),
    submitBtn : document.querySelector('#submit'),

    currentQuiz : 0,
    score : 0,


    init : function(){

        app.loadQuiz();
        app.getSelected();
        app.deselectAnswer();
        app.sendAnswer();

    },

    loadQuiz() {
        app.deselectAnswer()
        const currentQuizData = app.quizData[app.currentQuiz];
    
        app.questionEl.innerText = currentQuizData.question;
    
        app.a_text.innerText = currentQuizData.a;
        app.b_text.innerText = currentQuizData.b;
        app.c_text.innerText = currentQuizData.c;
        app.d_text.innerText = currentQuizData.d;
    },
    
    getSelected() {

        let answer = undefined;
    
        app.answerEls.forEach(answerEl => {
            if(answerEl.checked){
                answer = answerEl.id;
            }
        });
    
        return answer;
    },

    deselectAnswer() {
        app.answerEls.forEach((answerEl) => {
           answerEl.checked = false;
        });
    
    },

    sendAnswer(){

        app.submitBtn.addEventListener("click", () => {
        
            const answer = app.getSelected();
        
            if(answer) {
                if(answer === app.quizData[app.currentQuiz].correct){
                    app.score++;
                } 
        
                app.currentQuiz++;
                if(app.currentQuiz < app.quizData.length){
                    app.loadQuiz();
                } else {
                    app.quiz.innerHTML = `<h2>You answered ${app.score}/${app.quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Relaunch the Quizz !</button>`;
                    
                }
                
                } else {

                        document.querySelector(".error-message__container").style.display='block'
                        window.setTimeout(()=>{
                            document.querySelector(".error-message__container").style.display='none'}, 1500);

                    }

        })
                
            
        }
}


app.init()
    

   
    
    
    
   

