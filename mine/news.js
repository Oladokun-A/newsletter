
document.getElementById("login").addEventListener("submit", function(event){
    event.preventDefault()
    const emailInput = document.getElementById("Email")
    const email = emailInput.value
    const errorMessage = document.getElementById("errorMessage")
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailPattern.test(email)){
        window.location.href = "success.html?email=" + encodeURIComponent(email)
    }
    else{
        errorMessage.textContent = "valid email required"
        emailInput.style.border= "2px solid hsl(4, 100%, 67%)"
        emailInput.style.color= "hsl(4, 100%, 67%)"
        emailInput.style.backgroundColor = "hsl(0, 30%, 95%)"
    }
})