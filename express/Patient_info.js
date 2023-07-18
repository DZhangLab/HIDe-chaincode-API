const Joi = require('joi'); 


const patient_schema = Joi.object().keys({ 
  name: Joi.string().alphanum().min(3).max(30).required(),
  birthyear: Joi.number().integer().min(1970).max(2023), 
  birthmonth: Joi.number().integer().min(1).max(12),
  birthday: Joi.number().integer().min(1).max(31),
  delegates: Joi.array().items(Joi.array().length(2).ordered(Joi.string(), Joi.boolean())),
  identity: Joi.boolean(),
  description : Joi.string(),
  isNameSetPublic: Joi.boolean(),
  isBirthInfoSetPublic: Joi.boolean(),
  isDescriptionSetPublic: Joi.boolean(),
  // if the status is false, indicating the account is lost and requires the vote
  status: Joi.boolean(),
  // if isDirectDelegate is true, indicating they can have control of all the information of their patients
  isDirectDelegate: Joi.boolean(),
}); 



module.exports = patient_schema