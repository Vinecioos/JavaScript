//Variavel tipo Numero

const meuNumero = 3;
const numeroUm = 1;
const numeroDois = 2;

const operacaoMat = numeroUm + numeroDois;

console.log(operacaoMat)

//Ponto Flutuante(Numero Decimal(Ou numeros com virgula))

const pontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacaoMat = pontoFlutuanteSemZero + meuNumero;

console.log(novaOperacaoMat)

//NaN = NOT A NUMBER((Não é um numero)numero multiplicado por String)

const teste = "Teste";

console.log(teste * pontoFlutuante)

//Numeros dividido por zero quando dão erro

const dezDividido = 10;
const zeroDividido = 0;

console.log(dezDividido / zeroDividido)
console.log(zeroDividido / zeroDividido)

//Variavel tipo Texto(tanto faz ser com " " ou ' ' exceto...)

const texto1 = "Hello World!";
const texto2 = 'Ola mundo!';
const senha = "TesteString9023";
const stringNumero = "234060";
const citacao = 'O Allied falou"Eu sou gay"';

console.log(citacao)

//concatenação (juntar variavel(+))

const meuNome = "Meu nome é ";
const Cleber = "Cleber"; 

console.log(meuNome + Cleber)

//Template String OU Template Literal
const nome = "João";
const idade = 30;

const frase = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log(frase);


//Emoji ou Escrituras especificas
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Verifica a variavel se ela igual retornando TRUE ou False (Boolean)

const cidade = "belo horizonte";
const input = "Belo Horizonte";
const primeiroNumero = 10;
const segundoNumero = 5;
const terceiroNumero = 10;

const inputMinusculo = input.toLowerCase();//usado para transformara String em minusculo

console.log(cidade === inputMinusculo) 
console.log(primeiroNumero === segundoNumero)
console.log(primeiroNumero == terceiroNumero)


//Contagem de Caracteres

const novaSenha = "NovaSenha11"

console.log(novaSenha.length)

//Var não tem quase nenhuma regra,ela é LIVRE

var altura = 5;
var comprimento = 7;

area = altura * comprimento;

console.log(area)

//Let pode sert alterada ao decorrer do codigo

let Area;
let forma = "retangulo"
let Altura = 10;
let Comprimento = 20;

if(forma === "retangulo"){
Area = Altura * Comprimento;
} else{
    Area = (Altura * Comprimento) / 2; 
}

console.log(Area)

//Const variavel que não pode ter valor alterado,valores fixos

const Forma = "Quadrado"
const Aaltura = 14;
const Ccomprimento = 12;
let Aarea;
//const Aarea; ela ira dar erro caso seja iniciada com const,motivos,const não tem valor alterado e ela sempre tem que acompanhar um numero
if(Forma ==="Quadrado"){
    Aarea = Aaltura * Ccomprimento;
}else{
    Aarea = (Aaltura * Ccomprimento) / 2;
}

console.log(Aarea)

//2 simbolos de == - É usado para comparação entre duas variáveis, independentemente do tipo de dados da variáve
//3 simbolos de === -  usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores