const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponivel()
      : filtrarPorCategoria(categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
  if (categoria == "disponível") {
    const valorTotal = precoTotalLivrosDisponiveis(
      aplicarDesconto(livrosFiltrados)
    );
    exibirValorTotalDisponíveis(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponivel() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDisponíveis(valorTotal) {
  elementoParaValorTotalDisponíveis.innerHTML = `
  <div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
`;
}
