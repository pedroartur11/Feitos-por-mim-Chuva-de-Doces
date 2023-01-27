let personagem;
let ImagemFundo;
let doce;
let moeda;
let aff;
let terra;
let ai;
let musica;
let fpm;
let dash;
let telaDerrota

function preload(){
  personagem = loadImage("imagens/personagem.png")
  doce = loadImage("imagens/doce.png")
  ImagemFundo = loadImage("imagens/background.png")
  doces = [doce,doce,doce]
  moeda = loadSound("imagens/moeda.mp3")
  aff = loadSound("imagens/aff.mp3")
  terra = loadSound("imagens/terra.mp3")
  ai = loadSound("imagens/ai dentro.mp3")
  musica = loadSound("imagens/loop.mp3")
  fpm = loadImage("imagens/fpm.jpeg")
  doceG = loadImage("imagens/doce.png")
  dash = loadSound("imagens/dash.mp3")
  telaDerrota = loadImage("imagens/derrota.jpg")
}