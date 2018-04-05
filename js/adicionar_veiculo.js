// Função para adicionar um novo veículo na tabela
function adicionarVeiculo() {

   // Recebe a referência para a tabela
   let corpoTabela = document.querySelector('#tabelaVeiculos > tbody');

   // Recebe um objeto com todos os dados do formulário - marca, modelo, ano e cor
   let elementosFormulario = getElementosDoFormulario();

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

   /** Podemos obter todos os elementos inputs utilizando o método elements 
    *   de um objeto do tipo HTMLFormElement
    * 
    *   - Para acessar um elemento input com o método elements, utilizamos a 
    *   seguinte sintaxe
    *      + objetoFormulario.elements.<NOME/ID_do_campo_input>
    *
    *   - Para acessar o valor de um elemento input com o método elements, 
    *   utilizamos a seguinte sintaxe
    *      + objetoFormulario.elements.<NOME/ID_do_campo_input>.value
   */
   return {
      marca: formulario.elements.marca.value,
      modelo: formulario.elements.modelo.value,
      ano: formulario.elements.ano.value,
      cor: formulario.elements.cor.value
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