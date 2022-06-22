$(document).ready(function(){
    $("#button").click(function(){
        var nome = $("#nome").val();
        var password = $("#password").val();
        const userValido = 'admin';
        const passwordValido = '123';

        if (nome = userValido && password == passwordValido){
            window.open("../home.html", "_blank");
        }
        else {
            alert("Usuário ou senha Inválidos!");
        }
    });
});



// função botão criar do cadastro

function Criar() {

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("password");      
        
     if (nome.value && email.value && senha.value != "") {
         alert('Prezado(a) ' + nome.value + ', sua conta foi criada com sucesso.');   
       } 
           else {           
               alert('Por favor preencha todos os campos!')     
           }
}

// fim da função botão criar
//-------------------------------------   
