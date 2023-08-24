const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenarPreco);
let crescente = false;

function ordenarPreco() {
  let livrosOrdenados;

  crescente
    ? ((livrosOrdenados = livrosComDesconto.sort((a, b) => b.preco - a.preco)),
      (crescente = false))
    : ((livrosOrdenados = livrosComDesconto.sort((a, b) => a.preco - b.preco)),
      (crescente = true));

  exibirOsLivrosNaTela(livrosOrdenados);
}
