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
        //var background = this.add.sprite(0, 0, 'i_fondo_s');
        //background.setOrigin(0, 0);

        this.matter.world.setBounds();
        this.matter.set30Hz();

        var tierra = this.matter.add.sprite(game.config.width / 2,game.config.height / 2, 'i_sun', null, {
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

        
        var center= new Phaser.Math.Vector2(game.config.width / 2,game.config.height / 2);
        console.log(center);
        for (var i = 0; i < 4; i++)
        {
            // generacion aleatoria de angulos
            // 1º creo vector en la esquina
            // 2º lo apunto a un x entre 90 y 250
            // 3º le doy un angulo aleatorio
            var vec_n = new Phaser.Math.Vector2();
            vec_n.x=Phaser.Math.RND.between(90, 250);
            console.log(vec_n);
            vec_n.rotate(Phaser.Math.RND.rotation());
            console.log(vec_n);


            cosos = this.matter.add.sprite(vec_n.x+center.x,vec_n.y+center.y,'i_alien', null, {
                mass: 0.01,
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
            // asignacion de velocidad
            // constante de gravitacion G*M mas o menos 54
            // la velocidad es perpendicular, por lo que giro pi/2 y calculo seno y coseno
            // velocidad angular=raiz(GM/r) 

            r_vec=vec_n.length()
            console.log("r_vec = " + r_vec);
            dir_vec=vec_n.rotate(3.1416/2).normalize();
            console.log(dir_vec);
            mag_vec=Math.sqrt(54/r_vec)
            cosos.setVelocity(dir_vec.x*mag_vec,dir_vec.y*mag_vec);
        }
    },
    update(){
        
    }
});


