// Recebe a referência da tabela
let tabela = document.querySelector('#tabelaVeiculos');

// Adiciona o evento de clique duplo
tabela.addEventListener('dblclick', function (event) {

      /** Verifica se o alvo do clique foi uma célula da tabela 
       * Caso seja, obtemos o elemento pai desta cécula (a linha da tabela) e removemos a linha por completo
       */
      if (event.target.nodeName === 'TD') {
         event.target.parentNode.remove();
      }

   });