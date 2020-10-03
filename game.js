var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                scale: 0
            },
            plugins: {
                attractors: true
            }
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
    this.load.image('sun', 'assets/sun.png');
    this.load.image('alien', 'assets/space-baddie.png');
}

function create ()
{
    //  You can enable the Attractors plugin either via the game config (see above), or explicitly in code:
    // this.matter.enableAttractorPlugin();

    this.matter.world.setBounds();
    this.matter.world.getDelta = function (time, delta) { return delta; };


    var cosos = this.matter.add.imageStack('alien', null, 0, 1, 1, 2, 0, 0, {
        mass: 1,
        ignorePointer: true,
        inertia: Infinity,
        frictionAir: 0,
        friction: 0
    });

    var sun = this.matter.add.image(400, 200, 'sun', null, {
    	mass: 200,
        shape: {
            type: 'circle',
            radius: 64
        },
        plugin: {
        	attractors: [
            	Phaser.Physics.Matter.Matter.Plugin.resolve("matter-attractors").Attractors.gravity
            ]
        }
    });

    this.matter.add.mouseSpring();
}