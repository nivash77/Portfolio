const mongoose= require('mongoose')
mongoose.connect(process.env.MONGO)
const connnection=mongoose.connection;
connnection.on('connected',()=>{
    console.log('DB connect')
})
connnection.on('error',()=>{
    console.log('DB error')
})
module.exports=mongoose 
