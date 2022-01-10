// No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

var acessButton = document.getElementById('criar-tarefa')
var acessOl = document.getElementById('lista-tarefas')


acessButton.addEventListener('click', AdicionaTarefa)

function AdicionaTarefa () {
    let acessInput = document.getElementById('texto-tarefa')
    let acessOl = document.getElementById('lista-tarefas')
    let createTask = document.createElement('li')
    createTask.innerText = acessInput.value

    acessOl.appendChild(createTask)
    acessInput.value = ''
}

acessOl.addEventListener('click', seleciona)

function seleciona (origem) {
  let acessLi = document.querySelectorAll('li')
  origem.target.classList.add('select')

  for(i = 0; i < acessLi.length; i++) {
    if (acessLi[i].classList.contains('select') && acessLi[i].innerText !== origem.target.innerText) {
      acessLi[i].classList.remove('select')
    }
  }
}

acessOl.addEventListener('dblclick', complete)

function complete (origem) {

  if (origem.target.classList.contains('completed')) {
    origem.target.classList.remove('completed')
  }
  else {
    origem.target.classList.add('completed')
  }
}