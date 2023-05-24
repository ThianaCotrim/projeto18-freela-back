import { db } from "../database/database.connection.js"

export async function getCidades (req, res) {

    try{
        const cidades = await db.query(`SELECT * FROM cidades;`)
        res.status(200).send(cidades.rows)

    } catch (err){
        res.status(500).send(err.message)
    }

}