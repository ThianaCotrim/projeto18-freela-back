import { Router } from "express";
import { getPassagens } from "../controllers/passagens.controllers.js";


const passagensRouter = Router()


passagensRouter.get("/passagens", getPassagens )


export default passagensRouter