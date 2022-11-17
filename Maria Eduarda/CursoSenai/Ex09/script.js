/* prompt('Qual é o seu nome?')//pergunta
confirm('Confirma sua inscrição?')//Ok ou cancelar
document.write('Maria Eduarda')// escreve no "body" */

//tipos de variaveis

/* var nome='Maria Eduarda' */
/* nome='Duda'
console.log(nome) */


/* nome- String
idade- Number
Verdadeiro ou falso- Boolean
Indefinido- undefined
Nulo- null */

/* let nome=String(prompt('Qual é seu nome?'))
document.write('Olá, '+nome)//usar o + para concatenar */

/* let nome='Maria Eduarda'
document.write('Olá, '+nome+'. Seu nome tem '+nome.length+' letras')
document.write(nome.toUpperCase()) */

/* let numero=prompt('Digite um número')
let proxNumero=prompt('Digite outro número')//camelCase
let resultado=numero+proxNumero
alert(resultado) */


/* let valor=14.5 */
/* document.write(valor.toFixed(2).replace('.',',')) */
/* document.write(valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'})) */

//objetos
/* let dados={//chave e valor
    nome:'Maria Eduarda',
    idade:17,
    estaAprovado:true
}
console.log(dados.nome)
console.log(dados.idade)
console.log(dados.estaAprovado) */

//Array

/* let idades=[16,20,18,36,true,'maria eduarda']
console.log(idades[2])
console.log(idades.length) */

//Functions (técnica verbo + substantivo)

/* let corSite='Azul'
console.log(corSite)
function resetaCor(){//sem parâmetros()
    corSite=''
}
resetaCor()
console.log(corSite) */

/* let corSite='Azul'
function trocaCor(cor){//com parâmetro
    corSite=cor
}
let cor=prompt('Qual é a cor?')
trocaCor(cor)

console.log(corSite) */

/* let nome=''

function escreverNome(novoNome){
 document.write(novoNome)
}  
    document.write('Maria Eduarda')
let novoNome=prompt('qual o nome?')
escreverNome()
 */

/* function multiplicar(n1,n2){
    return n1*n2
}
let resultado=multiplicar(2,5)
console.log(resultado) */

//Operadores matemáticos
//+,-,/,*,**(Exponenciação)

//Operadores lógicos matemáticos
//==(igualdade)
//=== (estritamente igual)
//console.log('3'===3)-avalia caractere e tipo
//!=(desigualdade)
//!==(estritamente desigual)
//console.log('2'!==2)

//Operadores lógicos de desvio
//&& and (e/conjunção)
// or || (ou/disjunção)
// ! not (negação)

//Exemplo: Inscrição para maiores de idade e baixa renda
/* let maiorDeIdade=true
let baixaRenda=false
let podeInscrever=maiorDeIdade||baixaRenda
console.log(podeInscrever)
let inverter=!podeInscrever */

//Desvio Condicional
 
//if (se), Else(Caso contrário), Else if (Caso contrário, se?)
/* let corRGB='vermelho'
if(corRGB==='vermelho'||corRGB==='verde'||corRGB==='azul'){
    console.log('Pertence ao RGB')
}
else{
    console.log('Não pertence ao RGB') */

    /* let hora=12
    if(hora>=6 && hora<12){
        console.log('Bom dia!')
    }
    else if (hora>=12 && hora<18){
        console.log('Boa tarde!')
    }
    else{
        console.log('Boa Noite')
    } */

    //Operador ternário
    //?(Separa o teste lógico dos resultados)
    //:(Separa os resultados)

/*     let pontos=40
    let result=pontos>50 ? 'aprovado' : 'Reprovado'
    console.log(result) */

    //Switch-Case (caso tenha uma troca)

    let login='Gerente'

    switch(login){
       case 'Comum':
        console.log('usuário comum')
        break
       case 'Gerente':
        console.log('usuário gerência')
        break
       case 'Diretor':
        console.log('usuário diretoria')
        break
    default:
    console.log('usuário não identificado')
    }                                               
