import { perguntas } from "../data/perguntas.js";
import { colecaoSenso } from "../data/senso.js";

let allSenso = colecaoSenso;
let allquestions = perguntas;
let formulario = localStorage.getItem("tipo_formulary")

//let colecaoperguntas;
//let totalperguntas;

//Lista de tabelas
const tabelas = ['tabela_utilization','tabela_ordenacao','tabela_limpeza','tabela_saude','tabela_autodisciplina']
let tabela;
let incluirtabble = "";


//Aqui repete uma vez pra cada tabela
allSenso.forEach(function callback(item, index) {
    tabela = tabelas[index]

    //aqui chama a função para filtrar
    filtrarperguntas(allquestions,item,tabela);
});
//Aqui é a função que filtra as perguntas
function filtrarperguntas(lista,senso,tabela){
    let listafiltrada = lista.filter(item => item.tipo == formulario && item.senso == senso && item.ativo)
    let itens =listafiltrada.length;

    criarquestionarios(listafiltrada, itens, tabela)
}
//Aqui cria o arquivo html para incluir na tabela
function criarquestionarios(listafiltrada, itens, tabelaID){
    //repete para cada pergunta
    for(let i=0;i<itens;i++){
        let naoAplica = "";
        if(listafiltrada[i].na){
            
            naoAplica = "<div class='radio_input_separador'><input type='radio' name='data["+listafiltrada[i].id+"]' id='na'"+listafiltrada[i].id+" class='radio_input' value='' required><label for=na'"+listafiltrada[i].id+">N/A</label></div>"

        }

        incluirtabble = incluirtabble + "<tr><td>" + 
        "<div><span class='idpergunta'>"+listafiltrada[i].id+"</span><p>"+listafiltrada[i].pergunta+"</p></div>" +
        "<div class='coletion_input'>" + 
            "<div class='radio_input_separador'>" +
                "<input type='radio' name='data["+listafiltrada[i].id+"]' id='ruim'"+listafiltrada[i].id+" class='radio_input' value='40' required>" +
                "<label for=ruim'"+listafiltrada[i].id+">Ruim</label>" +
            "</div>" +
            "<div class='radio_input_separador'>" +
                "<input type='radio' name='data["+listafiltrada[i].id+"]' id='regular'"+listafiltrada[i].id+" class='radio_input' value='70' required>" +
                "<label for=regular'"+listafiltrada[i].id+">Regular</label>" +
            "</div>" +
            "<div class='radio_input_separador'>" +
                "<input type='radio' name='data["+listafiltrada[i].id+"]' id='bom'"+listafiltrada[i].id+" class='radio_input' value='80' required>" +
                "<label for=bom'"+listafiltrada[i].id+">Bom</label>" +
            "</div>" +
            "<div class='radio_input_separador'>" +
                "<input type='radio' name='data["+listafiltrada[i].id+"]' id='otimo'"+listafiltrada[i].id+" class='radio_input' value='90' required>" +
                "<label for=otimo'"+listafiltrada[i].id+">Ótimo</label>" +
            "</div>" +
            "<div class='radio_input_separador'>" +
                "<input type='radio' name='data["+listafiltrada[i].id+"]' id='exelente'"+listafiltrada[i].id+" class='radio_input' value='100' required>" +
                "<label for=exelente'"+listafiltrada[i].id+">Exelente</label>" +
            "</div>" + naoAplica +
        "</div></td></tr>"
    }
    
    tabela = document.getElementById(tabelaID)
    //aqui inclui todas as perguntas na tabela certa
    tabela.innerHTML = "<table id='"+tabelaID+"' style='display: none;'>"+incluirtabble+
        "<input type='text' name='data[obs_"+tabelaID+"]' class='campo_obs' placeholder='Comentar o porquê de conceitos diferentes de EXCELENTE'>" +
    "</table>"
    //depois limpa para preencher uma nova
    incluirtabble = ""
}



let formularioCompleto = document.querySelector('#form5s')
formularioCompleto.addEventListener('submit', evento=>{
    evento.preventDefault;
    let all = formularioCompleto.querySelector('input')
    console.log(all)
    alert("ok")
})