const zod = require('zod')

const CreateCard = zod.object({
  name : zod.string(),
  description : zod.string(),
  interests : zod.array(zod.string()),
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