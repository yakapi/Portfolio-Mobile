let burger = document.getElementById('burger')
let burger_ligne1 = document.getElementById('burger-ligne1')
let burger_ligne2 = document.getElementById('burger-ligne2')
let burger_ligne3 = document.getElementById('burger-ligne3')
let container_body = document.getElementById('bdy')

let select = document.getElementById('burger-select')

burger.addEventListener('click', ()=>{
  burger_ligne2.classList.toggle('line-fx2')
  burger_ligne3.classList.toggle('line-fx3')
  burger_ligne1.classList.toggle('line-fx1')
  select.classList.toggle('select-fx')
  container_body.classList.toggle('fx-container')
})
