
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor){
        const taxa = 0.98;
        return this._sacar(valor, taxa);
    }
}
