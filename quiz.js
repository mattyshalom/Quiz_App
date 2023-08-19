//Question bank
var questionBank = [
    {
        question : 'OS computer abbreviation usually means ?',
        Option : ['Order of Significance', 'Open Software', 'Operating System', 'Optical Sensor'],
        answer : 'Operating System'
    },
    {
        question : 'Entomology is the science that studies',
        Option : ['Behavior of human beings', 'The origin and history of technical and scientific terms', 'The formation of rocks', 'Insects'],
        answer : 'Insects'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        Option : ['Asia', 'Africa', 'Europe', 'Australia'],
        answer : 'Africa'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        Option : ['Physics and Chemistry', 'Physiology or Medicine', 'Literature, Peace and Economics', 'All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Epsom (England) is the place associated with',
        Option : ['Horse racing', 'Polo', 'Shooting', 'Snooker'],
        answer : 'Horse racing'
    },
    {
        question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted inFor which of the following disciplines is Nobel Prize awarded?',
        Option : ['1967', '1968', '1968', '1922'],
        answer : '1967'
    },
    {
        question : 'Exposure to sunlight helps a person improve his health because',
        Option : ['the infrared light kills bacteria in the body', 'resistance power increases', 'the pigment cells in the skin get stimulated and produce a healthy tan', 'the ultraviolet rays convert skin oil into Vitamin D'],
        answer : 'the ultraviolet rays convert skin oil into Vitamin D'
    },   
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-Container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0; a<span.length; a++) {
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].Option[0];
    option1.innerHTML= questionBank[i].Option[1];
    option2.innerHTML= questionBank[i].Option[2];
    option3.innerHTML= questionBank[i].Option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of '+' '+ questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length) 
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion() {
    if(i<questionBank.length-1)
    {
    i=i+1;
    displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event handler
function backToQuiz(){
    location.reload();
}

//function to check answer
function checkAnswer(){
    var answerBank= document.getElementById ('answerBank');
    var answers= document.getElementById ('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0; a<questionBank.length; a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
