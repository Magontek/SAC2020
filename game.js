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
                scale: 1
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
    Text = this.add.text(16, 16, 'distancia', { fontSize: '32px', fill: '#fff' });
    
}

function create ()
{
    //  You can enable the Attractors plugin either via the game config (see above), or explicitly in code:
    // this.matter.enableAttractorPlugin();
   

    this.matter.world.setBounds();

    var sat = this.matter.add.sprite(10,10,'alien', null, {
        mass: 1,
        ignorePointer: true
    });
    
    var sun = this.matter.add.sprite(400, 200, 'sun', null, {
        shape: {
            type: 'circle',
            radius: 64
        },
        plugin: {
            //attractors: [Phaser.Physics.Matter.Matter.Plugin.resolve(“matter-attractors”).Attractors.gravity]
            attractors: [
                function (bodyA, bodyB) {
                    return {
                        x: (bodyA.position.x - bodyB.position.x) * 0.000001,
                        y: (bodyA.position.y - bodyB.position.y) * 0.000001
                    };
                }
            ]
        }
    });

    this.matter.add.mouseSpring();
    
    Text.setText('Distancia: ' + sun.x);
}