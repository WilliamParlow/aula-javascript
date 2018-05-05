// Recebe a referência do botão de busca de pacientes
let botaoBusca = document.querySelector('#buscarVeiculo');

// Adiciona o evento de clique do botão
botaoBusca.addEventListener('click', function () {

   // Cria um objeto que manipulará as requisições ajax
   let ajax = new XMLHttpRequest();

   // Define o que será executado quando os veículos forem carregados
   ajax.onreadystatechange = function () {

      /** Verifica se o estado da requisição está completo e foi bem sucedido
       * 
       * readyState: Possui 5 tipos de estado:
       *    - 0 - não inicializado
       *    - 1 - carregando
       *    - 2 - carregado
       *    - 3 - interativo
       *    - 4 - completo
       * 
       * status: Possui 5 estados
       *    - 100: Informações - cabeçalhos
       *    - 200: Sucesso
       *    - 300: Redirecionamento
       *    - 400: Recurso não econtrado
       *    - 500: Erro no servidor
      */
      if (ajax.readyState == 4 && ajax.status == 200) {

         /** Recebe a resposta da requisição e transformamos ela em um array de obetos 
          * JSON.parse() pega a resposta em forma de texto e transforma em um 
          * array de objetos
         */
         let listaVeiculos = JSON.parse(ajax.responseText);
         
         // Percorre todos os veículos da lista e adiciona um por um na tabela
         for (let i = 0; i < listaVeiculos.length; i++) {
            adicionarVeiculo(listaVeiculos[i]);
         }

      }

   };

   /** Abre uma requisição AJAX
    *    - GET: Significa que vamos esperar por uma resposta e receber os dados
    *    - URL: Representa o link de onde está o nosso arquivo contendo os dados dos veículos
    *    - true: Define que a requisição vai ser assíncrona
    */
   ajax.open('GET', 'https://raw.githubusercontent.com/WilliamParlow/aula-javascript/master/json/veiculos.json', true);
   // Envia a requisição AJAX criada com o ajax.open()
   ajax.send();

});