import { Router } from "express"
import cidadesRouter from "./cidades.routes.js"
import passagensRouter from "./passagens.routes.js"
import hoteisRouter from "./hoteis.routes.js"
import hotelxRouter from "./hotelx.routes.js"



const router = Router()
router.use(cidadesRouter)
router.use(passagensRouter)
router.use(hoteisRouter)
router.use(hotelxRouter)


export default router