let listaTarefa = []
alert('Bem vido ao seu gerenciador de tarefas')

while(true){

    let opcoes = Number(prompt('1-> Adicionar Tarefas \n 2-> Remover Tarefa \n 3-> Mostra Tarefas \n 4 -> Atualizar Tarefa \n 5-> Sair '))

    if(opcoes === 1){
        let add = prompt('Adicione sua Tarefa: ')
        listaTarefa.push(add)
        alert('Tarefa adicionada!')
        
    }

    else if (opcoes ===2 ){
        let remover = Number(prompt('Qual Tarefa deseja Remover(Digite o Número da Tarefa)'))
        if (remover >= 0 && remover < listaTarefa.length){
            listaTarefa.splice(remover, 1)
            alert('Tarefa Removida')
        }
        else{
            alert('Vazio ou Número de Tarefa Invalido!')
        }
    }

    else if (opcoes === 3){
        alert('Tarefas:');
        listaTarefa.forEach((tarefa, index) => {
            alert(`${index}: ${tarefa}`)
        })

        
    }
    
    else if (opcoes === 4){
        let atualizar = prompt('Qual tarefa deseja atualizar? (Informe o número da tarefa)')
        if (atualizar >=0 && atualizar < listaTarefa.length){
            let novaTarefa = prompt('Informe sua nova Tarefa: ')
            listaTarefa[atualizar] = novaTarefa
            alert('Tarefa atualizada!')
        }

        else{
            alert('Númeda da tarefa incorreto!')
        }

    }

    if (opcoes === 5){
        alert('Obrigado, Volte Sempre!')
        break
    }
}

