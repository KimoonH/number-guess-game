//랜덤 번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤 번호가 < 유저번호 down
// 랜덤 번호가 > 유저번호 up
// reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다. 더 이상 추측불가 !(버튼이 disable된다.)
// 유저가 1과 100 범위 밖에 숫자를 입력하면 알려준다. 친절하게 기회를 깍지않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다.

let computerNum = 0
let playButton = document.getElementById("play-button") // document는 이 웹사이트 그 자체다.
let userInput = document.getElementById("user-input") // 유저의 값을 가져온다.
let resultArea = document.getElementById("result-area")

playButton.addEventListener("click",play)

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1  // Math.random 함수 :랜덤한 숫자를 뽑을 수 있게 도와주는 함수. Math.floor(): 소수점을 버리는
                                                        // 1을 마지막에 더한 이유는 0~100의 숫자가 아닌 1부터 100이라는 숫자의 범위를 설정하기 위해서.
    console.log("정답::", computerNum)
}

function play() {
    let userValue = userInput.value;
    if (userValue < computerNum) {
        resultArea.textContent = "UP !!!!"
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!!!!"
    } else {
        resultArea.textContent = "맞췄습니다."
    }
}

pickRandomNum()
