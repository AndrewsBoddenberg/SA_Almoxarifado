const express = require('express')
const cors = require('cors')
const equipamentosRoutes = require("./routes/equipamentos")
const app = express()
const port = 3030;

app.use(cors());
app.use(express.json());

app.use("/equipamentos", equipamentosRoutes)

app.get('/', (req, res) => {
    res.send('Teste do Servidor!')
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}!`))

