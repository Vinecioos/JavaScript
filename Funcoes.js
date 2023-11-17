// Três Formas de Escrever Funções

//----Declaração de Função

//1)Declara a Função

                    //String
function imprimeTexto(texto){
    console.log(texto)
}

//2)Executa a função (1 ou + vezes)


imprimeTexto("oi");
imprimeTexto("Outro texo")

function soma(){
    return 2 + 2//O return tem que SEMPRE ser a ultima linha pois caso contrario não ira executar oq tem depois dele
}

console.log(soma())

//Chamando uma Função dentro de outra Função
imprimeTexto(soma())


//Prametro de Função

function novaConta(num1, num2) {
return num1 + num2;
}

//Multiplicação
                //Colocando numero 1(Neutro) evita dar NaN quando deixa vazio um parametro
function Multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

//Recebe dois paramentros da da function novaConta 
console.log(Multiplica(novaConta(40,50), novaConta(50,50)))
console.log(Multiplica(novaConta(40,50),))//Aqui esta um exemplo de onde se pode evitar o NaN

/*
console.log(novaConta(3,3))
console.log(novaConta(49,200))
console.log(novaConta(-900,10))
*/

//Ordem dos parametros


function nomeIdade(nome,idade){
    return `Meu nome é ${nome} e eu tenho ${idade}`
}
console.log(nomeIdade(21,"Vinicius"))//Sempre tomar Cuidado com a ordem
console.log(nomeIdade("Vinicius", 21))

//Expressão de Função

const novaSoma = function(num1, num2 ){return num1 + num2};
console.log(novaSoma(1,1))

// Arrow Function

// Geralmente usado para fazer uma function de Uma linha

const nomeArrow =  nome => `meu nome é ${nome}`;
const somaArrow = (num1, num2) => num1 + num2;

console.log(somaArrow(5,10))
console.log(nomeArrow("Vinicius"))

//Arrow Function com + de 1 linha de instruções

const somaNumerosArrow = (num1, num2) =>{
    if(num1 > 10 || num2 > 10){
        return "Somente numeros abaixode 10"
    } else{
        return num1 + num2
    }
}

console.log(somaNumerosArrow(9,10))


































