// ARRAY DAS FRUTAS:

let listaDasFrutas = [
    {
        fruta: 'Mamão Papaya',
        preco: 5.00,
    },
    {
        fruta: 'Laranja',
        preco: 2.50,
    },
    {
        fruta:'Manga',
        preco: 7.20, 
    },
    {
        fruta: 'Melão',
        preco: 10.70,
    },
    {
        fruta: 'Melancia',
        preco: 6.20,
    },
    {
        fruta: 'Nevascaranga',
        preco: 20.30,
    },
];


// FUNÇÃO DINÂMICA PARA CRIAR A LISTA DE PRODUTOS:

const listaDeProdutos = document.querySelector('#produtos');

(function(){
    for (let objects of listaDasFrutas){        //for para percorrer o array
        for(let properties in objects){         //for para percorrer o objeto
            if(properties == 'fruta'){          //criar elementos li
                var elementoProduto = document.createElement('li');
                elementoProduto.textContent = objects[properties];
                elementoProduto.setAttribute('class', 'li-produtos');
                listaDeProdutos.appendChild(elementoProduto);
            }else{                              //atribuir propriedade ao elemento
                elementoProduto.setAttribute('preco', objects[properties]);
            }
        }
    }
}) ()


// FUNÇÃO CALCULAR:

function calcularSoma(){
    let inputTotal = document.querySelector('#mostraTotalCompra');
    let listaDePrecos = document.querySelectorAll('#cestaDoCliente > li');
    let somaParcial = 0;

    for(let umPreco of listaDePrecos){
        somaParcial = somaParcial + Number(umPreco.getAttribute('preco'));
    }

    let brzReal = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    let preco_real = brzReal.format(somaParcial);
    
    inputTotal.value = preco_real;
}


// FUNÇÃO ADICIONAR À CESTA + CALCULAR:

let cestaDoCliente = document.querySelector('#cestaDoCliente');
var arrayCesta = [];

listaDeProdutos.addEventListener('click', function(itemClicado){
    if(itemClicado.target.nodeName == 'UL'){
        alert("Selecione apenas 1 produto");
    }
    else if(arrayCesta.indexOf(itemClicado.target.textContent) == -1){
        let produtoAdicionado = document.createElement('li');
        produtoAdicionado = itemClicado.target;
        var copyElement = produtoAdicionado.cloneNode(true);
        copyElement.setAttribute('class', 'li-cesta');
        cestaDoCliente.appendChild(copyElement);
        arrayCesta.push(itemClicado.target.textContent);
    }else{
        alert("O item já está na cesta");
    }
    calcularSoma();
})


// FUNÇÃO REMOVER DA CESTA + CALCULAR:

cestaDoCliente.addEventListener('click', function(itemClicado){
    itemClicado.target.remove();
    for(let j = 0; j < arrayCesta.length; j++){
        if (arrayCesta[j] == itemClicado.target.textContent){
            arrayCesta.splice(j,1);
        }
    }
    calcularSoma();
})