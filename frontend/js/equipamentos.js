const url = "http://localhost:3030/equipamentos";
const tabela = document.getElementById("tabelaEquipamentos");
const form = document.getElementById("formEquipamentos")

async function listarEquipamentos() {
    try {
        const resposta = await fetch(`${url}/listarTodos`);
        const dados = await resposta.json();

        tabela.innerHTML = "";

        dados.forEach(equipamento => {
            tabela.innerHTML += 
            `<tr>
        <td>${equipamento.id}</td>
        <td>${equipamento.nome}</td>
        <td>${equipamento.marca}</td>
        <td>${equipamento.patrimonio}</td>
        <td>
        <button class = "btn btn-warning btn-sm">Editar</button>
        <button class = "btn btn-danger btn-sm">Excluir</button>
        </td>
        </tr>`


        });
    }catch(error){
        console.log(error);
    }
}

listarEquipamentos();