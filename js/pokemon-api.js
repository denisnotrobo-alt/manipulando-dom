const formPokemon = document.getElementById("pokemon-form");
const inputPokemon = document.getElementById("pokemon-input");

const pokemonCard = document.querySelector(".pokemon-card");

console.log(pokemonCard);

formPokemon.addEventListener("submit", buscarPokemon);

async function buscarPokemon(event) {
  event.preventDefault();

  const pokemon = inputPokemon.value.trim().toLowerCase();

  if (pokemon === "") {
    alert("Digite o nome de um pokémon");
    inputPokemon.focus();
    return;
  }

  try {
    // await - aguardar
    //fetch - buscar/pegar algo no servidor
    // estamos dizendo para o navegador aguardar(await) a busca(fetch) de dados no servidor
    const resposta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );

    console.log(resposta);

    if (!resposta.ok) {
      console.error("Pokémon não encontrado");
      return;
    }

    // Lê o corpo da resposta e converte o JSON em um objeto JavaScript
    const dadosPokemon = await resposta.json();
    console.log(dadosPokemon);

    pokemonCard.innerHTML = `
      <section class="pokemon-resultado" id="pokemon-resultado">
        <img src="${dadosPokemon.sprites.other["official-artwork"].front_default}" alt="" id="pokemon-imagem" />
        <h3 id="pokemon-nome"> ${dadosPokemon.name} </h3>
        <p id="pokemon-altura"> ${dadosPokemon.height} </p>
        <p id="pokemon-peso"> ${dadosPokemon.weight} </p>
      </section>
    `;
  } catch (error) {
    console.error(error);
  }

  // remover ao finalizar função
  console.log("Ditto");
}
