import { db } from "../database/database.connection.js"

export async function getPassagens (req, res) {

    try{
        const passagens = await db.query(`SELECT * FROM passagens;`)
        res.status(200).send(passagens.rows)

    } catch (err){
        res.status(500).send(err.message)
    }

}