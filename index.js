function logar(){
    var nome = document.getElementById("nome");
    var password = document.getElementById("password");

        if (nome == "admin" && password == "123"){
            localStorage.setItem(acesso, true);

            windows.location.href = "home.html";
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
