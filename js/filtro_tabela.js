// Recebe a referência do campo input de filtro
let campoFiltro = document.querySelector('#filtrarTabela');

// Adiciona o evento ao soltar a tecla do teclado
campoFiltro.addEventListener('keyup', function () {

   /** Variável que recebe o valor digitado no campo de filtro 
    * a função toLowerCase() transforma todas as letras em minúsculas
    */
   let valorFiltro = campoFiltro.value.toLowerCase();

   /** Estrutura de repetição que percorre cada linha da tabela
    * Array.from() converte o vetor do tipo HTMLCollection para um vetor simples,
    * tornando possível a iteração do vetor com forEach(). Se utilizar forEach
    * com um vetor de HTMLCollection o console acusará um erro onde não existe
    * a função forEach
    */
   Array.from(corpoTabela.rows).forEach(function (tr) {

      // Recebe o valor do texto da célula da tabela correspondente a marca
      nomeMarca = tr.cells[0].textContent.toLowerCase();

         /* Verifica se o nome da marca da célula correspondente 
         possui o valor do campo input de filtro */
         if (nomeMarca.includes(valorFiltro)) {
            // Remove a classe para tornar a linha visível
            tr.classList.remove('invisivel');
         } else {
            // Adiciona a classe para tornar a linha invisível
            tr.classList.add('invisivel');
         }

   });

});