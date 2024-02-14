const express = require('express')
const app = express();
const port = 3000;
const {CreateCard, UpdateCard} = require('./types')

app.use(express.json());


app.post('/card/add',(req,res)=>{
 const payload = req.body;
 const parsepayload = CreateCard.safeParse(payload);

 if(!parsepayload.success ){
  res.status(411).json({
    message : 'You have sent wrong input'
  })
  return
 }

})

app.get('/card/get',(req,res)=>{

})


app.put('/card/update',(req,res)=>{
  const payload = req.body;
  const parsepayload = UpdateCard.safeParse(payload);
  if(!parsepayload.success ){
    res.status(411).json({
      message : 'You have sent wrong input'
    })
    return
   }


})


app.delete('/card/delete',(req,res)=>{
  const payload = req.body;
  const parsepayload = UpdateCard.safeParse(payload);
  if(!parsepayload.success ){
    res.status(411).json({
      message : 'You have sent wrong input'
    })
    return
   }
   
})


app.listen(port,()=>{
  console.log("Running on port",port)
})