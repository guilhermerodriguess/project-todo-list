// No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

var acessButton = document.getElementById('criar-tarefa')

acessButton.addEventListener('click', AdicionaTarefa)

function AdicionaTarefa () {
    let acessInput = document.getElementById('texto-tarefa')
    let acessOl = document.getElementById('lista-tarefas')
    let createTask = document.createElement('li')
    createTask.innerText = acessInput.value

    acessOl.appendChild(createTask)
    acessInput.value = ''
}