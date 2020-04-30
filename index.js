var h1 = document.querySelector(".about-a")
var variable = ""
var button = document.querySelector(".f-submit")
button.addEventListener("click", function(event){
    h1.innerText = "ne about"
    variable = event.target.innerText
    alert(variable) 
})

console.log(h1) 

