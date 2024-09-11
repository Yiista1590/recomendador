let campoIdede;
let campoAcao;
let campoFantasia;


function setup() {
  createCanvas(750, 400);
  createElement("h2", "Recomendador de Filmes, Series e Animes");
  createSpan("Sua Idade:")
  campoIdade = createInput("16");
  campoFantasia = createCheckbox("Gosta de Fantasia");
  campoAcao = createCheckbox("Gosta de Ação?")
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeAcao = campoAcao. checked();
  let gostaDeFantasia = campoFantasia. checked();
  let recomendacao  = geraRecomendacao(idade, gostaDeAcao, gostaDeFantasia);
  fill(color(76, 0, 115));
  textSize(38);
  textAlign(CENTER, CENTER);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAcao, gostaDeFantasia) {
  if (idade >= 16) {
    if (gostaDeAcao || gostaDeFantasia) {
      return "Solo Leveling";
    } else { 
      return "Rick and Morty";
    }
 
  } else {
    if (idade >= 14) {
    if ( gostaDeAcao){
      return "Tokyo Revengers";
    } else {
      return "Tsukimichi Moonlit";
    }
    } else
      if (idade >= 12) {
        return "O hobbit";
      } else {
       return "Bee Movie";
      }
    
  }
}