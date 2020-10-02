//var sc_title = new Phaser.Scene('title');
var config = {
        type: Phaser.AUTO,
        width: 940,
        height: 528,
//        scene: sc_title
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
        this.load.image('shooter', 'assets/satelite_laser.png');
    }

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
function update ()
{
        Phaser.Actions.RotateAroundDistance(shooter, { x: 400, y: 300 }, 0.02, tween.getValue());
}
