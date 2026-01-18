const params = new URLSearchParams(window.location.search)
const email = params.get("email")
const mail = document.getElementById("mail")
mail.textContent = email