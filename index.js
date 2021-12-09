// №1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = ' ';

// for (let i = 0; i < arr.length; i++) {
//   str += arr[i] + '-';
// }
// console.log(str);

// №1 option2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = ' ';

// arr.forEach( (item) =>{
//   str = str + item + '-';
// });

// console.log(str);

// №2  ???????
// const createArray = n => {
//     const array = [];
//     randNumber = Math.floor(Math.random()*10);
// }

// №3 
const users = [
    {
        name: 'Nick',
        age: 15
    }, 
    {
        name: 'Helen',
        age: 25
    },
    {
        name: 'Jack',
        age: 18
    }

]
let sum = 0;

for (let i = 0; i < users.length; i++) {
      sum += users[i].age / users.length;
}

console.log(sum);
