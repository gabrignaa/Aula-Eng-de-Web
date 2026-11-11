function executar(evento) {
  evento.preventDefault();
  limparErros();

  const nome = document.querySelector("#nome");
  const erroNome = document.querySelector("#erro-nome");
  if(nome.value === "") {
    erroNome.textContent = "Nome não pode estar vazio!";
    erroNome.classList.add("erro");
    erroNome.classList.remove("oculto");
  }  

  const idade = document.querySelector("#idade");
  const erroIdade = document.querySelector("#erro-idade");
  if (idade.value === "") {
    erroIdade.textContent = "Idade não pode estar vazio";
    erroIdade.classList.add("erro");
    erroIdade.classList.remove("oculto");
  } else if (Number(idade.value) < 18) {
    erroIdade.textContent = "É necessario ter 18 anos!";
    erroIdade.classList.add("erro");
    erroIdade.classList.remove("oculto");
  }

//TODO: COMO VALIDAR UM EMAIL UTILIZANDO UM REGEX

  const email = document.querySelector("#email");
  const erroEmail = document.querySelector("#erro-email");
  if (email.value === "") {
    erroEmail.textContent = "Email não pode estar vazio";
    erroEmail.classList.add("erro");
    erroEmail.classList.remove("oculto");
  }

  const termos = document.querySelector("#termos");
  const erroTermos = document.querySelector("#erro-termos");
  if (!termos.checked) {
    erroTermos.textContent = "Os termos tem que ser lidos e aceitos";
    erroTermos.classList.add("erro");
    erroTermos.classList.remove("oculto");
  }

  const valido = document.querySelectorAll(".erro").length === 0;
  const concluido = document.querySelector("#concluido");

  if (!valido) {
    concluido.textContent = "Corrija os erros para prosseguir";
    concluido.classList.add("erro");
    concluido.classList.remove("oculto");
  } else {
    concluido.textContent = "Cadastro concluido com sucesso";
    concluido.classList.add("sucesso");
    concluido.classList.remove("oculto");
  }
}

//() => {} Função anônima
function limparErros() {
  document.querySelectorAll(".erro").forEach((elemento) => {
    elemento.classList.remove("erro");
    elemento.classList.add("oculto");
  })
}