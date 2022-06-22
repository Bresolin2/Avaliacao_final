function Criar() {

     var nome = document.getElementById("nome");
     var email = document.getElementById("email");
     var senha = document.getElementById("password");
       
     if (nome.value, email.value, senha.value != "") {
         alert('Prezado(a) ' + nome.value + ', sua conta foi criada com sucesso.');   
     } 
         else {           
             alert('Por favor preencha todos os campos!')     
         }
       
}


const express = require('express');
const session = require('express-session');

const port = 3000;
var path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


app.listen(port,()=> {
    console.log('servidor rodando');
})
