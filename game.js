//Ecena MENU 


//Escena JUEGO
var sc_play = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_play(){
            Phaser.Scene.call(this, { key: 'sc_play'});
        },



    preload (){
        this.load.image('fondo', 'assets/fondo_menu.jpg');
        this.load.image('logo', 'assets/logo.png');
        this.load.image('red', 'assets/red.png');
        this.load.image('shooter', 'assets/satelite_laser.png');
        this.load.image('opciones', 'assets/opciones.png');
    },

    
    create (){

        this.input.setDefaultCursor('url(assets/input/mira.cur), pointer');
        var background = this.add.sprite(0, 0, 'fondo')
        background.setOrigin(0, 0);


        //BOTON DE PAUSA ENGRANAJE
        var pausa = this.add.sprite(game.config.width - 45, 5, 'opciones').setInteractive();
        pausa.setOrigin(0, 0);
        pausa.setScale(0.8);
        pausa.on('pointerover', function() {
            pausa.setTint(0x7878ff);
        });
        pausa.on('pointerout', function() {
            pausa.clearTint();
        });
        pausa.on('pointerdown', ()=>{
            this.scene.start('sc_menu')
        });
        //FIN BOTON PAUSA




        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo').setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);



        //satelite
        var shooter = this.physics.add.image(400, 100, 'shooter');
        shooter.setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });   


    },
    update(){
        //Phaser.Actions.RotateAroundDistance(shooter(),{ x: game.config.width / 2, y: game.config.height / 2 }, 0.02, 200);
    }
});




var config = {
        type: Phaser.AUTO,
        width: 940,
        height: 528,
        parent: 'SAC2020',
        scene: [sc_menu,sc_play], //ESTO ES NECESARIO, SE AGREGAN TODAS LAS ESCENAS ACÁ
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
};

    var game = new Phaser.Game(config);