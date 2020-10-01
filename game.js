var config = {
        type: Phaser.AUTO,
        width: 940,
        height: 528,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image('fondo', 'assets/fondo_menu.jpg');
        this.load.image('logo', 'assets/logo.png');
        this.load.image('red', 'assets/red.png');
    }

    function create ()
    {
        this.add.image(470, 264, 'fondo');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }

