import { usuarios } from "../data/user.js";

let formulario = document.getElementById('formularioLogin')



formulario.addEventListener('submit', evento =>{
    evento.preventDefault();
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value

    if(validarLogin(login,senha)){
        window.location.href = "index.html"
    }else{
        alert("verifique seu login")
    }

})

function validarLogin(login,senha){

    let loginformatado = login.toLowerCase()
    let encontrou = usuarios.find(element => element.login == loginformatado && element.senha == senha)

    localStorage.setItem("login", encontrou.login);
    localStorage.setItem("matricula", encontrou.matricula);
    localStorage.setItem("nomeuser", encontrou.nome);
    return(encontrou)
    
}

/*
formulario.addEventListener('submit', evento =>{
    evento.preventDefault();
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if(login == "admin" && senha == "123"){
        localStorage.setItem("login", "Administrador");
        window.location.href = "inicio.html"
    }else{
        alert("Informe um usuário válido")
    }

})
*/