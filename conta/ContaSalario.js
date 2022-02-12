
import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100);
    }

    sacar(valor){
        const taxa = 0.99;
        return this._sacar(valor, taxa);
    }
}