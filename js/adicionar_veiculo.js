// Recebe a referência do formulário e adiona o evento de submissão
document.querySelector('#formaAdiciona')
   .addEventListener('submit', function (event) {

      // Remove o evento padrão de submissão da página (Reload da página)
      event.preventDefault();

      // Recebe um objeto com todos os dados do formulário - marca, modelo, ano e cor
      let elementosFormulario = getElementosDoFormulario();

      // Objeto que vai obter todos os estados de validação de cada input 
      let dadosValidos = {};

      /* Atribui o resultado da validação (Verdadeiro ou falso) para os 
         atributos do objeto dadosValidos */
      dadosValidos.marca = validador.validaMarca(elementosFormulario.marca);
      dadosValidos.modelo = validador.validaModelo(elementosFormulario.modelo);
      dadosValidos.ano = validador.validaAno(elementosFormulario.ano);
      dadosValidos.cor = validador.validaCor(elementosFormulario.cor);

      /* Verifica se pelo menos um dos campos está inválido. Caso esteja,
         não será inserido o veículo na tabela */
      if (!dadosValidos.marca || !dadosValidos.modelo ||
         !dadosValidos.ano || !dadosValidos.cor) {
         return;
      }

      // Chama função que adiciona os dados do novo veículo na tabela
      adicionarVeiculo(elementosFormulario);

      // limpa os dados do formulário
      limparFormulario();

   });

// Função para adicionar um novo veículo na tabela
function adicionarVeiculo(elementosFormulario) {

   // Recebe a referência para a tabela
   let corpoTabela = document.querySelector('#tabelaVeiculos > tbody');

   /* Cria um novo elemento HTML - Uma linha de uma tabela - Aqui colocaremos
      as nossas td`s (Colunas da linha da tabela) */
   let tr = document.createElement('tr');
   tr.innerHTML = getTemplateDaLinhaDaTabela(elementosFormulario);

   // Adiciona a nova linha de tabela criada para a nossa tabela principal
   corpoTabela.appendChild(tr);

}

// Monta um objeto com os dados do formulário submetido
function getElementosDoFormulario() {

   /* Recebe a referência do formulário da página para manipulação dos dados 
      dos inputs */
   let formulario = document.querySelector('#formaAdiciona');

   /** Podemos obter todos os elementos inputs diretamente pelo objeto  
    *   do tipo HTMLFormElement
    * 
    *   - Para acessar um elemento input, utilizamos a seguinte sintaxe
    *      + objetoFormulario.<NOME/ID_do_campo_input>
    *
    *   - Para acessar o valor de um elemento input, utilizamos a seguinte sintaxe
    *      + objetoFormulario.<NOME/ID_do_campo_input>.value
    */
   return {
      marca: formulario.marca.value,
      modelo: formulario.modelo.value,
      ano: formulario.ano.value,
      cor: formulario.cor.value
   };

}

/** Retorna um template HTML utilizando "Template String" 
 * 
 * Template String nos fornece a possibilidade inserir expressões embutidas
 * e interpolação de strings de forma simples, prática e poderosa!
 * 
 *    - Para utilizar essa funcionalidade, colocamos um conjunto de palavras
 *    entre aspas invertidas (``). Para interpolação de string, utilizamos
 *    ${<expressão>} para inserir qualquer tipo de dado dentro do contexto
 *    da string. Abaixo alguns exemplos
 *       + let string = `Minha idade é de ${idade} e meu nome é ${nome}`
 *       + let string = `Eu tenho ${animais.length} animais de estimação`
 *       + let string = `A média de todos os alunos é ${obterMedia()}`
 * 
 */
function getTemplateDaLinhaDaTabela(elementosFormulario) {

   return `
   
      <td>${elementosFormulario.marca}</td>
      <td>${elementosFormulario.modelo}</td>
      <td>${elementosFormulario.ano}</td>
      <td>${elementosFormulario.cor}</td>

   `;

}

function limparFormulario() {

   let formulario = document.querySelector('#formaAdiciona');

   console.log(formulario);

   formulario.marca.value = '';
   formulario.modelo.value = '';
   formulario.ano.value = '';
   formulario.cor.value = '';

}