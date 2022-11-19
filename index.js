// console.log("hello")

const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".ty-container")

const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rateButton = document.querySelectorAll(".rate-btn")

submitButton.addEventListener("click", () => {
    mainContainer.hidden = true;
    thanksContainer.classList.remove("hidden")
})

rateButton.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})