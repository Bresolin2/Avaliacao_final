function Criar() {

    var nome = document.getElementById("nome");
       

    if (nome.value != "") {
        alert('Prezado(a) ' + nome.value + ', sua conta foi criada com sucesso.');   
    } 
        else {
            
            alert('Por favor preencha todos os campos!')     
        }
       
}

