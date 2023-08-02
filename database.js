import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const myDB = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()

export async function getUsers(){
    const [result] = await myDB.query('Select * from Users')
    return result;
}
export async function getUserById(id){
    const [result] = await myDB.query('Select * from Users where id = ?',[id])
    return result[0];
}

export async function CreateUser(uname,upassword){
    const [result] = await myDB.query('INSERT into Users (name, password) value (?,?)',[uname,upassword])
   const id = result.insertId;
    return getUserById(id);
}

// const results = await CreateUser("dada",'kofi')
// console.log(results)



