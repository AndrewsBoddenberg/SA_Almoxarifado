const express = require("express");
const router = express.Router();

const connection = require("../database/connection")

router.get("/listarTodos", (req, res) => {
    const sql = "SELECT*FROM colaboradores";

    connection.query(sql, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(result);
    })
})

router.post("/criar", (req, res) => {
    const { nome, matricula, telefone, email } = req.body;
    const sql = "INSERT INTO colaboradores (nome, matricula, telefone, email) VALUES (?,?,?,?)"

    connection.query(sql, [nome, matricula, telefone], (error) => {
        if (error) {
            return res.status(500).json(error);
        }

        res.status(201).json({ mensagem: "Equipamento cadastrado com sucesso!" });
    })
})

router.put("/editar/:id", (req, res) => {
    const { nome, marca, telefone, email } = req.body
    const { id } = req.params
    const sql = "UPDATE equipamentos SET nome = ?, marca = ?, telefone = ? email = ? WHERE id = ?"

    connection.query(sql, [nome, marca, telefone, email, id], (error) => {
        if (error) {
            return res.status(500).json(error);
        }

        res.status(201).json({ mensagem: "Equipamento atualizado com sucesso!" });
    });
});

router.delete("/excluir/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM equipamentos WHERE id = ?"

    connection.query(sql, [id], (error) =>{
        if(error){
            return res.status(500).send("Erro ao deletar o usuário")
        }
    })
})

module.exports = router;

