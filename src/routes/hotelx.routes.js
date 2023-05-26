import { Router } from "express";
import { getHotelx } from "../controllers/hotelx.controllers.js";

const hotelxRouter = Router()


hotelxRouter.get("/hotelx/:id", getHotelx)


export default hotelxRouter