let result = document.querySelector("#result")
var oldTable;

function searchWord() {
    var counts = {} //Objeto onde se guardará as palavras e a quantidade a qual ela se repete
    var keys = []
    let text = document.querySelector("#text").value;
    let x = text.replace(/[^A-Za-z0-9]+/g, " ");    
    let tokens = x.trim().split(/\W+/);
    
    if (text == '') {
        alert("Por favor, insira um texto para continuar.");
        return;
        
    }


    if (oldTable != undefined) {
        deleteTable()
    }
    

    
    for (var i = 0; i < tokens.length; i++) {
        var word = tokens[i].toLowerCase();
        Object.assign(counts, { [word]: counts[word] ? counts[word] + 1 : 1 }) //Utiliza-se o método "assign" para criar um novo objeto que possui todas as palavras e suas quantidades
        //ALém disso realiza-se uma verificação, a qual se a palavra for repetida ela irá ser somada com 1, caso contrário, o valor dela será 1. 
        keys.push(word)
    }
    
    counts = Object.entries(counts)
        .sort(([,a],[,b]) => b-a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    Object.keys(counts).forEach(function (key, index) {
        var value = counts[key];  
        console.log(index, key, value);
        table(index + 1, key, value)
    });

    oldTable = document.getElementById("table");
    
    /*for(var i = 0; i < tokens.length; i++) {
        result.innerHTML= counts + "" + keys + "<br>";
       
    }*/
    
}

function sortByFrequency(array) {
    var frequency = {}; //Objeto da frequência

    array.forEach(function(value) { frequency[value] = 0; });

    var uniques = array.filter(function(value) {
        return ++frequency[value] == 1;
    });

    return uniques.sort(function(a, b) {
        return frequency[b] - frequency[a];
    });
}

function table(x, y, z) {
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z; 

}

function deleteTable() {
    var table = document.getElementById("table");
    table.innerHTML = '';
    console.log("Função chamada")
}
