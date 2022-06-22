function logar() {
    var usuario = document.getElementById("usuario");
    var passlogin = document.getElementById("passlogin");

        if (usuario.value == "admin" && passlogin.value == "123") {
            //localStorage.setItem(acesso, true);
            window.location.pathname = "home.html";
            
        }
        else {
            alert("Usuário ou senha Inválidos!");
        }
    }




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
