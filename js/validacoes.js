// Objeto que contem todos os métodos de validação do formulário

let validador = {

   // Inicializa as referências de todos os campos de erro - Performance
   erroMarca: document.querySelector('#erroMarca'),
   erroModelo: document.querySelector('#erroModelo'),
   erroAno: document.querySelector('#erroAno'),
   erroCor: document.querySelector('#erroCor'),

   validaMarca: function (marca) {

      if (marca.length == 0) {
         this.erroMarca.innerHTML = 'O campo marca não pode estar em branco';
         return false;
      }

      this.erroMarca.innerHTML = '';

      return true;
   },

   validaModelo: function (modelo) {

      if (modelo.length == 0) {
         this.erroModelo.innerHTML = 'O campo modelo não pode estar em branco';
         return false;
      }

      this.erroModelo.innerHTML = '';

      return true;
   },

   validaAno: function (ano) {

      if (ano < 1950) {
         this.erroAno.innerHTML = 'O campo ano deve ser maior que 1949';
         return false;
      }

      this.erroAno.innerHTML = '';

      return true;
   },

   validaCor: function (cor) {

      if (cor.length == 0) {
         this.erroCor.innerHTML = 'O campo cor não pode estar em branco';
         return false;
      }

      this.erroCor.innerHTML = '';

      return true;
   }

};