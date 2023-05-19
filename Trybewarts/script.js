const btnForm = document.querySelector('#btn-form');
const inputSenha = document.querySelector('#input-Senha');
const inputEmail = document.querySelector('#input-Email');
const btnSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const inputCheckedAgreement = document.getElementById('input-checkbox-agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const section1 = document.getElementById('section-1');
const divNameLastname = document.querySelector('#div-name-lastname');
const divEmailHouse = document.querySelector('#div-email-house');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputemail = document.querySelector('#input-email');
const selectHouse = document.querySelector('#house');
const radio = document.querySelectorAll('.family');
const conteinerInputRadio = document.querySelector('#conteiner-input-radio');
const conteinerChild = document.getElementById('conteiner-child');
const materiasEscolhidas = document.querySelectorAll('.subject');
const conteudoAprender = document.querySelector('#conteiner-conteudo-a-aprender');
const avaliacao = document.querySelectorAll('.rate');
const inputRate = document.getElementById('input-rate');
const conteinerTextarea = document.getElementById('conteiner-textarea');

function mensagem() {
  if (inputSenha.value === '123456' && inputEmail.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnForm.addEventListener('click', (event) => {
  event.preventDefault();
  mensagem();
});

function habilitarButton() {
  btnSubmit.disabled = !agreement.checked;
}

agreement.addEventListener('change', habilitarButton);

function contarChareter() {
  const capturaDoText = textarea.value;
  const tamanhoText = capturaDoText.length;
  counter.innerHTML = 500 - tamanhoText;
}

textarea.addEventListener('keyup', contarChareter);

function concatenarNameLastname() {
  const Name = inputName.value;
  const lastname = inputLastName.value;
  const concatenar1 = ['Nome:', Name, lastname];
  return concatenar1.join(' ');
}

function subistituirNameLastname() {
  const criaNameLastname1 = document.createElement('p');
  criaNameLastname1.innerHTML = concatenarNameLastname();
  criaNameLastname1.className = 'classe-name-lastname';
  divNameLastname.appendChild(criaNameLastname1);
  section1.style.display = 'block';
  inputCheckedAgreement.style.margin = '2%';
}

function concatenarEmail() {
  const email = inputemail.value;
  const concatenar2 = ['Email:', email];
  return concatenar2.join(' ');
}

function subistituirEmail() {
  const criaEmail = document.createElement('p');
  criaEmail.innerHTML = concatenarEmail();
  criaEmail.className = 'classe-email-house';
  divEmailHouse.appendChild(criaEmail);
}

function concatenarCasa() {
  const house = selectHouse.value;
  const concatenar3 = ['Casa:', house];
  return concatenar3.join(' ');
}

function subistituirHouse() {
  const criaHouse = document.createElement('p');
  criaHouse.innerHTML = concatenarCasa();
  criaHouse.className = 'classe-email-house';
  divEmailHouse.appendChild(criaHouse);
}

function checkedBoxFamilia() {
  let strings1 = ['Família: '];
  for (let index = 0; index < radio.length; index += 1) {
    if (radio[index].checked === true) {
      strings1 += `${radio[index].value} `;
    }
  }
  return strings1;
}

function subistituirFamilia() {
  const criarFamilia = document.createElement('p');
  criarFamilia.innerHTML = checkedBoxFamilia();
  criarFamilia.className = 'classe-input-radio';
  conteinerInputRadio.appendChild(criarFamilia);
  conteinerChild.style.display = 'block';
}

function checkedBoxMaterias() {
  let strings2 = ['Matérias: '];
  for (let index = 0; index < materiasEscolhidas.length; index += 1) {
    if (materiasEscolhidas[index].checked) {
      strings2 += ` ${materiasEscolhidas[index].value}, `;
    }
  }
  return strings2;
}

function subistituirMaterias() {
  const criarMAterias = document.createElement('p');
  criarMAterias.innerHTML = checkedBoxMaterias();
  criarMAterias.style.marginTop = '20px';
  conteudoAprender.appendChild(criarMAterias);
}

function checkedBoxAvaliacao() {
  let string3 = ['Avaliação: '];
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked) {
      string3 += ` ${avaliacao[index].value} `;
    }
  }
  return string3;
}

function subistituirEmailAvaliação() {
  const criarAvaliacao = document.createElement('p');
  criarAvaliacao.innerHTML = checkedBoxAvaliacao();
  inputRate.appendChild(criarAvaliacao);
  inputRate.style.margin = '2%';
}

function concatenarTexto() {
  const texto = textarea.value;
  const concatenar4 = ['Observações:', texto];
  return concatenar4.join(' ');
}

function subistituirObservacoes() {
  const criarObservacoes = document.createElement('p');
  criarObservacoes.innerHTML = concatenarTexto();
  conteinerTextarea.appendChild(criarObservacoes);
  conteinerTextarea.style.margin = '2%';
}

function removerElementos() {
  divNameLastname.innerHTML = '';
  divEmailHouse.innerHTML = '';
  conteinerInputRadio.innerHTML = '';
  conteudoAprender.innerHTML = '';
  inputRate.innerHTML = '';
  conteinerTextarea.innerHTML = '';
}

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  removerElementos();
  subistituirNameLastname();
  subistituirEmail();
  subistituirHouse();
  subistituirFamilia();
  subistituirMaterias();
  subistituirEmailAvaliação();
  subistituirObservacoes();
});
