const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function (url) {
  let result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

function signOff() {
  localStorage.removeItem("user");
  localStorage.removeItem("firstSurname");
  localStorage.removeItem("firstName");
  localStorage.removeItem("secondName");
  localStorage.removeItem("secondSurname");
  localStorage.removeItem("telephone");
}

document.getElementById("user").innerHTML = `
<div class="container-fluid">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="nombreUsuario" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        </a>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="nombreUsuario">
          <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
          <li id="perfilID"><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
          <li onclick="signOff()"><a class="dropdown-item" href="index.html">Cerrar sesión</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>`

document.getElementById("nombreUsuario").innerHTML = localStorage.getItem("user")

if(!(localStorage.getItem("user"))){
  document.getElementById("perfilID").innerHTML =`<a class="dropdown-item" href="index.html">Mi perfil</a>`
}