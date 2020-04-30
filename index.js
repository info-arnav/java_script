var h1 = document.querySelector(".about-a")
var cariable = ""
var button = document.querySelector(".f-submit")
button.addEventListener("click", function(event){
    h1.innerText = "ne about"
    cariable = event.target.innerText
    alert(cariable) 
})

console.log(h1) 

