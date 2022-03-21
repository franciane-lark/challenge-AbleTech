const corredor3 = [0, 0, 0, 1, 0, 0];//Vagas livres 5
const corredor4 = [0, 1, 0, 1, 1, 0];//Vagas Livres 3
const andar2 = [corredor3, corredor4];

let total_vagas3 = 0;
let total_vagas4 = 0;

let vagas_livres = 0;

let total_andar;

for (var j = 0; j < corredor3.length; j++){
        total_vagas3 = total_vagas3 + corredor3[j];  
}
console.log("O total de vagas ocupadas: " + total_vagas3);

for (var j = 0; j < corredor4.length; j++){
    if(corredor4[j] == 0){
        total_vagas4 = total_vagas4 + 1; 
    }   
}
console.log("O total de vagas livres: " + total_vagas4);

total_andar = 'corredor3';//Ou Corredor4

switch(total_andar){
    case 'corredor3':
    vagas_livres = 6 - total_vagas3;
    console.log("Vagas no andar 2 corredor 3: " + vagas_livres);
    break;

    case 'corredor4':
    vagas_livres = 6 - total_vagas4;
    console.log("Vagas no andar 2 corredor 4: " + vagas_livres);
    break;

    default:
        console.log("Não temos vaga livre!");
}