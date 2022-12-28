let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     result += numbers[index];
// }
// //console.log(result);
// let media = result / numbers.length;
// console.log(media);

// if (media > 20){
//     console.log('Valor maior que 20');
// }
// else {
//     console.log('Valor menor ou igual a 20');
// }

let biggerNumber = numbers [0];

for(let index =  1; index < numbers.length; index += 1){
    if(numbers [index] > biggerNumber){
        biggerNumber = numbers [index];
    }
}
console.log(biggerNumber);