function setup() {
  createCanvas(700, 600);
  x1 = random(100, 515);
  x2 = random(100, 515);
  x3 = random(100, 515);
  x4 = random(100, 480);
  musica.loop()
  

}

function draw() {
  background(ImagemFundo);
  mostrarAtor(); 
  movimentaPersonagem();
  mostraDoce();
  movimentaDoce();
  colisao();
  temporizador();
  doceGrande();
  derrota();
  mostraPontos();
  
  

  

                
                
                
                
                           
                
}