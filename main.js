//랜덤 번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤 번호가 < 유저번호 down
// 랜덤 번호가 > 유저번호 up
// reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다. 더 이상 추측불가 !(버튼이 disable된다.)
// 유저가 1과 100 범위 밖에 숫자를 입력하면 알려준다. 친절하게 기회를 깍지않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다.
// 숫자를 알아서 입력창에서 삭제될 수 있도록 하는 기능
// 게임이 끝냈다는 disable.


let computerNum = 0
let playButton = document.getElementById("play-button") // document는 이 웹사이트 그 자체다.
let userInput = document.getElementById("user-input") // 유저의 값을 가져온다.
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5; // 5번 기회가 있고, 한 번씩 기회가 깍인다.
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset) //reset이라는 함수를 만들어준다.
userInput.addEventListener("focus", function () {
    userInput.value = "";
}); // focus기능. 

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1  // Math.random 함수 :랜덤한 숫자를 뽑을 수 있게 도와주는 함수. Math.floor(): 소수점을 버리는
                                                        // 1을 마지막에 더한 이유는 0~100의 숫자가 아닌 1부터 100이라는 숫자의 범위를 설정하기 위해서.
    console.log("정답::", computerNum)
}

function play() {
    let userValue = userInput.value;

    // 값의 유효성 검사
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해주세요."
        return; // 종료시키는 역할을 한다.
    }
    // 데이터 유효검사
    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회:${chances}번`// 정적인 값말고 동적인 값
    console.log("chance", chances)
    
    if (userValue < computerNum) {
        resultArea.textContent = "UP !!!!"
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!!!!"
    } else {
        resultArea.textContent = "맞췄습니다."
        gameOver = true; //맞췃을 때 disabled.
    }
    
    history.push(userValue) // 입력한 값 히스토리 배열에 저장.
    console.log(history)

    if (chances < 1) {
        gameOver = true;// 게임 오바 변수도 만들어줘야 한다.
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    // user input 창이 깨끗하게 정리되고,
    userInput.value = "" // 유저 인풋에 value값을 = "" 아무것도 없이 한다.
    // 새로운 번호가 생성되고,
    pickRandomNum() // 함수를 그대로 불러주는 거

    resultArea.textContent = "결과값이 여기 나옵니다."

}
// 리셋이 어떤 일을 하는 걸까? 
pickRandomNum()

