yDoce = [-300, 0, -140]
let x1;
let x2;
let x3;
let x4;
let dg = 0;

let dgY = -100
yY = [-199, 0, -140]


function mostraDoce(){

  xDoce = [x1,x2,x3]
  dgX = [x4]
 for(let i = 0; i < doces.length; i++){
    
    image(doces[i], xDoce[i], yDoce[i], 70, 70)
   
   
  }
}

function movimentaDoce(){
  for(let i = 0; i < doces.length; i++){
    yDoce[i] += 6
    
  if (yDoce[0] > 650){
    yDoce[0] = yY[0]
    x1 = random(100, 515);
  }
    
  if (yDoce[1] > 650){
    yDoce[1] = yY[1]
    x2 = random(100, 515);
  }
    
  if (yDoce[2] > 650){
    yDoce[2] = yY[2]
    x3 = random(100, 515);
  }
    if(yDoce[i] > 646){
      aff.play()
      dg +=1
    } 
}
}
function doceGrande(){
  if (dg == 3 || dg == 4 || dg == 5){
    
    image(doceG, dgX, dgY, 140, 140)
    dgY += 9
  if (dgY > 600){
    dg = 0
    dgY = -100
    aff.play()
    x4 = random(100, 480);
  
  }
  }
}