function Criar() {

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (nome.value && email.value && password.value = "") {
           alert('Por favor preencha todos os campos!')     
    } 
        else {
            alert('Prezado(a) ' + nome.value + ', sua conta foi criada com sucesso.');   

        }
       
}
