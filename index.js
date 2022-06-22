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