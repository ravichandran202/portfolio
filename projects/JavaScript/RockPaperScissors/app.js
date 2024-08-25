const computerChoice = document.querySelector("#computer-choice")
const userChoice = document.querySelector("#user-choice")
const result = document.querySelector("#result")
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorBtn = document.querySelector("#scissor")

const choiceList = ["rock","paper","scissor"]
const resultList = ["You Won","Computer Won","Draw"]
let uChoice = ""
let cChoice = ""

rockBtn.addEventListener("click",function (){
    uChoice = choiceList[0]
    cChoice = choiceList[Math.floor(Math.random()*3)]
    userChoice.textContent = uChoice
    computerChoice.textContent = cChoice
    result.textContent = checkWinner()
})


paperBtn.addEventListener("click",function (){
    uChoice = choiceList[1]
    cChoice = choiceList[Math.floor(Math.random()*2)]
    userChoice.textContent = uChoice
    computerChoice.textContent = cChoice
    result.textContent = checkWinner()
})


scissorBtn.addEventListener("click",function (){
    uChoice = choiceList[2]
    cChoice = choiceList[Math.floor(Math.random()*3)]
    userChoice.textContent = uChoice
    computerChoice.textContent = cChoice
    result.textContent = checkWinner()
})


function checkWinner() {
    if (uChoice == cChoice){
        return resultList[2]
    } else if ((uChoice == choiceList[0] && cChoice == choiceList[2]) ||
               (uChoice == choiceList[1] && cChoice == choiceList[0]) ||
               (uChoice == choiceList[2] && cChoice == choiceList[1])) {
        return resultList[0]
    } else {
        return resultList[1]
    }
}

