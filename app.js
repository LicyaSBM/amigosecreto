let amigos = [];
let sorteados = [];

function adicionarAmigo(){   
    let input = document.getElementById('amigo');//Capturar o valor do campo de entrada: 
    let nome =input.value.trim();//Validar a entrada:

    if (nome == ''){
        alert ('Por favor, insira um nome');
        return;//Se estiver vazio
    }

    //verificar nomes duplicados
    if (amigos.includes(nome)){
        alert('Esse nome já existe na lista!');
        input.value = '';
        input.focus();
        return;
    }

    amigos.push(nome);//Atualizar o array de amigos
    atualizarAmigos();
    input.value = '';//Limpar o campo de entrada
    input.focus();
}

function atualizarAmigos(){
    let ul = document.getElementById('listaAmigos');//Obter o elemento da lista:
    ul.innerHTML = '';//Limpar a lista existente

    ////Percorrer o array
    amigos.forEach(function(amigo){
        let li = document.createElement('li');
        li.textContent = amigo;//coloca o nome do amigo dentro li
        ul.appendChild(li);
    });
}

//função sortear amigo
function sortearAmigo(){

    if (amigos.length < 3 && sorteados.length === 0){
        alert('Precisa de pelo menos 3 participantes, para iniciar o sorteio.');
        return;
    }

    if (amigos.length === 0){
        alert('Todos já foram sorteados! Iniciando uma nova lista...');
        novaLista();
        return;
    }
        //gerar um indice aleatório
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        //amigo sorteado
        let amigoSorteado = amigos[indiceAleatorio];

        sorteados.push(amigoSorteado);
        //remove o amigo ja sorteado
        amigos.splice(indiceAleatorio, 1);
        atualizarAmigos();
        //resultado
        let ulresultado = document.getElementById('resultado');
        ulresultado.innerHTML = '';
        let li = document.createElement('li');
        li.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
        ulresultado.appendChild(li);
}

function novaLista(){
    amigos = [];
    sorteados = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    alert('Novo sorteo iniciado! Adicione novos amigos.');

}

