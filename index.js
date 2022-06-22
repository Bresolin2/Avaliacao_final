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
};