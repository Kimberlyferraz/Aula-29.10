
const produtos = [
    {
        nome: "Lavanda",
        categoria: "Floral",
        quantidade: 20,
        preco: 90.00
    },
    {
        nome: "Baunilha",
        categoria: "Doce",
        quantidade: 15,
        preco: 110.00
    },
    {
        nome: "Sândalo",
        categoria: "Amadeirado",
        quantidade: 12,
        preco: 135.00
    },
    {
        nome: "Cítrico",
        categoria: "Fresco",
        quantidade: 18,
        preco: 85.00
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let produto of produtos) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">
            ${produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}
        </td>
    `;

    corpoTabela.appendChild(linha);
}
