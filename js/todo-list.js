// primeiro, pegamos os elementos
const form = document.getElementById("todo-form")
const input = document.getElementById("tarefa")
const lista = document.getElementById("todo-list")

// sempre que o formulário for enviado, chamaremos a função adicionarTarefa
form.addEventListener("submit", adicionarTarefa)

// o paramentro event sempre é montado pelo navegador. Ele é um objeto contendo informações do evento/ação do usuário
function adicionarTarefa(event) {

  // preventDefault - serve para impedir que um comportamento padrão de algum elemento ocorra
  // no caso do formulário, ele sempre tenta recarregar a página após o envio dos dados
  // com o preventDefault, isso não irá acontecer novamente 
  event.preventDefault()

  // Pegando o texto digitado e removendo espaços em branco no começo e no final
  const textoTarefa = input.value.trim()

  // Não permite tarefas vazias
  if (textoTarefa === "") {
    alert("Digite uma tarefa")
    input.focus()
    return // serve para parar a execução do código, não permite que execute o resto do bloco de código caso essa validação não seja cumprida
  }

  const itemLista = document.createElement("li")
  itemLista.textContent = textoTarefa
  itemLista.classList.add("todo-item")

  const texto = document.createElement("span")

  lista.append(itemLista)
} 
