// let a1 = [1, 2, 3, 4, 5];
// let a2 = [6, 7, 8, 9, 10];
// //a1.push(a2);

// // //let a = a1.length % 2 === 0 ? a1[elem -1]:'ops'
// if (a1.length % 2 === 0) {
//   a1.push(a2);
//   let newArr = [...a1.flat()];
//   let res = newArr.length / 2;
//   console.log((newArr[res - 1] + newArr[res]) / 2);
// }
// else {
//   a1.push(a2);
//   let mid = Math.floor(a1.flat().length / 2);
//   console.log(a1.flat()[mid]);
// }

//    console.log(f2)
//    let are = (n1,n2) => {
//     let arr = [...n1,n2]
//     if(arr.length % 2 === 0){
//         let res = arr.length / 2
//     //let f1 = array[res-1]+ array[res +1] /2
//        return res

//     }
//    }
let a = [3]
let b = [-2,-1]
b.push(a)
 console.log(b.flat())