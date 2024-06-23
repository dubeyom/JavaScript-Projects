const left = document.getElementById("left")
const right = document.getElementById("right")
const slider = document.getElementById("slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")
// for here we will use a loop for creating a translate because 2nd pic
// will come on traslateX=800 and third will cometransformX=2400 like this...

 
let slideNumber = 1
 const length = images.length

 for(let i = 0 ; i < length ; i++){
    const div = document.createElement("div")
    div.className = "button"
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white"

const resetBackground = () => {
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent"
    })
}



buttons.forEach((button , i) => {
    button.addEventListener("click" , ()=>{
    slider.style.transform = `translateX(-${i * 1600}px)`
    resetBackground()
    button.style.backgroundColor = "white"     
})
})

const changeColor = () => {
resetBackground()
 buttons[slideNumber - 1].style.backgroundColor= "white"
}

const nextSlide = () =>{
    slider.style.transform = `translateX(-${slideNumber * 1600}px)`
        slideNumber++
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 1600}px)`
    slideNumber--
}

const firstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slideNumber = 1
}

const lastSlide = () => {
    slider.style.transform = `translate(-${(length - 1) * 1600}px)`
    slideNumber = length
}


    right.addEventListener("click" , ()=> {
        slideNumber < length ? nextSlide() : firstSlide() 
        changeColor()
        }
    )
 


left.addEventListener("click" , ()=>{
   slideNumber > 1 ? prevSlide() : lastSlide()
    resetBackground()
    changeColor()
})




