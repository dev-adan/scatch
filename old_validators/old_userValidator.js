const userValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fullname", "email", "password"],
      properties: {
        fullname : {bsonType : "string", description : "must be a string and is required"},
        email : {bsonType : "string", description : "must be a string and is required"},
        password : {bsonType : "string", description : "must be a string and is required"},
        cart : {bsonType : "array",description :'Must be an array'},
        isAdmin : {bsonType : 'bool',description :'Must be a boolean'},
        orders : {bsonType : 'array',description :'Must be an array'},
        contact : {bsonType : 'number',description :'Must be a number'},
        picture : {bsonType : 'string',description :'Must be a string'},
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
};

module.exports = userValidator;