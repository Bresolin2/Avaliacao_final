$(document).ready(function(){
    $("#logar").click(function(){
        var nome = $("#nome").val();
        var password = $("#password").val();
        const userValido = 'admin';
        const passwordValido = '123';

        if (logar = userValido && password == passwordValido){
            window.open("home", "_blank");
        }else{
            alert("Usuário ou senha Inválidos!");
        }
    });
});