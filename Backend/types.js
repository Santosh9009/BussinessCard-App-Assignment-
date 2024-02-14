const zod = require('zod')

const CreateCard = zod.object({
  name : zod.string(),
  description : zod.string(),
  interest : zod.array(),
  linkedin : zod.string(),
  twitter : zod.string()
})

const UpdateCard = zod.object({
  id: zod.string()
})

module.exports={
  CreateCard : CreateCard,
  UpdateCard : UpdateCard
}