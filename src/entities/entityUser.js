const { EntitySchema } = require("typeorm");
//entidad de usuario, posee todos los atributos de la tabla usuario
const user = new EntitySchema({
    name: "user",
    tableName: "tblUser",
    columns: {
        userId: {
            primary: true,
            type: "int",
            generated: true,
 
        },
        userName:{
            type: "varchar"
        },

        userLastName:{
            type: "varchar"
        },

        userTypeId: {
            type: "int",
 
        },
        email: {
            type: "varchar",
 
        },
        password: {
            type: "varchar",
 
        }
    },
 
});
//Exportacion de la entidad
module.exports = user;