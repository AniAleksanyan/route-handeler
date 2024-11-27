import db from "better-sqlite3"
import { NextRequest } from "next/server";

const sql = new db("users.db");

interface IProps{
    params:{
        id:number
    }
}

export const GET = async (req: NextRequest, {params}:IProps) => {
    await params

    const user = sql.prepare("SELECT * FROM users WHERE id = ?").get(params.id)

    return Response.json({user})
}

export const PUT = async (req: NextRequest, { params }: IProps) => {
    const { id } = params;

    if (!id) {
        return Response.json({ status: "error", message: "Missing user ID" });
    }

    const data = await req.json();

    const user = sql.prepare("SELECT * FROM users WHERE id = ?").get(id);

    if (user) {
        const stm = `UPDATE users SET name = ?, age = ?, salary = ? WHERE id = ?`;
        sql.prepare(stm).run(data.name, data.age, data.salary, id);

        return Response.json({ status: "ok", message: "User updated successfully" });
    } else {
        const stm = `INSERT INTO users(name, age, salary) VALUES(?, ?, ?)`;
        sql.prepare(stm).run(data.name, data.age, data.salary);

        return Response.json({ status: "ok", message: "New user created successfully" });
    }
};

export const DELETE = async (req: NextRequest, { params }: IProps) => {
    const { id } = params;

    if (!id) {
        return Response.json({ status: "error", message: "Missing user ID" });
    }

    sql.prepare("DELETE FROM users WHERE id = ?").run(id);

    return Response.json({ status: "ok", message: "User deleted successfully" });
};
