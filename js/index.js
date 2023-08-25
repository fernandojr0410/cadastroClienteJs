function cadastrarCliente() {
  nomeCompleto = document.getElementById("nomeCliente").value;
  cpf = document.getElementById("cpfCliente").value;
  endereco = document.getElementById("enderecoCliente").value;
  telefone = document.getElementById("telefoneCliente").value;
  email = document.getElementById("emailCliente").value;
  dadosCliente = document.getElementById("dadosCliente").value;


  if (
    nomeCompleto === "" ||
    cpf === "" ||
    endereco === "" ||
    telefone === "" ||
    email === ""
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  } else {
    alert(`Você foi cadastrado com Sucesso!

${nomeCompleto}
${cpf}
${endereco}
${telefone}
${email}`);
  }
}
