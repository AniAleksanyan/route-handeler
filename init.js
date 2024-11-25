const sqlite = require("better-sqlite3")
const db = new sqlite('users.db')

db.prepare(`
    CREATE TABLE IF NOT EXISTS users(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT,
       age INTEGER,
       salary INTEGER
    )
`).run()

const users = [
    {name:"Armen", age: "25", salary: 10000000},
    {name:"Artak", age: "27", salary: 200000},
    {name:"Anna", age: "30", salary: 300000},
    {name:"Sara", age: "21", salary: 500000},
    {name:"Karine", age: "28", salary: 700000},
    {name:"Karen", age: "39", salary: 900000}, 
    {name:"Sevak", age: "23", salary: 100000},
    {name:"Narek", age: "22", salary: 1500000},
    {name:"Edgar", age: "18", salary: 3000000},
    {name:"Ani", age: "27", salary: 900000},
    {name:"Levon", age: "24", salary: 3300000}
]

const stm = `INSERT INTO users(name, age, salary) VALUES(@name, @age, @salary)`
users.forEach(u => {
    db.prepare(stm).run(u)
})