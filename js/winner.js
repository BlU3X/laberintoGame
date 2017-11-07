var winner = {

  preload:function(){
    // establecemos el color de fondo
    juego.stage.backgroundColor="#6eab2c";
    juego.load.image("boton", "assets/quitButton.png");
  },

  create:function(){
    // añadimos el boton, lo reescalamos y seleccionamos lo que será su centro
    var boton = this.add.button(juego.width/2, juego.height/2, "boton", this.iniciarJuego,this);
    boton.anchor.setTo(0.5);
    boton.scale.setTo(0.6);

    // creamos y damos formato al texto
    var txtIniciar = juego.add.text(juego.width/2, juego.height/2 -85, "Winner");
    txtIniciar.font = "monsterhunter";
    txtIniciar.fontSize = 60;
    txtIniciar.anchor.setTo(0.5);
    txtIniciar.fill ="rgb(67, 184, 166)";
    txtIniciar.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
  },

  iniciarJuego:function(){
    juego.state.start("menu");
  }


};
