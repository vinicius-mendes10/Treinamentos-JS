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
// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`;
// }
// let completo = nomeCompleto("vinicius", "Ferreira");
// console.log("cpmleto:" + completo);
// function maiorDeIdade(idade){
//   if(idade >= 18){
//     return true;
//   }else{
//     return false;
//   }
// }
// let idade = 65;
// let verificacao = maiorDeIdade(idade);

// if(verificacao){
//   console.log(`E maior de idade`);
// }else{
//   console.log(`E menor de idade`);
// }
// function calcPct (x , y){
//   return (y / x) * 100;
// }
//   let x = 40;
//   let y = 10;
//   let pct = calcPct(x, y);
// // console.log(`${pct}% de ${x} e ${y}`);
// function calcularImovel( metragem, quartos){
//   let m2 = 3000;
//   let preco = 0;

//   switch(quartos){
//     case 1:
//       default:
//         preco = metragem * m2;
//         break;
//         case 2:
//           preco = metragem * (m2 * 1.2);
//           break;
//           case 3:
//             preco = metragem * (m2 * 1.5);
//             break;
//   }
//   return preco;
// }
// let metragem = 123;
// let quartos = 3;
// let preco = calcularImovel(metragem, quartos);
// console.log(`Acasa custa R$ ${preco}`);
function validar (usuario, senha){
  if (usuario === 'Pedro' && senha ==='123'){
    return true;
  } else {
    return false;
  }
}
let usuario = 'Pedro';
let senha = '123';
let validacao = validar (usuario, senha);
if(validacao){
  console.log(`Acesso concedido`);
}else{
  console.log(`Acesso negado`);
}
