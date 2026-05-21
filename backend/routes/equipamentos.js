const express = require("express");
const router = express.Router();

const connection = require("../database/connection")

router.get("/listarTodos", (req, res) => {
    const sql = "SELECT*FROM equipamentos";

    connection.query(sql, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        }
        res.status(200).json(result);
    })
})

router.post("/criar", (req, res) => {
    const { nome, marca, patrimonio } = req.body;
    const sql = "INSERT INTO equipamentos (nome, marca, patrimonio) VALUES (?,?,?)"

    connection.query(sql, [nome, marca, patrimonio], (error) => {
        if (error) {
            return res.status(500).json(error);
        }

        res.status(201).json({ mensagem: "Equipamento cadastrado com sucesso!" });
    })
})

router.put("/editar/:id", (req, res) => {
    const { nome, marca, patrimonio } = req.body
    const { id } = req.params
    const sql = "UPDATE equipamentos SET nome = ?, marca = ?, patrimonio = ? WHERE id = ?"

    connection.query(sql, [nome, marca, patrimonio, id], (error) => {
        if (error) {
            return res.status(500).json(error);
        }

        res.status(201).json({ mensagem: "Equipamento atualizado com sucesso!" });
    });
});

router.delete("/excluir/:id", (req, res) => {
    const { id } = req.params;
})

module.exports = router;

