// Selecting all elements //

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".buttons .continue");
const exit_btn = info_box.querySelector(".buttons .quit");
const restart_btn = info_box.querySelector(".buttons .restart");

const quiz_box = document.querySelector(".quiz_box");

const option_list = document.querySelector(".option_list");

// Starting the quiz //

start_btn.onclick = ()=>{
     info_box.classList.add("activeStart");
}

// Quitting the quiz //

exit_btn.onclick = ()=>{
     info_box.classList.remove("activeStart");
}

// Restarting the quiz //

restart_btn.onclick = ()=>{
     info_box.classList.remove("activeStart");
}

// Accept rules and continue //

continue_btn.onclick = ()=>{
     info_box.classList.remove("activeStart");
     quiz_box.classList.add("startQuiz");
     showQuestions(0);
}

let question_count = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const retake_quiz = result_box.querySelector(".buttons .retake");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Restaking the quiz are you have finished //
retake_quiz.onclick = ()=>{
     window.location.reload();
}

// Quitting the quiz //
quit_quiz.onclick = ()=>{
     window.location.reload();
}


// Moving onto the next question //
next_btn.onclick = ()=>{
     if(question_count < questions.length -1){
          question_count++;
          showQuestions(question_count);
     }else{
          console.log("Questions completed");
          showResultBox();
     }
}
// Selecting the questions from question file //

function showQuestions(index){
     const question_text = document.querySelector(".question_text")
     
     let question_tag = '<span>'+ questions[index].number + "." +questions[index].question +'</span>';
     let option_tag = '<div class ="option">'+ questions[index].options[0] +'<span></span></div>'
                         +'<div class ="option">'+ questions[index].options[1] +'<span></span></div>'
                         +'<div class ="option">'+ questions[index].options[2] +'<span></span></div>'
                         +'<div class ="option">'+ questions[index].options[3] +'<span></span></div>'
     question_text.innerHTML = question_tag;
     option_list.innerHTML = option_tag;

     const option = option_list.querySelectorAll(".option")
     for (let i = 0; i < option.length; i++) {
          option[i].setAttribute("onclick", "optionSelected(this)");
     }
}

let thumbsupIcon = '<i class="material-icons">thumb_up</i></div>';
let thumbsdownIcon = '<i class="material-icons">thumb_down</i></div>';

function optionSelected(answer){
     let userAns = answer.textContent;
     let correctAns = questions[question_count].answer;
     let everyOption = option_list.children.length;
     if(userAns == correctAns){
          userScore += 1;
          console.log(userScore)
          answer.classList.add("correct");
          console.log("Answer is correct");
          answer.insertAdjacentHTML("beforeend", thumbsupIcon);
     }else{
          answer.classList.add("incorrect");
          console.log("Answer is wrong");
          answer.insertAdjacentHTML("beforeend", thumbsdownIcon);
          }
     
     // Once an answer is selected, disable all other options
     for (let i = 0; i < everyOption; i++) {
          option_list.children[i].classList.add("disabled");
     }
}

function showResultBox(){
     info_box.classList.remove("activeStart");
     quiz_box.classList.remove("startQuiz");
     result_box.classList.add("quizResult");
     const scoreText = result_box.querySelector(".final_score");
     if(userScore > 7){
          let scoretag = '<span>You are a Cyber Master!  '+ userScore + ' out of 10 </span>';
          scoreText.innerHTML = scoretag;
     }
     else if(userScore > 5){
          let scoretag = '<span>You are a Cyber Specalist! '+ userScore + ' out of 10</span>';
          scoreText.innerHTML = scoretag;
     }
     else{
          let scoretag = '<span>You are a Cyber Novice! '+ userScore + ' out of 10</span>';
          scoreText.innerHTML = scoretag;
     }
}


