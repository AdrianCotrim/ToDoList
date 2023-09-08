var listaTarefas = document.querySelector("#lista");

listaTarefas.addEventListener("click", function(event){
    var alvoEvento = event.target;
    var paiEvento = alvoEvento.parentNode;

    if (alvoEvento.classList.contains("checkbox--deletar")){
        paiEvento.remove();
    }
});