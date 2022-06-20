//문제 배열
let questions = [
  "What is the HTML?",
  "What is the CSS?",
  "What is the JS?",
  "Who developed this page?",
];

//정답, 선택지 2차원 배열 (0 번째 index 정답 번호 기입, 1 번째 index 부터 선택지 시작)
let choices = [
  [
    2,
    "Header Text Markup Language",
    "HyperText Markup Language",
    "Higher Text Management Language",
    "I don't know",
  ],
  [
    3,
    "Custom Style Sheets",
    "Card Style System",
    "Cascading Style Sheets",
    "Cursed Single Style"
  ],
  [
    1,
    "JavaScript",
    "Jhon's Style",
    "Jacket Suit",
    "Jump Suit"
  ],
  [
    1,
    "HOAN_C"
  ],
];

const questionBoxElement = document.querySelector(".question_box"); //문제 박스 경로
const questionCounterElement = document.querySelector(".counter"); //문제 카운터 경로
const scoreElement = document.querySelector(".score"); //정답 수 카운터 경로
const questionElement = document.querySelector(".question"); //문제 경로

const bodyElement = document.querySelector("body");
const ansElement = document.querySelector(".answer_box"); //선택지 박스 경로


let questionNumber = 0;		//문제 index
let score = 0;		//정답 카운터

//화면 최신화
function updatePage(){
    if(questionNumber == questions.length){ //마지막 문제가 끝나면 아래 코드 실행
        questionBoxElement.parentNode.removeChild(questionBoxElement); // 문제 박스 삭제
        ansElement.parentNode.removeChild(ansElement); // 선택지 박스 삭제
        // 정답 수 / 전채 문제 갯수, 재시작 버튼 출력
        bodyElement.innerHTML = ` 
        <h1 class="main_box" style="text-align: center; font-size: 30px; margin-top: 250px;">Total score: ${score} / ${questions.length}
            <a href="questions.html">
            <br>
                <button class="start_botton">
                   Play Again
                </button>
            </a>
        </h1>
      `;
    return;
    }

    //현재 문제 번호 / 전체 문제 수 출력
    questionCounterElement.innerHTML = `
        Question : ${questionNumber+1}/${questions.length}
    `;
    
    //맞춘 문제 수 / 전체 문제 수 출력
    scoreElement.innerHTML = `
        Score : ${score}/${questions.length}
    `;
    
    //문제 출력
    questionElement.innerHTML = `
        ${questions[questionNumber]}
    `;
    
    // 선택지들 최신화 및 출력
    while (ansElement.hasChildNodes()) {	// ansElement가 자식이 있으면 실행
        ansElement.removeChild( //자식노드 삭제(선택)
            ansElement.firstChild   //제일 첫번 째 노드
        );
    }
    let counter; //
    for(counter = 1; counter < choices[questionNumber].length; counter++){
        ansElement.innerHTML += `
        <div style="position: relative">
        <div class="answer_button" id="ans${counter}" onclick="checkAnswer(${choices[questionNumber][0]}, ${counter})">
            <div class="answer_num">
                ${String.fromCharCode(64 + counter)}
            </div>
            <div class="answer_text">
                ${choices[questionNumber][counter]}
            </div>
        </div>
        </div>
        `;
    }
}

//문제 정답 확인 함수
function checkAnswer(ans, clicked){
    if (ans == clicked){
        console.log("Correct");
        score++;
        // document.getElementById(`ans${clicked}`).style.boxShadow = "20px 20px 60px ##58B684, -20px -20px 60px ##58B684";
    }
    else {
        console.log("Wrong");
        // document.getElementById(`ans${clicked}`).style.boxShadow = "20px 20px 60px #C62828, -20px -20px 60px #C62828";
    }
    setTimeout(() => {
        updatePage();
    }, 0);
    questionNumber++;
}
