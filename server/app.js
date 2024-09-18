import express from 'express'
import conectadoDB from './db.js'
import cors from 'cors'

const app = express();
app.use(cors());
const conexao = await conectadoDB();

conexao.on('error', (erro) => {
    console.error('Erro ao conectar com o MongoDB', erro)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDB')
})

app.listen(3000, () => {
    console.log('Servidor conectado')
})