const corredor3 = [0, 0, 0, 1, 0, 0];
const corredor4 = [0, 1, 0, 1, 1, 0];
const andar2 = [corredor3, corredor4];

let total_vagas3 = 0;
let total_vagas4 = 0;

for (var j = 0; j < corredor3.length; j++){
    total_vagas3 = total_vagas3 + corredor3[j]; 
}
console.log("O total de vagas ocupadas: " + total_vagas3);

for (var j = 0; j < corredor4.length; j++){
    total_vagas4 = total_vagas4 + corredor4[j]; 
}
console.log("O total de vagas ocupadas: " + total_vagas4);