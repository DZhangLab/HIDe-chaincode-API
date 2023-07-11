const Joi = require('joi'); 


const patient_schema = Joi.object().keys({ 
  name: Joi.string().alphanum().min(3).max(30).required(),
  birthyear: Joi.number().integer().min(1970).max(2023), 
  birthmonth: Joi.number().integer().min(1).max(12),
  birthday: Joi.number().integer().min(1).max(31),
  delegates: Joi.array().items(Joi.string()),
  identity: Joi.boolean(),
  description : Joi.string(),
  isNameSetPublic: Joi.boolean(),
  isBirthInfoSetPublic: Joi.boolean(),
  isDescriptionSetPublic: Joi.boolean()
}); 

// const dataToValidate = { 
//   name: 'chris', 
//   birthyear: 1971,
//   birthmonth: 1,
//   birthday: 2,
//   delegates: ['haha', 'ababb']
// } 

// const result = patient_schema.validate(dataToValidate);


// console.log(result)

module.exports = patient_schema