const express = require('express')
const app = express();
const port = 3000;
const {CreateCard, UpdateCard} = require('./types')
const {Card} = require('./db');

app.use(express.json());


app.post('/card/add',async(req,res)=>{
 const payload = req.body;
 const parsepayload = CreateCard.safeParse(payload);

 if(!parsepayload.success ){
  res.status(411).json({
    message : 'You have sent wrong input'
  })
  return
 }
  const card = await Card.create({
    name: payload.name,
    description: payload.description,
    interests: payload.interests,
    linkedin: payload.linkedin,
    twitter: payload.twitter
  })
  res.status(200).json({
    message: "card created",
    id: card._id
  })


})

app.get('/card/get',async(req,res)=>{
  const cards =await Card.find({});

  res.status(200).json({
    cards: cards
  })
})


app.put('/card/update/:id',async(req,res)=>{
  const id= req.params.id;
  const payload = req.body;
  const parseid = UpdateCard.safeParse({id: id});
  if(!parseid.success ){
    res.status(411).json({
      message : 'You have sent wrong input'
    })
    return
   }
   await Card.updateOne({_id: id},{$set: payload})
   res.status(200).json({
    message: "Card updated successfully"
   })

})


app.delete('/card/delete/:id',async(req,res)=>{
  const id = req.params.id;
  const parseid = UpdateCard.safeParse({id:id});
  if(!parseid.success ){
    res.status(411).json({
      message : 'You have sent wrong input'
    })
    return
   }
   await Card.deleteOne({_id:id})
   res.status(200).json({
    message: "Deleted successfully"
   })

})


app.listen(port,()=>{
  console.log("Running on port",port)
})