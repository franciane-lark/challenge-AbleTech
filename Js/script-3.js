const corredor1 = [1, 1, 0, 1, 0, 0];//Vagas livres 3
const corredor2=[1, 1, 1, 1, 1, 0];//Vagas Livres 1
const andar1 = [corredor1, corredor2];

let total_vagas1 = 0;
let total_vagas2 = 0;

let vagas_livres = 0;

let total_andar;

for (var i = 0; i < corredor1.length; i++){
    if(corredor1[i] == 0){
        total_vagas1 = total_vagas1 + 1; 
    }
}
console.log("O total de vagas livres: " + total_vagas1);

for (var i = 0; i < corredor2.length; i++){
    if(corredor2[i] == 0){
        total_vagas2 = total_vagas2 + 1 ;
    }   
}
console.log("O total de vagas livres: " + total_vagas2);

/*
for (var i = 0; i < corredor2.length; i++){
        total_vagas2 = total_vagas2 + corredor2[i]; 
}
console.log("O total de vagas ocupadas: " + total_vagas2);
*/

total_andar = 'corredor1';//Ou Corredor2

switch (total_andar){
    case 'corredor1':
        vagas_livres = 6 - total_vagas1;
        console.log("Vagas no andar 1 corredor 1: " + vagas_livres);
        break;

    case 'corredor2':
        vagas_livres = 6 - total_vagas2;
        console.log("Vagas no andar 1 corredor 2: " + vagas_livres);
        break;
    default:
        console.log("Não temos vaga livre!");
}
