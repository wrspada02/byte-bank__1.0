
/* 
Ser autenticavel significa ter o metodo "autenticar"
*/

    export class sistemaAutenticacao{

        static login(autenticavel, senha){
            if(sistemaAutenticacao.ehAutenticavel(autenticavel)){
                return autenticavel.autenticar(senha);
            }
            return false;
        }     
        
        static ehAutenticavel(autenticavel){
            return "autenticar" in autenticavel && 
            autenticavel.autenticar instanceof Function;
        }
    }