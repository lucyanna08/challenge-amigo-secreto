//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = []; 
// Adicione os nomes dos amigos na lista

function adicionarAmigo() {
  const input = document.getElementById("nomeInput");
  const nome = input.value.trim();

  console.log("Adicionando amigo:", nome);

  if (nome === "") {
    alert("Por favor, digite um nome válido!");
    return;
  }

  if (listaDeNomes.includes(nome)) {
    alert("Esse nome já está na lista!");
    return;
  }

  listaDeNomes.push(nome);

  atualizarLista();
  // LIMPA o campo de texto e foca de volta
  input.value = "";
  input.focus();
}
// Função para atualizar a lista visível na página
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  //console.log("Atualizando lista de amigos:", lista);

  listaDeNomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  if (listaDeNomes.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * listaDeNomes.length);
  const sorteado = listaDeNomes[indice];

  const resultado = document.getElementById("resultado");
  resultado.textContent = `🎉 O amigo secreto é: ${sorteado}`;
}

