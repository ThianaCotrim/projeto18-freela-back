import { db } from "../database/database.connection.js"

export async function getHoteis (req, res) {

    try{
        const hoteis = await db.query(`SELECT * FROM hoteis;`)
        res.status(200).send(hoteis.rows)
    } catch (err){
        res.status(500).send(err.message)
    }
}