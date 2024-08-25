let btnEl = document.querySelector("#btn")
const colorList = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
let color = ""

btnEl.addEventListener("click", function(){
  color = randomColor()
  document.body.style.backgroundColor = color
  btnEl.textContent = color
})

function randomColor() {
  color = "#"
  for (let i = 0; i < 6; i++) {
    color += colorList[Math.floor(Math.random()*15)]
  }
  return color
}