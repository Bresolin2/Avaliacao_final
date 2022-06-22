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
const bodyParser = require('body-parser');

const port = 3000;
var path = require('path');
const app = express();

var login = "admin";
var senha = "123";

app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/', (req, res)=> {
    
    if(req.body.password == senha && req.body.login == login) {
        //Logado com sucesso
        req.session.login = login;
    }




    res.render('../html/Login.html');
    res.render('../html/Login.css');
})

app.get('/', (req, res)=> {
    if(req.session.login){
        res.render('../home.html')
        res.render('../css/estilo.css')
    }
    else{

    res.render('../html/Login.html');
    res.render('../html/Login.css');
    }
})


app.listen(port,()=> {
    console.log('servidor rodando');
})
