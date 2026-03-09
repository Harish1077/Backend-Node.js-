// import {URL} from 'url'
// let myUrl = new URL("http://localhost:1077/products?id=100&name=protein")
// console.log(myUrl.host)

import querystring from 'querystring';
let qs = "id=1&name=Protein&price=1000"
let obj = querystring.parse(qs) 