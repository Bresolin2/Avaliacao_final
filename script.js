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

app.use(session({secret:'secret'}));

app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/', (req, res)=> {
    console.log(req.body.login);
    res.render('../html/Login.html')
})

app.get('/', (req, res)=> {
    res.render('../html/Login.html')
})


app.listen(port,()=> {
    console.log('servidor rodando');
})
