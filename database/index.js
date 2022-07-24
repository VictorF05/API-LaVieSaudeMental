const Sequelize = require("sequelize");
require("dotenv").config();

let db = {};

try{
    db = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PWD, 
        {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
        }    
    );    
} catch (error){
    console.error("Erro ao tentar conectar com o banco de dados");
}

async function hasConnection(){
    try{
        await db.authenticate();
        console.log("Banco de dados conectado");
    } catch(error){
        console.error("Erro ao tentar se conectar com o banco de dados");
    }
}

Object.assign(
    db, 
    {
    hasConnection,
    }
);

module.exports = db;