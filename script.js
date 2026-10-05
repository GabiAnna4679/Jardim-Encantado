function mostrarMensagem() {
    alert("Buquê selecionado! Entre em contato para fazer seu pedido. 💐");
}

function enviarFormulario(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;

    alert("Obrigada pela mensagem, " + nome + "! 🌷 Entraremos em contato em breve.");

    document.querySelector("form").reset();
}