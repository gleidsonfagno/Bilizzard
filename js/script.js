// modal
const button_bar = document.querySelector(".button_bar")
const button_close = document.querySelector(".button_close")
const modal = document.querySelector(".modal")

button_bar.addEventListener("click", (event) =>{
    event.preventDefault()

})

function chamarModal(){
    modal.style.display = "block"
}
button_close.addEventListener("click", (event) =>{
    event.preventDefault()

    modal.style.display = "none"
})