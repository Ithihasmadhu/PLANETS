function preload(){

  sunI = loadImage("sun.png");
  mer = loadImage("mercury.png");
  venusI = loadImage("VENUS.png");
  earthI = loadImage("earth-icon.png");
  marsI = loadImage("Mars.png");
  jupitarI = loadImage("JupiteR.png");
  saturnI = loadImage("saturn.png");
  uranusI = loadImage("uranus.png");
  neptuneI = loadImage("neptune.png");
  bg = loadImage("back.png");

  js = loadSound("Jupiter sounds (so strange!) NASA-Voyager recording.mp3");
  ss = loadSound("The Eerie Sounds Of Saturn.mp3");
  ns= loadSound("The Neptune's sounds.mp3");
  us = loadSound("This Is What Uranus Sounds Like (Bizarre!) 4K UHD.mp3");
  ms = loadSound("Sounds Of Mercury. Pretty Creepy Sounds..mp3");
  es = loadSound("The 'Voice' Of Our Earth (HD3D).mp3");
  vs = loadSound("Radio signal from Venus turned into sound by NASA.mp3");
  sunS = loadSound("NASA Sounds of the Sun (Low Frequency).mp3");
}

function setup() {
  
  createCanvas(1800,900);
  
  sun=createSprite(900,450);
  sun.addImage(sunI);
  sun.scale=0.825;
  
  
  
  merc=createSprite(600,450)
  merc.addImage(mer);
  merc.scale=0.17;
 
  
  venus= createSprite(500,200);
  venus.addImage(venusI);
  venus.scale=0.125;
  
  earth = createSprite(300,700);
  earth.addImage(earthI)
  earth.scale=0.15;
  
  mars = createSprite(1100,150);
  mars.addImage(marsI);
  mars.scale=0.2
  
  saturn = createSprite(1450,300);
  saturn.addImage(saturnI);
  saturn.scale=0.5;
  
  jupitar = createSprite(1350,650)
  jupitar.addImage(jupitarI);
  jupitar.scale=0.35;
  
  uranus = createSprite(650,700);
  uranus.addImage(uranusI);
  uranus.scale=0.4;
  
  neptune = createSprite(950,800);
  neptune.addImage(neptuneI);
  neptune.scale=0.5;
  
 
}

function draw() {
  background(bg);
  
  if(mousePressedOver(neptune))
  {
    ns.play();
    vs.stop();
    js.stop();
    ss.stop();
    es.stop();
    ms.stop();
    us.stop();
    sunS.stop();

  }

  if(mousePressedOver(venus))
  {
    vs.play();
    ns.stop();
    ms.stop();
    js.stop();
    ss.stop();
    es.stop();
    us.stop();
    sunS.stop();
  }

  if(mousePressedOver(jupitar))
  {
    js.play();
    ss.stop();
    es.stop();
    us.stop();
    vs.stop();
    ns.stop();
    ms.stop();
    sunS.stop();
  }
  if(mousePressedOver(saturn))
  {
    ss.play();
    es.stop();
    us.stop();
    vs.stop();
    ns.stop();
    ms.stop();
    js.stop();
    sunS.stop();
  }
  if(mousePressedOver(earth))
  {
    es.play();
    us.stop();
    vs.stop();
    ns.stop();
    ms.stop();
    js.stop();
    ss.stop();
    sunS.stop();
  }
  if(mousePressedOver(uranus))
  {
    us.play();
    vs.stop();
    ns.stop();
    ms.stop();
    js.stop();
    ss.stop();
    es.stop();
    sunS.stop();
  }
  if(mousePressedOver(mercury))
  {
    ms.play();
    js.stop();
    ss.stop();
    es.stop();
    us.stop();
    vs.stop();
    ns.stop();
    sunS.stop();
  }

  if(mousePressedOver(sun)){
    sunS.play();
    js.stop();
    ss.stop();
    es.stop();
    us.stop();
    vs.stop();
    ns.stop();
    ms.stop();
  }

  drawSprites();
}
