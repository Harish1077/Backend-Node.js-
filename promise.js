let x = 2;
let y = 3;
let result = x + y;
// async function fetchalldata() {
//     let fetchdata = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(await fetchdata.json());
// }
// fetchalldata()
// console.log(result)

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((data) => data.json())
    .then((jsonData) => console.log(jsonData)) 
    .catch((error) => console.log(error));
console.log(result);
