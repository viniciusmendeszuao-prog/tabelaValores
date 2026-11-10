const produtos = [
    {
      nome: "Smart TV TCL 50 polegadas 4K",
      categoria: "Televisão",
      quantidade: 10,
      preco: 1700.00
    },
    {
        nome: "Smartphone Samsung Galaxy A17",
      categoria: "Celular",
      quantidade: 25,
      preco: 899.05
    },
    {
        nome: "Notebook Lenovo IdeaPad Slim 3",
      categoria: "Computador",
      quantidade: 15,
      preco: 3799.05
    },
    {
        nome: "Fone Bluetooth Soundcore P20i",
      categoria: "Acessório",
      quantidade: 8,
      preco: 138.00
    },
    {
        nome: "Smartwatch Huawei Band 10",
      categoria: "Relógio inteligente",
      quantidade: 12,
      preco: 188.10
    },
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }