function cadastrarCliente() {
  let nomeCompleto = document.getElementById("nomeCliente").value;
  let cpf = document.getElementById("cpfCliente").value;
  let celular = document.getElementById("celularCliente").value;
  let email = document.getElementById("emailCliente").value;

  if (nomeCompleto === "" || cpf === "" || celular === "" || email === "") {
    document.getElementById("mensagemNuloNome").textContent =
      "Por favor, preencha esse campo";

    
    document.getElementById("mensagemNuloCPF").textContent =
      "Por favor, preencha esse campo";
    document.getElementById("mensagemNuloCelular").textContent =
      "Por favor, preencha esse campo";
    document.getElementById("mensagemNuloEmail").textContent =
      "Por favor, preencha esse campo";
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

    document.getElementById("mensagemErroNome").textContent = "";
    document.getElementById("mensagemCorretoNome").textContent = "";
    document.getElementById("mensagemErroCPF").textContent = "";
    document.getElementById("mensagemCorretoCPF").textContent = "";
    document.getElementById("mensagemErroCelular").textContent = "";
    document.getElementById("mensagemCorretoCelular").textContent = "";
    document.getElementById("mensagemErroEmail").textContent = "";
    document.getElementById("mensagemCorretoEmail").textContent = "";
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

function validarNomeCompleto() {
  let nomeCompleto = document.getElementById("nomeCliente");
  let nomeErro = document.getElementById("mensagemErroNome");
  let nomeCorreto = document.getElementById("mensagemCorretoNome");
  let nome = nomeCompleto.value;

  if (/[\d]/.test(nome)) {
    nomeErro.textContent = "Não é permitido ter números neste campo.";
    nomeCorreto.textContent = "";
  } else if (nome === "") {
    nomeErro.textContent = "Nome Inválido.";
    nomeCorreto.textContent = "";
  } else if (nome.length <= 3) {
    nomeErro.textContent = "Nome muito curto.";
    nomeCorreto.textContent = "";
  } else {
    nomeErro.textContent = "";
    nomeCorreto.textContent = "Nome Válido";
  }
}

function validarTamanhoCPF() {
  let cpf = document.getElementById("cpfCliente").value;
  let erroCpf = document.getElementById("mensagemErroCPF");
  let cpfCorreto = document.getElementById("mensagemCorretoCPF");

  if (cpf.length !== 11) {
    erroCpf.textContent =
      "CPF Inválido, CPF precisa ter exatamente 11 digitos.";
    cpfCorreto.textContent = "";
  } else if (todosDigitosIguaisCPF(cpf)) {
    erroCpf.textContent =
      "CPF Inválido, CPF não pode ter todos os dígitos iguais.";
    cpfCorreto.textContent = "";
  } else {
    erroCpf.textContent = "";
    cpfCorreto.textContent = "CPF Válido";
  }
}

function validarTamanhoCelular() {
  let celular = document.getElementById("celularCliente").value;
  let erroCelular = document.getElementById("mensagemErroCelular");
  let celularCorreto = document.getElementById("mensagemCorretoCelular");

  if (celular.length !== 11 && celular.length !== 10) {
    erroCelular.textContent =
      "Celular Inválido, celular precisa ter exatamente 10 ou 11 caracteres.";
    celularCorreto.textContent = "";
  } else if (todosDigitosIguaisCelular(celular)) {
    erroCelular.textContent =
      "Celular Inválido, Celular não pode ter todos os dígitos iguais.";
    celularCorreto.textContent = "";
  } else {
    erroCelular.textContent = "";
    celularCorreto.textContent = "Celular Válido";
  }
}

function validarEmail() {
  let email = document.getElementById("emailCliente").value;
  let erroEmail = document.getElementById("mensagemErroEmail");
  let emailCorreto = document.getElementById("mensagemCorretoEmail");
  let teste = email.value;

  let validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!validarEmail.test(email)) {
    erroEmail.textContent = "Email Inválido.";
    emailCorreto.textContent = "";
  } else {
    erroEmail.textContent = "";
    emailCorreto.textContent = "E-mail Válido.";
  }
}
