// import events from 'events'
// let order = new events.EventEmitter()
// let products = [
//     {id:1 , name:"Protein", price:1000, quantity:10},
//     {id:2 , name:"Creatine", price:2000, quantity:5},
//     {id:3 , name:"BCAA", price:3000, quantity:8},
// ]

import events from 'events'
let products=[
    {id:1 , name:"Protein", price:1000, quantity:10},
    {id:2 , name:"Creatine", price:2000, quantity:5},
    {id:3 , name:"BCAA", price:3000, quantity:8},
    {id:4 , name:"Pre-Workout", price:4000, quantity:15},
    {id:5 , name:"Glutamine", price:5000, quantity:20},
]
function shopping(user, productId, quantity){
    let order = new events.EventEmitter()
    let product = products.find(p => p.id === productId)
    if(!product || product.quantity < quantity) {
        console.log("Order failed")
        return 
    }
    order.on("order booking", (user, product, quantity) => {
        console.log(`Email sent to the user - ${user}`)
        console.log(`Bill generated for ${user}, product name - ${product.name}, quantity - ${quantity}, total price - ${product.price * quantity}`)
        product.quantity = product.quantity - quantity;
        console.log(`Stock updated for ${product.name} = ${product.quantity}`)
    })
    order.emit("order booking", user, product, quantity)
}

// Run a sample shopping event
shopping("Harish", 1, 2)
shopping("Hari", 2, 5)