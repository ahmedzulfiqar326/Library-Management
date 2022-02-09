const express=require('express')
const app=express()
var router = express.Router();
const db = require('../connection/database') 

app.use('/', router);
// app.use('view engine',jsx)
// router.get('/bookinfo',(req,res)=>{
//     console.log('page loaded')
//     res.render()
// })
router.get('/getbookdetail',(req,res)=>{
    try{
        const results = await db.query('select *from books')
        res.json({
            data:{
                book:results.rows
            }
        })
    }
    catch(err){
        throw err
    }
})
app.listen(3000,()=>{
    console.log('server is listening on 3001')
})