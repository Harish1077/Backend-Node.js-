import events from 'events'
let order = new events.EventEmitter()
let products = [
    {id:1 , name:"Protein", price:1000, quantity:10},
    {id:2 , name:"Creatine", price:2000, quantity:5},
    {id:3 , name:"BCAA", price:3000, quantity:8},
]