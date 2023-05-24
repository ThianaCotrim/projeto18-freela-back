import { Router } from "express";
import { getHoteis } from "../controllers/hoteis.controllers.js";


const hoteisRouter = Router()


hoteisRouter.get("/hoteis", getHoteis )


export default hoteisRouter