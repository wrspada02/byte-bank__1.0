
import { Conta } from "./Conta.js";

    
    export class contaCorrente extends Conta{
        static numeroDeContas = 0;
        //Protecao do atributo privado, ocultando ele... So aceita se
        //for uma instancia de "Cliente"
        constructor(saldoInicial, cliente, agencia){//Construtores iniciam atributos do objeto
            super(saldoInicial, cliente, agencia);
            contaCorrente.numeroDeContas += 1;//Ira somar 1 no atributo GERAL da
            //ContaCorrente como um todo e nao para o objeto especifico
            //Se for para o objeto especifico this. ele ira criar a variavel
            //com o valor 1 sempre...
            //Deste modo referencia todas as classes do mesmo modo
            //ATRIBUTO ESTATICO
        }  
        
        //Sobrescrevendo o metodo sacar da classe mae...
        sacar(valor){
            let taxa = 0.9;
            return this._sacar(valor, taxa);

        }
    }