// Recebe a referência do campo input de filtro
let campoFiltro = document.querySelector('#filtrarTabela');

// Adiciona o evento ao soltar a tecla do teclado
campoFiltro.addEventListener('keyup', function () {

   // Recebe a referência para todas as linhas do corpo da tabela
   let linhasTabela = tabela.tBodies[0].rows;
   // Variável que armazenara a referência de cada linha da tabela
   let celulaMarca;
   /** Variável que recebe o valor digitado no campo de filtro 
    * a função toLowerCase() transforma todas as letras em minúsculas
   */
   let valorFiltro = campoFiltro.value.toLowerCase();

   // Estrutura de repetição que percorre cada linha da tabela
   for (let i = 0; i < linhasTabela.length; i++) {

      // Recebe o valor do texto da célula da tabela correspondente a marca
      nomeMarca = linhasTabela[i].cells[0].textContent.toLowerCase();

      /* Verifica se o nome da marca da célula correspondente 
      possui o valor do campo input de filtro */
      if (nomeMarca.includes(valorFiltro)) {
         // Remove a classe para tornar a linha visível
         linhasTabela[i].classList.remove('invisivel');
      } else {         
         // Adiciona a classe para tornar a linha invisível
         linhasTabela[i].classList.add('invisivel');
      }

   }

});