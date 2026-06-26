const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

function adicionarTarefa() {

    if (inputTarefa.value.trim() === "") {
        return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = inputTarefa.value;

    listaTarefas.appendChild(novaTarefa);
	
	novaTarefa.style.cursor = "pointer";
	
	novaTarefa.addEventListener("click", function () {
    novaTarefa.classList.toggle("concluida");
});

    inputTarefa.value = "";
    inputTarefa.focus();

}

btnAdicionar.addEventListener("click", adicionarTarefa);