const { EntitySchema } = require("typeorm");


const User = new EntitySchema({
    name: "user", 
    tableName: "tblUsers", 
    columns: {
        userId: {
            primary: true,
            type: "int",
            generated: true, 
        },
        email: {
            type: "varchar",
            unique: true, 
        },
        password: {
            type: "varchar", 
        },
        resetToken: {
            type: "varchar",
            nullable: true, 
        },
        resetTokenExpiration: {
            type: "timestamp",
            nullable: true, 
        }
    },
});

module.exports = User;
