function logar(){
    var login = document.getElementById("nome");
    var senha = document.getElementById("password");

        if (login = "admin" && senha == "123"){
            localStorage.setItem(acesso, true);

            window.location.href = "home.html";
        }
        else {
            alert("Usuário ou senha Inválidos!");
        }
};