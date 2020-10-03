//Escena JUEGO
var sc_play1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_play1(){
            Phaser.Scene.call(this, { key: 'sc_play1'});
        },



    preload (){
        this.load.image('i_fondo', 'assets/fondo_menu.jpg');
        this.load.image('i_red', 'assets/red.png');
        this.load.image('i_shooter', 'assets/satelite_laser.png');
        this.load.image('i_opciones', 'assets/opciones.png');
    },

    
    create (){

        this.input.setDefaultCursor('url(assets/input/mira.cur), pointer');
        var background = this.add.sprite(0, 0, 'i_fondo')
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
        

        //SATELITE
        //var shooter = this.matter.add.sprite(200,100,'i_shooter');
        
        shooter = this.add.sprite(200,100,'i_shooter');
        shooter.setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });
        emitter.startFollow(shooter);
        center = new Phaser.Geom.Point(game.config.width / 2,game.config.height / 2);
        //input=this.input;
        
    },

    update(){
        Phaser.Actions.RotateAroundDistance(shooter,center, 0.02, 200);
        //var shooter_pointer_angle = 


    //angle between mouse and ball
    //var angle=Phaser.Math.Angle.Between(shooter.x,shooter.y,input.x,input.y);
    //rotation cannon
    //shooter.setRotation(angle);

    }
});