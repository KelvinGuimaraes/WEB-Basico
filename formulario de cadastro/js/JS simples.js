/*  …function estudante()…*/ /*  array com dados inicializados…*/

function estudante(nome,casa,animal, localAtual){
    this.nome = nome;
    this.casa = casa;
    this.animal = animal;
    this.localAtual = localAtual;
}

var alunos =[];
alunos[0]=new estudante( "Harry Potter", "Grifinória","coruja","Dursley's");
alunos[1]=new estudante( "Ronald Wesley","Grifinória","rato","Toca");
alunos[2]=new estudante( "Hermione Granger" ,"Grifinória","gato","Granger's");
alunos[3]=new estudante( "Neville Longbottom", "Grifinória","sapo","StMungus");
alunos[4]=new estudante("DracoMalfoy","Sonserina","coruja", "Beco Diagonal");
alunos[5]=new estudante("Cho Chang","Corvinal","sapo","Hogwarts");
alunos[6]=new estudante("CedrigoDiggory","Lufa-Lufa","sapo","Hogwarts");

function listar(casa) {
    var i;
    var divcasa = document.getElementById('listaralunos');
    var conteudo = "<table class='table'>";
    conteudo += "<tr><th>Nome</th><th>Animal</th><th>Local</th></tr>";
    for (i = 0; i < alunos.length; i++) {
    if (alunos[i].casa == casa) {
    conteudo += "<tr><td>" + alunos[i].nome + "</td>";
    conteudo += "<td>" + alunos[i].animal + "</td>";
    conteudo += "<td>" + alunos[i].localAtual + "</td></tr>";
    }
    }
    conteudo += "</table>";
    divcasa.innerHTML = conteudo;
}

function estudante(nome,casa,animal, localAtual){
    this.nome=nome;
    this.casa=casa;
    this.animal=animal;
    this.localAtual=localAtual;
}

var el =newestudante( "Harry Potter","Grifinória","coruja", "Dursley's");
var e2 =newestudante( "Neville Longbottom","Grifinória","sapo", "Hogwarts");
alert(al.animal);
alert(a2.animal);


function matricular(){
    var e = new
estudante(nome.value,casa.value,animal.value,local.value);
    alunos.push(e);
    alert("Novo aluno adicionado!");
    nome.value="";
    casa.value="";
    animal.value="";
    local.value="";
}