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
        this.load.image('i_alien', 'assets/space-baddie.png');

        this.load.image('i_target', 'assets/input/red.png');
    },

    
    create (){

        //MOUSE
        this.input.setDefaultCursor('url(assets/input/mira.cur), pointer');
        cursor=this.input.keyboard.createCursorKeys();
        /*this.input.on('pointerdown', function (pointer){
            if (pointer.leftButtonDown()){
                console.log(input)
            };
            if (pointer.rightButtonDown()){
                shooter.thrust(0.4);
            }

        });*/

        var background = this.add.sprite(0, 0, 'i_fondo');
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


        var cosos = this.matter.add.imageStack('i_alien', null, 0, 1, 1, 2, 0, 400, {
            mass: 1,
            ignorePointer: true,
            inertia: Infinity,
            frictionAir: 0,
            friction: 0
        });


        var particles = this.add.particles('i_red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        

        //SATELITE
        shooter = this.shooter;
        shooter = this.add.sprite(200,100,'i_shooter');
        shooter.setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });
        emitter.startFollow(shooter);
        //OTROS
        center = new Phaser.Geom.Point(game.config.width / 2,game.config.height / 2);
        input=this.input;
        


    },

    update(){
        //Apuntador
        var angle=Phaser.Math.Angle.Between(shooter.x,shooter.y,input.x,input.y)-Math.PI/1.35;
        shooter.setRotation(angle);
    }
});