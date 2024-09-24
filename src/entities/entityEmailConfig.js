
const { EntitySchema } = require("typeorm");

const EmailConfig = new EntitySchema({
    name: "emailConfig", 
    tableName: "tblEmailConfig", 
    columns: {
        configId: {
            primary: true,
            type: "int",
            generated: true, 
        },
        emailUser: {
            type: "varchar", 
            unique: true, 
        },
        emailPass: {
            type: "varchar", 
        },
        clientUrl: {
            type: "varchar", 
        },
        service: {
            type: "varchar", 
            default: "gmail", 
        }
    },
});

module.exports = EmailConfig;
