// 1. Criamos uma variavel 'contador' para controlar
//qual imagem deve aparecer
let contador = 1;

//2. A função 'setInterval' é um temporizador do navegador
//Ele vai executar a 'proxImg' repetidamente a cada 5000 mili segundos
// 5(segundos)
setInterval(function(){
  proxImg();
}, 5000);

//3. Esta é função responsavel por trocar nossas imagens.
function proxImg(){
  //Toda vez que função roda, somamos +1 ao contador para ir proxima imagem.
  contador++; 
  //Lógica da repetição
  //Como agora usamos 4 imagens, reiniciamos para 1 e o carrossel voltará
  //para o inicio (loop)
  if (contador > 4) {
     contador = 1
  }
    //MANIPULAÇÃO DO 
    //HTML (DOM)
    //Aqui o JavaScript procura o html, o elemento que tem o id "radio"
    //+ o numero do contador.
    //O '.checked = true' marca aqueles inputs de radio automaticamente
    //Quando o radio é marcado, o CSS que configuramos ira mudar a imagem automaticamente.
    document.getElementById("radio" + contador).checked = true;                                            
  }