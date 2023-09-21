
function validarcessao(){
    const login = localStorage.getItem("login")
    const matricula = localStorage.getItem("matricula")
    const nomeuser = localStorage.getItem("nomeuser")
    

    if(login == false){
        window.location.href = "erro.html"
    }

    var logado = document.getElementById('logado')
    logado.innerHTML = "Bem vindo "+nomeuser
    
    
}

function encerrar(){
    localStorage.setItem("login", "");
    localStorage.setItem("matricula", "");
    localStorage.setItem("nomeuser", "");
    window.location.href = "erro.html"
}

function voltarlogin(){
    alert("Faça login para continuar")
    window.location.href = "login.html"
}

function formulary(tipo){
    localStorage.setItem("tipo_formulary", tipo);
    window.location.href = "formulario.html"
    verdata()
}
function preencherdadosauto(){

    validarcessao()
    const login = localStorage.getItem("login")
    const matricula = localStorage.getItem("matricula")
    const nomeuser = localStorage.getItem("nomeuser")
    const tipoformul = localStorage.getItem("tipo_formulary")

    let campo_data = document.querySelector("#data")
    let campo_mat = document.querySelector('#matfunc')
    let campo_func = document.querySelector('#nomefunc')
    let campo_tipo = document.querySelector('#tipoform')

    let datasistema = new Date()

    let dia = datasistema.getDate()
    let mes = datasistema.getMonth()
    let ano = datasistema.getFullYear()
    mes++

    campo_data.value = dia+"/"+mes+"/"+ano;
    campo_mat.value = matricula;
    campo_func.value = nomeuser;
    campo_tipo.value = tipoformul;

}
