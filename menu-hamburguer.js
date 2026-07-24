/*  clicar no button 

- mostrar/esconder o menu
- alterar propriedades de acessibilidade
- trocar o ícone do menu

*/

const btnMenu = document.getElementById("btn-menu")
const navPrincipal = document.getElementById("navegacao-primaria")
const icone = btnMenu.querySelector("i")

// addEventListener - serve para observar ações/eventos em elementos do HTML
// e excutar uma função quando esse evento acontece
// addEventListener(evento/ação, função)
btnMenu.addEventListener("click", abrirMenu)

function abrirMenu() {
  // navPrincipal.style.display = "block"

  // toggle - adicione/remove a classe
  navPrincipal.classList.toggle("nav-ativa")


  // verifica se o menu está aberto. O método contains, retorna verdadeiro ou falso
  const menuAberto = navPrincipal.classList.contains("nav-ativa")

  // Atualiza acessibilidade
  btnMenu.setAttribute("aria-expanded", menuAberto)

  if (menuAberto) {
    icone.classList.remove("bi-list")
    icone.classList.add("bi-x")
  } else {
    icone.classList.remove("bi-x")
    icone.classList.add("bi-list")
  }
}