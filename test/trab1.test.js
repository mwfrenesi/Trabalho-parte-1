import Trab1 from '../src/trab1.js';
import assert from 'node:assert';

describe ('Teste da classe de pagamentos, realizar pagamentos e consultar o último pagamento realizado', () => {
    it('Validacao dos pagamentos de boletos e exibir o último', function() {
          //Arange
           const trab1 = new Trab1();
            
          //Act
       
          trab1.pagar('1234-5678-9012', 'Empresa X', 50.00);
          trab1.pagar('9999-9999-9999', 'Samar', 50.87);
          const resultado = trab1.consultarUltimoPagamento();

          // console
          console.log(resultado);

         //Assert
        
          assert.equal(resultado.codigoBarras, '9999-9999-9999');
          assert.equal(resultado.empresa,  'Samar');
          assert.equal(resultado.valor, 50.87);
          assert.equal(resultado.categoria, resultado.valor > 100.00 ? 'cara' : 'padrão');

       


        });
    

   
});
    