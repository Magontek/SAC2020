//Escena JUEGO
var sc_play2 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_play2(){
            Phaser.Scene.call(this, { key: 'sc_play2'});
        },


    preload ()
    {
        this.load.image('sun', 'assets/sun.png');
        this.load.image('alien', 'assets/space-baddie.png');
    },

    
    create (){

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

        this.matter.add.mouseSpring();

        var sun = this.matter.add.image(400, 200, 'sun', null, {
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


