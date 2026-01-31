// for(let i = 0; i < 50; i++ ){
//     if(i%5 === 0 || i%1 ===0){
//         console.log(i);
//     }
// }


let total = 0
for(let i = 1; i <= 20; i++ ){
    if(i % 3 === 0) {
        console.log(i);
        total = total+i;
        console.log('total', total)
    }
}
console.log('total ot the number', total)