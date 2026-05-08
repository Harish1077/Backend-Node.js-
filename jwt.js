import express from 'express';
let app = express()
import jwt from 'jsonwebtoken'
app.use(express.json())
let SECRET = "key123"
app.post("/login", (req, res)=>{
    let {username, password} = req.body
    if(username === "admin" && password === "password") {
        let token = jwt.sign({user:username}, SECRET, {expiresIn: "1h"})
        return res.send(token) 
    }
    res.send("Invalid credentials")
})
app.get("/dashboard", (req, res)=>{
    let authHeader = req.headers["authorization"]
    if(!authHeader) {
        return res.send("No token provided")
    }
    let token = authHeader.split(" ")[1]
    jwt.verify(token, SECRET, (err)=>{
        if(err) {
            return res.send("Invalid token")
        }
        res.send("Welcome to the dashboard")
    })
})
app.listen(3000, () => {
  console.log('Server running on port 3000');
});