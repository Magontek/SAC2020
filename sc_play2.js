//Escena JUEGO
var sc_play2 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_play2(){
            Phaser.Scene.call(this, { key: 'sc_play2'});
        },


    preload ()
    {
        this.load.image('i_sun', 'assets/tierra.png');
        this.load.image('i_alien', 'assets/space-baddie.png');
        this.load.image('i_fondo_s', 'assets/espacio-exterior.png')
    },

    
    create (){

        
        //  You can enable the Attractors plugin either via the game config (see above), or explicitly in code:
        // this.matter.enableAttractorPlugin();
        var background = this.add.sprite(0, 0, 'i_fondo_s');
        background.setOrigin(0, 0);

        this.matter.world.setBounds();
        this.matter.set30Hz();


        cosos.matter.add.sprite(500-i*20, 10+i*5,'i_alien', null, {
            mass: 1,
            inertia: Infinity,
            ignoreGravity: false,
            frictionAir: 0,
            friction: 0,
            plugin: {
                attractors: [
                    Phaser.Physics.Matter.Matter.Plugin.resolve("matter-attractors").Attractors.gravity
                ]
            }
        });

        cosos.setVelocity(0.6, 0);

        var sun = this.matter.add.sprite(500, 250, 'i_sun', null, {
            mass: 200,
            isStatic: true,
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
    },
    update(){
        
    }
});


