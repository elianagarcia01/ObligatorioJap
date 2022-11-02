var form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", validateForm, true);
}

function validateForm(event) {
  event.preventDefault()
  let valorEmail = document.forms["myForm"]["email"].value;
  let valorContraseña = document.forms["myForm"]["contraseña"].value;
  let valorUsuario = document.forms["myForm"]["nameUs"].value;

   if (valorUsuario == "") {
    let inputUser = document.querySelector("#nameUsInput")
    inputUser.style.border = "1px solid red"
    let indicacionNameUs = document.getElementById("indicacionNameUs")
    indicacionNameUs.innerHTML = "Ingresa tu nombre de usuario"
    indicacionNameUs.style.color = "red"
    indicacionNameUs.style.fontSize = "13px"
  }

  if (valorEmail == "") {
    let inputEmail = document.querySelector("#emailInput")
    inputEmail.style.border = "1px solid red"
    let indicacionEm = document.getElementById("indicacionEm")
    indicacionEm.innerHTML = "Ingresa tu Email"
    indicacionEm.style.color = "red"
    indicacionEm.style.fontSize = "13px"
  }
  if (valorContraseña == "") {
    let inputPass = document.querySelector("#passInput")
    inputPass.style.border = "1px solid red"

    let indicacionPass = document.getElementById("indicacionPass")
    indicacionPass.innerHTML = "Ingresa tu contraseña"
    indicacionPass.style.color = "red"
    indicacionPass.style.fontSize = "13px"
  }

  if (valorEmail !== "" && valorContraseña !== "" && valorUsuario!== "") {
    window.location.href = "home.html"
    localStorage.setItem("user", valorUsuario);
    localStorage.setItem("email", valorEmail);
  }
}


