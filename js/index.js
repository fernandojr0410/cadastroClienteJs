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

function todosDigitosIguaisNome(nomeCompleto) {
  const nomeCliente = nomeCompleto[0];
  return nomeCompleto.split("").every((digito) => {
    digito === nomeCliente;
  });
}
function todosDigitosIguaisCPF(cpf) {
  const cpfCliente = cpf[0];
  return cpf.split("").every((digito) => digito === cpfCliente);
}

function todosDigitosIguaisCelular(celular) {
  const celularCliente = celular[0];
  return celular.split("").every((digito) => digito === celularCliente);
}

function validarNomeCompleto() {
  let nomeCompleto = document.getElementById("nomeCliente").value;
  let erroNome = document.getElementById("mensagemErroNome");
  let nomeCorreto = document.getElementById("mensagemCorretoNome");

  if (nomeCompleto < 3) {
    erroNome.textContent =
      "Nome Inválido, nome precisa ter no minimo 3 caracteres.";
    erroNome.textContent = "";
  } else if (todosDigitosIguaisNome(nomeCompleto)) {
    erroNome.textContent =
      "Nome Inválido, nome não pode ter todos os caracteres iguais";
    erroNome.textContent = "";
  } else {
    nomeCorreto.textContent = "Nome Válido";
  }
}

function validarTamanhoCPF() {
  let cpf = document.getElementById("cpfCliente").value;
  let erroCPF = document.getElementById("mensagemErroCPF");
  let cpfCorreto = document.getElementById("mensagemCorretoCPF");

  if (cpf.length !== 11) {
    erroCPF.textContent =
      "CPF Inválido, CPF precisa ter exatamente 11 digitos.";
    cpfCorreto.textContent = "";
  } else if (todosDigitosIguaisCPF(cpf)) {
    erroCPF.textContent =
      "CPF Inválido, CPF não pode ter todos os dígitos iguais.";
    cpfCorreto.textContent = "";
  } else {
    erroCPF.textContent = "";
    cpfCorreto.textContent = "CPF Válido";
  }
}

function validarTamanhoCelular() {
  let celular = document.getElementById("celularCliente").value;
  let erroCelular = document.getElementById("mensagemErroCelular");
  let celularCorreto = document.getElementById("mensagemCorretoCelular");

  if (celular.length !== 11 && celular.length !== 10) {
    celular.textContent =
      "Celular Inválido, celular precisa ter exatamente 10 ou 11 caracteres.";
    erroCelular.textContent = "";
  } else if (todosDigitosIguaisCelular(celular)) {
    erroCelular.textContent =
      "Celular Inválido, Celular não pode ter todos os dígitos iguais.";
    erroCelular.textContent = "";
  } else {
    celularCorreto.textContent = "Celular Válido";
  }
}
