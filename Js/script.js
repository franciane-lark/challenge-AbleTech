/*--------------------------------------------------------------------------------------------------------
TRABALHAREMOS EM UM EDIFÍCIO GARAGEM, ONDE CADA ANDAR TERÁ CORREDORES E CADA CORREDOR TERÁ VAGAS, 
VAGAS COM O NÚMERO 1 ESTÃO OCUPADAS E VAGAS COM O NÚMERO 0 ESTÃO LIVRES. 
CADA VAGA OCUPADA CUSTA O VALOR DE 10 REAIS.
- DADO UM CORREDOR, RETORNAR O TOTAL DE VAGAS OCUPADAS
- DADO UM ANDAR, RETORNAR O TOTAL DE VAGAS LIVRES
- DADO UM EDIFÍCIO GARAGEM, RETORNAR O VALOR TOTAL ARRECADADO.
---------------------------------------------------------------------------------------------------------*/
const valorVaga = 10;

const corredor1 = [1, 1, 0, 1, 0, 0];
const corredor2 = [1, 1, 1, 1, 1, 0];

let total_Soma1 = 0;
let total_Soma2 = 0;
let total_Soma3 = 0;
let total_Soma4 = 0;

for(var i = 0; i< corredor1.length; i++) {
    if(corredor1[i] == 1){
        total_Soma1 = total_Soma1 + corredor1[i];  
    }else{
        total_Soma2 = total_Soma2 + corredor1[i];
    }
}

console.log(total_Soma1);//Soma o total de vagas ocupadas
console.log(total_Soma2);//Soma o total de vagas livres

corredor1 = (total_Soma1*valorVaga); //Valor multiplicado por R$ 10,00
console.log(corredor1);//Valor do vetor andar 1 posição 1

for(var j = 0; j < corredor2.length; j++ ){
    if(corredor2[j] == 1){
        total_Soma3 = total_Soma3 + corredor2[j];
    }else{
        total_Soma4 = total_Soma4 + corredor2[j];
    }    
}
console.log(total_Soma3);//soma o total de vagas ocupadas
console.log(total_Soma4)//soma o total de vagas livres

corredor2 = (total_Soma3*valorVaga);//Valor multiplicado por R$ 10,00
console.log(corredor2);//Valor do vetor andar 1 posição 2

const andar1 = [corredor1, corredor2];//total do valor em reais andar 1:

for(var A1 = 0; A1 < andar1.length; A1++){
    if (andar1[A1] < 6){
        console.log("Temos vaga");
    }else{
        console.log("Não temos vaga nesse andar!!");
    }
}

/*--------------------------------------------------------------------------------------------------------*/
const corredor3 = [0, 0, 0, 1, 0, 0];
const corredor4 = [0, 1, 0, 1, 1, 0];
let total_Soma5 = 0;
let total_Soma6 = 0;
let total_Soma7 = 0;
let total_Soma8 = 0;

for(var k = 0; k < corredor3; k++){
    if(corredor3[k] == 1){
        total_Soma5 = total_Soma5 + corredor3[k];
    }else{
        total_Soma6 = total_Soma6 + corredor3[k];
    }
}

console.log(total_Soma5);//soma o total de vagas ocupadas
console.log(total_Soma6);//soma o total de vagas livres

corredor3 = (total_Soma5*valorVaga);//Valor multiplicado por R$ 10,00
console.log(corredor3);//Valor do vetor andar 2 posição 1

for(var m = 0; m < corredor4; m++){
    if(corredor4[m] == 1){
        total_Soma7 = total_Soma7 + corredor4[m];
    }else{
        total_Soma8 = total_Soma8 + corredor4[m];
    }
}

console.log(total_Soma7);//soma o total de vagas ocupadas
console.log(total_Soma8);//soma o total de vagas livres

corredor4 = (total_Soma7*valorVaga);//Valor multiplicado por R$ 10,00
console.log(corredor4);//Valor do vetor andar 2 posição 2

const andar2 = [corredor3, corredor4];//total do valor em reais andar 2:

for(var A2 = 0; A2 < andar1.length; A2++){
    if (andar2[A2] < 6){
        console.log("Temos vaga");
    }else{
        console.log("Não temos vaga nesse andar!!");
    }
}

/*--------------------------------------------------------------------------------------------------------*/
const edGaragem = [andar1, andar2];
let valorTotal = 0;

for (var tot = 0; tot < edGaragem.length; tot++){
    valorTotal = valorTotal + edGaragem[tot];
}
console.log(valorTotal);
