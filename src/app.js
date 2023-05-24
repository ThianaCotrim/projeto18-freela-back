import express from "express"
import cors from "cors"

// Criação do servidor
const app = express()

// Configurações
app.use(cors())
app.use(express.json())


// Deixa o app escutando, à espera de requisições
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))