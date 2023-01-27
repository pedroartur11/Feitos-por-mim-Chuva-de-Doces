let xAtor = 300
let yAtor = 380
let colidiu
let tempo = 3
let colidiu2
let morte = 0
let pontos = 0
let speed = 5
let tempoBoost = 0
let xBotao = 300
let yBotao = 560
let lBotao = 100
let hBotao = 30


function mostrarAtor(){
  image(personagem, xAtor, yAtor, 50, 70)
  
}
  
    

function movimentaPersonagem(){
  if (keyIsDown(RIGHT_ARROW)){
    if(xAtor<515)  
    xAtor += speed
  }
  if (keyIsDown(LEFT_ARROW)){  
    if(xAtor>100)  
     xAtor -= speed
  }
}

function colisao(){
    for(let i = 0; i < doces.length; i++){
     colidiu = collideRectCircle(xDoce[i], yDoce[i], 70, 70, xAtor, yAtor + 50, 1)
    if (colidiu){
      yDoce[i] = 650
      tempo +=1
      moeda.play()
      pontos +=1
    }
  
  colidiu2 = collideRectCircle(dgX[0], dgY, 70, 70, xAtor, yAtor, 7)
  
      if (colidiu2){
          dgY = -100
          tempo +=3
          moeda.play()
          pontos +=3
          dg = 0
          x4 = random(100, 515);
    } 
       
     
  }
}

function temporizador(){
  if (tempo > 0){
    tempo -= 0.016
  if (tempoBoost <= 2){
    
  }
    
  }
  
  textSize(30)
  text(int(tempo), 650, 50)
  text("Tempo: ", 540, 50)
}

function derrota(){
  for(let i = 0; i < doces.length; i++){
    if (tempo <= 0){
      yDoce[i] = -9999999999
      morte = 1
      xAtor = 5000
      musica.stop()
      
      background(telaDerrota)
      terra.playMode("untilDone")
      terra.play()
      
      //var button = createButton("Reset")
      //button.mousePressed(resetSketch)
      rect(xBotao,yBotao,lBotao,hBotao)
      fill(255)
      textSize(20)
      fill(0)
      text("Try Again", xBotao+6, yBotao+20)
      
      
      fill(255)
      text("Você fez:", 120, 580)
      text(pontos, 205, 580)
      text("Pontos!", 230, 580)
    
}
      
      
  
    
  }
}

function mostraPontos(){
  textSize(30)
  fill(0)
  text(int(pontos), 100, 50)
  
  text("Pontos: ", 0, 50)
}

function keyPressed(){
  if (keyCode === 32){
   speed = 8
   dash.playMode("untilDone")
   dash.play()
   
  
  }
 }

function keyReleased(){
  if (keyCode === 32){
    speed = 5
    
  }
}

function resetSketch(){
  background(ImagemFundo)
  musica.stop()
  xAtor = 300
  tempo = 30
  yDoce[0] = -300
  yDoce[1] = 0
  yDoce[2] = -140
  musica.loop()
  terra.stop()
  pontos = 0
}

function mouseClicked() {
  
  if(mouseX>=xBotao && mouseX<=(xBotao+lBotao) && mouseY>=yBotao && mouseY<=(yBotao+hBotao) || tempo <= 0){
    resetSketch()
  }
}