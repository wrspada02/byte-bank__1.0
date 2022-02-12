
    import { Cliente } from "./cliente.js";
    import { Gerente } from "./funcionarios/Gerente.js";
    import { Diretor } from "./funcionarios/Diretor.js";
    import { sistemaAutenticacao } from "./sistemaAutenticacao.js";

    const diretor = new Diretor(`Rodrigo`, 10000, 12345678900);
    diretor.cadastrarSenha(`123456`);
    const gerente = new Gerente(`Ricardo`, 5000, 12378945601);

    const estaLogado = sistemaAutenticacao.login(diretor, `123456`);


    console.log(estaLogado);