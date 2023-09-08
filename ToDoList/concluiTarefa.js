var listaTarefas = document.querySelector("#lista");

listaTarefas.addEventListener("click", function(event){
    var alvoEvento = event.target;
    var paiEvento = alvoEvento.parentNode;

    if (alvoEvento.classList.contains("checkbox--concluir") && alvoEvento.checked == true){
        paiEvento.classList.add("tarefaConcluida");
    } else {
        paiEvento.classList.remove("tarefaConcluida");
    }
});