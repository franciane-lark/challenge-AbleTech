const corredor1 = [1, 1, 0, 1, 0, 0];
const corredor2=[1, 1, 1, 1, 1, 0];
const andar1 = [corredor1, corredor2];

let total_vagas1 = 0;
let total_vagas2 = 0;

for (var i = 0; i < corredor1.length; i++){
    total_vagas1 = total_vagas1 + corredor1[i]; 
}
console.log("O total de vagas ocupadas: " + total_vagas1);

for (var i = 0; i < corredor2.length; i++){
    total_vagas2 = total_vagas2 + corredor2[i]; 
}
console.log("O total de vagas ocupadas: " + total_vagas2);



