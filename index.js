const incrementBtn = document.getElementById("increment-btn")
const countDisplay = document.getElementById("count-display")

let count = 0



incrementBtn.addEventListener("click", ()=>{
  count++
  console.log(count)
  countDisplay.innerText = count
})

// console.log(incrementBtn)
