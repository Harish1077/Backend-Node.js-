// import events from 'events'
// let booking = new events.EventEmitter()
// booking.on("bookingevent", ()=>{
//     console.log(`Email Received for ${user}`)
// })
// booking.on("bookingevent", ()=>{
//     console.log(`Seat booked for ${user}, seat-->${typeofseat}`)
// })
// booking.emit("bookingevent", ()=>{
//     console.log(`Booking event recorded in system for ${user}`)
// })
// booking.emit("bookingevent", "Harish", "Economy")
// booking.emit("bookingevent", "Hari", "Economy")

import events from 'events'
let percentage = new events.EventEmitter()
percentage.on("percentageevent", (student, sub1, sub2, sub3, sub4, sub5)=>{
    let total = sub1 + sub2 + sub3 + sub4 + sub5
    let percentage = (total/500)*100
    console.log(`Percentage of ${student} is ${percentage}%`)
})
percentage.emit("percentageevent", "Harish", 90, 80, 70, 60, 50)
percentage.emit("percentageevent", "Hari", 80, 70, 60, 50, 40)
percentage.emit("percentageevent", "Ragavendra", 70, 60, 50, 40, 30)
