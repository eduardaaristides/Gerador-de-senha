let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345679";

let novaSenha = "";

// Exibir o valor inicial do slider
sizePassword.innerHTML = sliderElement.value;

// Atualizar o valor exibido conforme o slider é movido
sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

// Função para gerar a senha
function generatePassword() {
    let pass = "";
    // Corrigido o erro na parte do laço "for"
    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));  // Gera um caractere aleatório
    }

    // Mostrar o campo da senha
    containerPassword.classList.remove("hide");

    // Exibir a senha gerada
    Password.innerHTML = pass;
    novaSenha = pass;
}


function copyPassword(){
    alert("senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}