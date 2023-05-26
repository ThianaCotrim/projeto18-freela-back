import { db } from "../database/database.connection.js"

export async function getHotelx(req, res) {

    const {id} = req.params

    try{
        const hotelx = await db.query(`SELECT hc.hotel_id, c."nomeComodidade"
        FROM hotel_comodidades hc
        JOIN comodidades c ON hc.comodidade_id = c.id
        WHERE hc.hotel_id = $1;`, [id])
        res.status(200).send(hotelx.rows)
    } catch (err){
        res.status(500).send(err.message)
    }
}