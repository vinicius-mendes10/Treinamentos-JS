// let ok = false;

// if(ok) {
//     console.log('entrou no if');
// }else {
//     console.log('nåo entrou no if');
// }
// let idade = 36;
// let adulto = idade >= 18 && idade < 60;

// if(adulto){
//     console.log('E adulto');
// }else{
//     console.log('Nåo e adulto');
// }

//EXERCICIOS IF E ELSE

// let x = 10;
// let y = 5;
// console.log(x > y);

// let w = "10";
// let z = 10;
// console.log( w === z);

// let a = 10;
// let b = 5;
// console.log( a > b);

// let preco = 40.3;
// if (preco <= 45){
//     console.log('A carne esta barata');
// }else{
//     console.log('Acarne esta cara');
// }
// let isMember = true;

// let shipping = isMember ? 2 : 10;
// console.log('frete:' + shipping);

// let age = 24;
// let isAdult = (age >= 18 ? 'Adulto' : 'Nåo e adulto');
// console.log(isAdult);
// let cars = "Honda Civic";
// console.log("Modelo:" + cars);
// switch (cars) {
//   case "Siena":
//     console.log("Seu carro e fiat");
//     break;
//   case "Honda Civic":
//     console.log("Seu carro e um honda");
//   case "Tucson":
//     console.log("Seu carro e um hyundai");
//     default:
//         console.log('Nenhum carro');
// }
//ESTUDANDO FUNCOES
//function gravidade(){
// console.log('A gravidade do planeta e:');
// console.log(9.8);
//}
//gravidade();
// function somar (n1, n2){
// let resultado = n1 + n2;
// console.log('Resultado e:', n1 + n2);
// }
// somar(35, 45);

// function nomeCompleto (nome, sobrenome){
//     //let resltadoEsperado = nome + sobrenome
//     console.log(`${nome} ${sobrenome}`);
// }
// nomeCompleto('vinicius','Ferreira');
// nomeCompleto('Lazaro','Ferreira');

//entrada -> processamento -> saida
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
let completo = nomeCompleto("vinicius", "Ferreira");
console.log("cpmleto:" + completo);
