function cadastrarCliente() {
  let nomeCompleto = document.getElementById("nomeCliente").value;
  let cpf = document.getElementById("cpfCliente").value;
  let celular = document.getElementById("celularCliente").value;
  let email = document.getElementById("emailCliente").value;

  if (nomeCompleto === "" || cpf === "" || celular === "" || email === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert(`Você foi cadastrado com Sucesso!

${nomeCompleto}
${cpf}
${celular}
${email}`);
    document.getElementById("nomeCliente").value = "";
    document.getElementById("cpfCliente").value = "";
    document.getElementById("celularCliente").value = "";
    document.getElementById("emailCliente").value = "";
  }
}

function todosDigitosIguaisCPF(cpf) {
  const cpfCliente = cpf[0];
  return cpf.split("").every((digito) => digito === cpfCliente);
}

function todosDigitosIguaisCelular(celular) {
  const celularCliente = celular[0];
  return celular.split("").every((digito) => digito === celularCliente);
}

function validarTamanhoCPF() {
  let cpf = document.getElementById("cpfCliente").value;

  if (cpf.length !== 11) {
    alert("CPF Inválido, CPF precisa ter exatamente 11 caracteres.");
    document.getElementById("cpfCliente").value = "";
  } else if (todosDigitosIguaisCPF(cpf)) {
    alert("CPF Inválido, CPF não pode ter todos os dígitos iguais.");
    document.getElementById("cpfCliente").value = "";
  } else {
    alert("CPF Válido");
  }
}

function validarTamanhoCelular() {
  let celular = document.getElementById("celularCliente").value;

  if (celular.length !== 11 && celular.length !== 10) {
    alert(
      "Celular Inválido, celular precisa ter exatamente 10 ou 11 caracteres."
    );
    document.getElementById("celularCliente").value = "";
  } else if (todosDigitosIguaisCelular(celular)) {
    alert("Celular Inválido, celular não pode ter todos os dígitos iguais.");
    document.getElementById("celularCliente").value = "";
  } else {
    alert("Celular Válido");
  }
}
