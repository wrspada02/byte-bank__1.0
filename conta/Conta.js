/* Classe abstrata, nao pode ser instanciada. So funciona para ser herdada! */

export class Conta{
    constructor(saldoInicial, cliente, agencia){

        if(this.constructor == Conta){
            throw new Error(`Voce nao deveria instanciar um objeto do tipo conta diretamente!, pois essa e uma classe abstrata`);
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){//Encapsulamento
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    get cliente(){//So da acesso para leitura
        return this._cliente;
    }

    get saldo(){ //Encapsulamento
        return this._saldo;
    }


    /* Metodo abstrato */
    sacar(valor){
        throw new Error(`Metodo sacar da conta e abstrato`);
        }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;   
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;

        }
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}