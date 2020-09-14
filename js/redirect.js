let url = "https://victorbarlier.fr"
function Redirection(url){
  document.location.href = url
}

let body = document.getElementById('bdy')
let body_size = parseInt(window.getComputedStyle(body).getPropertyValue("width"));

if (body_size >= 1025) {
  Redirection(url)
}
