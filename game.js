//Ecena MENU 
var sc_menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_menu(){
            Phaser.Scene.call(this, { key: 'sc_menu'});
        },
    preload (){
        this.load.image('boton', 'assets/button.png')
    },
    create(){
        texto = this.add.text(game.config.width / 2, game.config.height / 2 - 150, 'Menu Principal', {
            fontSize: '40px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        var opcion1 = this.add.sprite(game.config.width / 2, game.config.height / 2, 'boton').setInteractive();
        opcion1.on('pointerover', function() {
            opcion1.setTint(0x7878ff);
        });
        opcion1.on('pointerout', function() {
            opcion1.clearTint();
        });
        opcion1.on('pointerdown', ()=>{
            this.scene.start('sc_play')
        });


        var opcion2 = this.add.sprite(game.config.width / 2, game.config.height / 2 + 60, 'boton');



/*var logo = this.physics.add.image(400, 100, 'logo').setInteractive({  });


        this.input.on('pointerdown',(pointr)=>{
            this.scene.start('sc_play');
        });*/
    }
});



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

    create(){

        this.input.setDefaultCursor('url(assets/input/mira.cur), pointer');
        var background = this.add.sprite(0, 0, 'fondo')
        background.setOrigin(0, 0);


        var pausa = this.add.sprite(game.config.width - 45, 5, 'opciones');
        pausa.setOrigin(0, 0);
        pausa.setScale(0.8);

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

        var shooter = this.physics.add.image(400, 100, 'shooter').setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });


        var circle = new Phaser.Geom.Circle(400, 300, 220);//Prueba de agregar satelite giratorio
        Phaser.Actions.PlaceOnCircle(shooter, circle);
        tween = this.tweens.addCounter({
            from: 220,
            to: 100,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
        });
    }
});

// UPDATE


function update (){
    Phaser.Actions.RotateAroundDistance(shooter, { x: 400, y: 300 }, 0.02, tween.getValue());       
};


var config = {
        type: Phaser.AUTO,
        width: 940,
        height: 528,
        parent: 'SAC2020',
        scene: [sc_menu,sc_play],
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
};

    var game = new Phaser.Game(config);
/*


// PRELOAD




// CREATE


    function create ()
    {

        this.input.setDefaultCursor('url(assets/input/mira.cur), pointer');
        var background = this.add.sprite(0, 0, 'fondo')
        background.setOrigin(0, 0);

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

        var shooter = this.physics.add.image(400, 100, 'shooter').setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });


        var circle = new Phaser.Geom.Circle(400, 300, 220);//Prueba de agregar satelite giratorio
        Phaser.Actions.PlaceOnCircle(shooter, circle);
        tween = this.tweens.addCounter({
                from: 220,
                to: 100,
                duration: 3000,
                delay: 2000,
                ease: 'Sine.easeInOut',
                repeat: -1});
    }


// UPDATE


function update ()
{
        Phaser.Actions.RotateAroundDistance(shooter, { x: 400, y: 300 }, 0.02, tween.getValue());
}*/