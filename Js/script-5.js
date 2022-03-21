const corredor1 = [1, 1, 0, 1, 0, 0];// corredor1 = 3 * 10 = 30
const corredor2=[1, 1, 1, 1, 1, 0];// corrredor2 = 5 * 10 = 50
const andar1 = [corredor1, corredor2];// 80 reais

const corredor3 = [0, 0, 0, 1, 0, 0];//corredor3 = 1 * 10 = 10
const corredor4 = [0, 1, 0, 1, 1, 0];//corredor4 = 3 * 10 = 30
const andar2 = [corredor3, corredor4];// 40 reais

const edGaragem = [andar1, andar2];// 80 + 40 = 120 reais

const valorVaga = 10;

let total_vagas1 = 0;
let total_vagas2 = 0;
let total_vagas3 = 0;
let total_vagas4 = 0;

let total_arrecadado = 0;
let soma_total = 0;

let ed_Garagem;

for (var i = 0; i < corredor1.length; i++){
    total_vagas1 = total_vagas1 + corredor1[i]; 
}
console.log("O total de vagas ocupadas: " + total_vagas1);

for (var i = 0; i < corredor2.length; i++){
        total_vagas2 = total_vagas2 + corredor2[i]; 
}
console.log("O total de vagas ocupadas: " + total_vagas2);

for (var j = 0; j < corredor3.length; j++){
    total_vagas3 = total_vagas3 + corredor3[j];  
}
console.log("O total de vagas ocupadas: " + total_vagas3);

for (var j = 0; j < corredor4.length; j++){
    total_vagas4 = total_vagas4 + corredor4[j];  
}
console.log("O total de vagas ocupadas: " + total_vagas4);

ed_Garagem = 'Andar1';//Ou Andar2

switch(ed_Garagem){
    case 'Andar1':
        total_arrecadado =  ((total_vagas1 * valorVaga) + (total_vagas2 * valorVaga));
        console.log("O total do edifício do andar 1 é R$ " + total_arrecadado);
        break;

    case 'Andar2':
        total_arrecadado = ((total_vagas3 * valorVaga) + (total_vagas4 * valorVaga));
        console.log("O total do edifício do andar 2 é R$ " + total_arrecadado);
        break;

    default:
        console.log("Não temos valor arrecadado!");
}

soma_total = ((total_vagas1 * valorVaga) + (total_vagas2 * valorVaga ) + (total_vagas3 * valorVaga) + (total_vagas4 * valorVaga));
console.log("O total arrecadado é R$ " + soma_total);