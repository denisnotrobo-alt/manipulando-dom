/*  clicar no button 

- mostrar/esconder o menu
- alterar propriedades de acessibilidade
- trocar o ícone do menu

*/

const btnMenu = document.getElementById("btn-menu")

// addEventListener - serve para observar ações/eventos em elementos do HTML
// e excutar uma função quando esse evento acontece
// addEventListener(evento/ação, função)
btnMenu.addEventListener("click", abrirMenu)

function abrirMenu() {
  console.log("Clicou no button")
}