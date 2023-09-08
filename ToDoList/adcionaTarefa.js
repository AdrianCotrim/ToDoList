var botaoAdcionar = document.querySelector("#botao--adcionar");
botaoAdcionar.addEventListener("click", function(event){
    event.preventDefault();

    var formTarefa= document.querySelector("form");
    var tarefa = formTarefa.tarefa.value;
    
    if(formTarefa.tarefa.value != ''){
        adcionaTarefa(tarefa);
        formTarefa.reset();  
    }

    
});


function adcionaTarefa(tarefa){
    var listaTarefas = document.querySelector("#lista")
    var tarefaLi = document.createElement("li");

    var checkboxConcluir = criaCheckboxConcluir();
    var tarefaLabel = document.createElement("label")
    tarefaLabel.textContent = tarefa;
    tarefaLabel.htmlFor = "";
    var checkboxDeletar = criaCheckboxDeletar();
    
    
    tarefaLi.appendChild(checkboxConcluir);
    tarefaLi.appendChild(tarefaLabel);
    tarefaLi.appendChild(checkboxDeletar);
    listaTarefas.appendChild(tarefaLi);
}

function criaCheckboxConcluir(){
    var checkboxConfirma = document.createElement("input");
    checkboxConfirma.classList.add("checkbox--concluir");
    checkboxConfirma.setAttribute("id", Date.now())
    checkboxConfirma.type = "checkbox";

    return checkboxConfirma;
}

function criaCheckboxDeletar(){
    var checkboxDeletar = document.createElement("input");
    checkboxDeletar.classList.add("checkbox--deletar");
    checkboxDeletar.type = "checkbox";

    return checkboxDeletar;
}