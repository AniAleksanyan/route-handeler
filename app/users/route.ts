import db from "better-sqlite3"
import { NextRequest } from "next/server";

const sql = new db("users.db");

export const GET = () => {
    const users = sql.prepare("SELECT * FROM users").all()

    return Response.json({users})
}

export const POST = async(req: NextRequest) => {
    const user = await req.json()

    const stm = `INSERT INTO users('name', 'age', 'salary') 
                VALUES(@name, @age, @salary)`;
    sql.prepare(stm).run(user);

    return Response.json({status: 'ok'})
}