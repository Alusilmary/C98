player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
//localStorage-permite obter os dados armazenados localmente
//getItem("player1_name")- é o método usado para obter o valor armazenado localmente
//player1_name- a chave a ser passada para getItem()

player1_score = 0;//variável para armazenar o placar do jogador
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
//(player1_name + " : ")- armazenará o valor do nome de player para que o resultado seja o mesmo nome

document.getElementById("player1_score").innerHTML = player1_score; 
document.getElementById("player2_score").innerHTML = player2_score;
//Como definimos o valor da variável “player1_score” para 0, devemos atualizar o placar
//de player1 utilizando a id “player1_score”.

document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name;
//"Turno de Perguntas - " + player1_name - armazenará o nome de player1
//"Turno de Resposta - " + player2_name - armazenará o nome de player2


function send() {

    //obtem a palavra inserida na caixa de entrada usando a sua id e armazena em uma variável
    get_word = document.getElementById("word").value;

    //converte todas as entradas de palavras para letras minúsculas
    word = get_word.toLowerCase();

    //imprimir essa palavra no console para verificar se funciona
    console.log("palavra em letras minúsculas = " + word);

    charAt1 = word.charAt(1);
    //word- é a variável que armazena a palavra inserida pelo jogador.
    //charAt() é a função que utilizamos para obter uma letra específica em uma palavra.
    //Index_of_letter representa o número do índice da letra que gostaríamos de obter
    console.log(charAt1);

    //word.length/2-Divide o comprimento da palavra por 2, e a armazena em uma variável
    //math.floor- arredonda o número decimal para o número inteiro mais baixo mais próximo
    //isso é feito para descobrir a letra central da palavra
    length_divide_2 = Math.floor(word.length/2);

    //passaremos o valor de length_divide_2 para charAt
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);
    //Diminuir o valor do comprimento da palavra em 1 e armazenaremos em uma variável
    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    //Word.replace(“palavra/letra a ser substituída”,”palavra/letra que substituirá”)
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);
    
    //cria uma tag h4 para armazenar a palavra dentro
    question_word = "<h4 id='word_display'> P. " + remove_charAt3 + "</h4>";
    //caixa de entrada para armazenar a resposta
    input_box = "<br>Resposta: <input type='text' id='input_check_box'>";
    //botão com classe bootstrap e uma função onclick
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    // Adiciona as variáveis da palavra, da caixa de entrada e do botão Verificar na variável.
    row = question_word + input_box + check_button;
    //Atualizaremos a div com a id="output" com a nova variável, row
    document.getElementById("output").innerHTML = row;
    //atualizaremos o valor da caixa de entrada de respostas com um valor nulo
    document.getElementById("word").value = "";

}