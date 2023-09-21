let inputs = []
let todosnomes = []
let respondidas = []

function exibirperguntas(id){
    
    let tabela = document.getElementById(id)
    event.preventDefault()

    if(tabela.style.display == 'none'){
        tabela.style.display = 'block'
        

    }else{
        tabela.style.display = 'none'
    }

    verificaralteracao(tabela,id)

}


function verificaralteracao(tabela,id){
    tabela.addEventListener('change', evento =>{
    
        inputs = tabela.getElementsByTagName('input')
        total = inputs.length;
    
        respondidas = []
        todosnomes = []
        for(let i = 0; i<total;i++){
            todosnomes.push(inputs[i].name)
            
            if(inputs[i].checked){
                respondidas.push(inputs[i].checked)
            }
            
        }
    
        let semrepetidas = [...new Set(todosnomes)]
        let totalperguntas = semrepetidas.length -1
        let totalrespondidas = respondidas.length
    
        console.log("Total perguntas "+totalperguntas+" Total respondidas "+totalrespondidas)
        let iconcheck = document.querySelector('#'+id+'_check')
        if(totalperguntas == totalrespondidas){
            iconcheck.style.display = 'block'
        }else{
            iconcheck.style.display = 'none'
        }
    })
}








