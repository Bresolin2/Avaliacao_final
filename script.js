function Criar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Prezado(a) ' + nome.value + ', sua conta foi criada com sucesso.');
    } 
        else {
            alert('Nome não informado!')

        }
    

}


let btn = document.querySelector('.lnr-eye');
btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});