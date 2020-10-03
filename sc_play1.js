//Escena JUEGO
var sc_play1 = new Phaser.Class({
    

    Extends: Phaser.Scene,
    initialize:
        function sc_play1(){
            Phaser.Scene.call(this, { key: 'sc_play1'});
            var variable = [];
        },

    
    preload (){
        this.load.image('i_fondo', 'assets/fondo_menu.jpg');
        this.load.image('i_red', 'assets/red.png');
        this.load.image('i_shooter', 'assets/satelite_laser.png');
        this.load.image('i_opciones', 'assets/opciones.png');
    },

    
    create (){

        this.input.setDefaultCursor('url(assets/input/mira.cur), pointer');
        var background = this.add.sprite(0, 0, 'fondo')
        background.setOrigin(0, 0);


        //BOTON DE PAUSA ENGRANAJE
        var pausa = this.add.sprite(game.config.width - 45, 5, 'i_opciones').setInteractive();
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




        var particles = this.add.particles('i_red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'i_logo').setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        

        //satelite
        var shooter = this.physics.add.image(400, 100, 'i_shooter');
        shooter.setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });
        emitter.startFollow(shooter);


    },
    update(){
        Phaser.Actions.RotateAroundDistance(shooter(),{ x: game.config.width / 2, y: game.config.height / 2 }, 0.02, 200);
    }
});


