const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
const buttonTheme = document.querySelector("#theme")
const body = document.querySelector("body")
const iconTheme = document.querySelector("#theme")

button.addEventListener("click", add)
buttonTheme.addEventListener("click", alterTheme)
form.addEventListener("change", save)

function alterTheme() {
  if (body.style.backgroundColor != "white") {
    body.style = "background-color: white"
    iconTheme.innerHTML = "🌙"
  } else {
    body.style = "background-color: #09090a"
    iconTheme.innerHTML = "☀"
  }
}

function add() {
  const today = new Date().toLocaleDateString("pt-BR").slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já existe no registro 🔴")
    return
  }

  alert("Dia adicionado com sucesso 🟢")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
