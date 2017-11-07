var jugador,a,w,s,d, cursores, muros;

var game = {

  preload:function(){
    //mapa
    juego.load.tilemap("mapa","assets/laberinto.json",null,Phaser.Tilemap.TILED_JSON);
    juego.load.image("basictiles", "assets/basictiles.png");

    //personaje
    juego.load.spritesheet("doraemon", "assets/doraemon.gif", 26,31);
  },

  create:function(){
    //inicio de las fisicas
    juego.physics.startSystem(Phaser.Physics.ARCADE);

    // mapa
    var map = juego.add.tilemap("mapa");
    map.addTilesetImage("basictiles","basictiles");

    // creamos las capas del mapa y las reescalamos
    var bajoSuelo = map.createLayer("bajosuelo");
    bajoSuelo.resizeWorld();
    var suelo = map.createLayer("suelo");
    suelo.resizeWorld();
    muros = map.createLayer("muros");
    muros.resizeWorld();

    // añadimos las fisicas a los muros
    juego.physics.arcade.enable(muros);

    // añadimos las colisiones al mapa
    map.setCollisionBetween(1,10000,true,muros);
    map.setCollisionByExclusion([0], true, muros);

    //controles
     a = juego.input.keyboard.addKey(Phaser.Keyboard.A);
     w = juego.input.keyboard.addKey(Phaser.Keyboard.W);
     s = juego.input.keyboard.addKey(Phaser.Keyboard.S);
     d = juego.input.keyboard.addKey(Phaser.Keyboard.D);

    //personaje
    jugador = juego.add.sprite(40,450,"doraemon");

    // reducimos el tamaño del sprite
    jugador.scale.setTo(0.3);

    // seleccionamos las animaciones para el sprite
    jugador.animations.add("down",[0,1,2],10);
    jugador.animations.add("up",[9,10,11],10);
    jugador.animations.add("right",[6,7,8],10);
    jugador.animations.add("left",[3,4,5],10);

    // establecemos el centro de los sprites
    jugador.anchor.setTo(0.5);

    // le ponemos las fisicas al jugador
    juego.physics.arcade.enable(jugador);

    // que el personaje no pueda salir de la pantalla de juego
    jugador.body.collideWorldBounds = true;
    // camara siga al personaje
    juego.camera.follow(jugador);
    // juego.camera.bounds = null;

  },

  update:function(){
    //se habilita la colision entre el sprite del jugador y los muros(arboles)
    juego.physics.arcade.collide(jugador,muros);

    //se establece la velocidad del jugador a 0
    jugador.body.velocity.y = 0;
    jugador.body.velocity.x = 0;

    // establecemos las acciones a los botones para poder mover al personaje y que tenga animaciones
    if(w.isDown ){
      jugador.body.velocity.y =-90;
      jugador.animations.play("up");
    }else if(s.isDown ){
      jugador.body.velocity.y =90;
      jugador.animations.play("down");
    }else if(d.isDown ){
      jugador.body.velocity.x =90;
      jugador.animations.play("right");
    }else  if(a.isDown){
      jugador.body.velocity.x =-90;
      jugador.animations.play("left");
    }else{
      jugador.animations.stop(null,true);
    }

    //si el jugador llega a esta zona, se lanzará el estado de ganador
    if(jugador.x > 653 && jugador.x < 672 && jugador.y > 297 && jugador.y < 299){
      juego.state.start("winner");
    }

  }

  //usado para ver las posiciones del jugados
  // ,
  // render: function(){
  //   juego.debug.spriteInfo(jugador,32,32);
  // }

};
