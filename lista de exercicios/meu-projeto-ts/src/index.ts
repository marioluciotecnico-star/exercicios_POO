import { CalculadoraPreco } from "./utils/calculadora";
import { GerenciadorBatalha } from "./utils/batalha";
import { CalculadoraDelivery } from "./utils/delivery";
import { ProcessadorPix } from "./utils/banco";
import { GestorEmprestimos } from "./utils/biblioteca";
import { GestorEstoque } from "./utils/estoque";

// QUESTÃO 0
const calculadora = new CalculadoraPreco();

console.log(
  calculadora.gerarResumoPedido({
    nomeProduto: "Notebook",
    preco: 3000,
    desconto: 10,
    distancia: 20
  })
);

// QUESTÃO 1
const batalha = new GerenciadorBatalha();

console.log(
  batalha.processarTurno({
    nomeAtacante: "Guerreiro",
    nomeDefensor: "Dragão",
    danoAtaque: 100,
    defesaDefensor: 30,
    ehGolpeCritico: true
  })
);

// QUESTÃO 2
const delivery = new CalculadoraDelivery();

console.log(
  delivery.calcularEntrega({
    distanciaKm: 10,
    valorPedido: 100,
    estaChovendo: true
  })
);

// QUESTÃO 3
const pix = new ProcessadorPix();

console.log(
  pix.processarCobranca({
    nomeEmpresa: "Empresa Tech",
    valorTransacao: 1000,
    tipoChave: "email",
    ehClientePremium: true
  })
);

// QUESTÃO 4
const biblioteca = new GestorEmprestimos();

console.log(
  biblioteca.calcularPrazoDevolucao({
    tituloLivro: "Dom Casmurro",
    diasPadrao: 14,
    ehEstudante: true,
    diasAtrasoAnterior: 3
  })
);

// QUESTÃO 5
const estoque = new GestorEstoque();

console.log(
  estoque.avaliarNecessidadeReposicao({
    nomeProduto: "Teclado",
    quantidadeAtual: 5,
    estoqueMinimo: 10,
    tamanhoLote: 10
  })
);