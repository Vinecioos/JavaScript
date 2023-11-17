//boolean
const usuarioLogado = true;
const contaPaga = false;

//Truthy ou Falsy

//0 => false
//1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

//null == vazio ou nada
//umdefined == variavel declarada porem não tem valor


let minhaVar;
let variavelNull = null

console.log(minhaVar)
console.log(variavelNull)

let Numero = 3;
let texto = "Oi"

//typeof == verifica a variavel(String numero...)
console.log(typeof Numero)//Number
console.log(typeof texto)//String
console.log(minhaVar)//undefine
console.log(variavelNull)//null


//conversão implicita permite que convertamos um tipo de DADO em outro
const numero = 456;
const numeroString = "456";



console.log(numero == numeroString)//Supostamente isso não deveria acontecer mas acontece pois ele identifica os dois como String e não uma String e outro numero
console.log(numero === numeroString)

//coversão explicita


//String() Transfomra Numero em String
//Number() Transforma String em numero
console.log(numero + Number(numeroString))

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let Telefone = 12341234;
console.log("O telefone é " + String(Telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.
