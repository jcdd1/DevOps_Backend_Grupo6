const { EntitySchema } = require("typeorm");
//Entidad de usuario, posee todos los atributos de la tabla usuario
const user = new EntitySchema({
    name: "user",
    tableName: "tblUser",
    columns: {
        userId: {
            primary: true,
            type: "int",
            generated: true,
 
        },
        countryId: {
            type: "int"
        },
        typeId: {
            type: "int"
        },
        userName:{
            type: "varchar"
        },

        userLastName:{
            type: "varchar"
        },
        email: {
            type: "varchar",
 
        },
        password: {
            type: "varchar",
 
        },
        idNumber: {
            type: "varchar",
 
        },
        phone: {
            type: "varchar",
 
        },

    },
 
});
//Exportacion de la entidad
module.exports = user;