//Tratamento de eventos
document.querySelector("#mail").addEventListener("change", registrar)
document.querySelector("#botao-cadastrar").addEventListener("click", cadastrar)
document.querySelector("#porcoes").addEventListener("change", calcular)




function registrar(){
    const email_frango = document.querySelector("#mail").value
    let email_resposta = console.log(email_frango)    
}

function cadastrar(){

    alert("OBRIGADO PELO SEU EMAIL! <3")
}

function calcular(){
    const quantidade_pratos = document.querySelector("#porcoes").value
    
    //frango receita
    let frango = (quantidade_pratos * 120)
    console.log(frango)
    document.getElementById("item_01").innerHTML = frango
    
    //farinha de trigo frango
    let farinha_frango = (quantidade_pratos * 0.3).toFixed(2)
    console.log(farinha_frango)
    document.getElementById("item_02").innerHTML = farinha_frango
    

    //mostarda frango
    let mostarda = (quantidade_pratos * 0.4).toFixed(2)
    console.log(mostarda)
    document.getElementById("item_03").innerHTML = mostarda

    //sal
    let sal = (quantidade_pratos*0.05).toFixed(2)
    document.getElementById("item_04").innerHTML = sal

    //pimenta
    let pimenta = (quantidade_pratos*0.05).toFixed(2)
    document.getElementById("item_05").innerHTML = sal

    //azeite
    let azeite = (quantidade_pratos*0.2).toFixed(2)
    document.getElementById("item_06").innerHTML = azeite

    //agua_frango
    let agua_frango = (quantidade_pratos*0.2).toFixed(2)
    document.getElementById("item_07").innerHTML = agua_frango

    //suco laranja
    let suco = (quantidade_pratos*0.2).toFixed(2)
    document.getElementById("item_08").innerHTML = suco

    //limao
    let limao = (quantidade_pratos*0.2).toFixed(2)
    document.getElementById("item_09").innerHTML = limao

    //shoyu
    let shoyu = (quantidade_pratos*0.6).toFixed(2)
    document.getElementById("item_10").innerHTML = shoyu
    
    //raspas
    let raspas = (quantidade_pratos*0.2).toFixed(2)
    document.getElementById("item_11").innerHTML = raspas

    //mel
    let mel = (quantidade_pratos*0.1).toFixed(2)
    document.getElementById("item_12").innerHTML = mel
        
    //cebola
    let cebola = (quantidade_pratos*0.1).toFixed(2)
    document.getElementById("item_13").innerHTML = cebola

    //cebolinha
    let cebolinha = (quantidade_pratos*0.4).toFixed(2)
    document.getElementById("item_14").innerHTML = cebolinha

    //farinha
    let farinha = (quantidade_pratos*0.6).toFixed(2)
    document.getElementById("item_15").innerHTML = farinha

    //agua_c
    let agua_c = (quantidade_pratos*0.4).toFixed(2)
    document.getElementById("item_16").innerHTML = agua_c 
}

//DOM - Document Object Model

