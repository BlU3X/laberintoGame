
var juego = new Phaser.Game(250,250, Phaser.AUTO, "juego");

// creamos los estados del juego
juego.state.add("menu", menu);
juego.state.add("game",game);
juego.state.add("winner",winner);

// lanzamos el primer estado que iniciará el juego
juego.state.start("menu");
