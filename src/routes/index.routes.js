import { Router } from "express"
import cidadesRouter from "./cidades.routes.js"



const router = Router()
router.use(cidadesRouter)


export default router