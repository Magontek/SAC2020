// configuracion del juego
var config = {
        type: Phaser.AUTO,
        width: 1880,
        height: 1056,
        scene: [sc_menu, sc_play1, sc_play2, sc_game_over, sc_credits, sc_instrucciones],
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
};

var shooter;
var cosos;
var coso;
var right;
var left;
var vec_n;
var fuego;
var prop_on=false;
este_coso = null;
ending=0;
// 0=nada
// 1=satelite reentro a la tierra
// 2=satelite fue destruido
// 3=estacion espacial se daño
// 4=?
score=0;
n_basura=0;

function basureadora (posA,posB){
            for (var i = 0; i < 10; i++)
            {
            esc_rnd=Phaser.Math.RND.frac()*0.3+0.1;
            cosos = this.matter.add.sprite(posA,posB,'trash', i, {
                label: 'coso',
                mass: 0.001,
                inertia: Infinity,
                ignoreGravity: false,
                frictionAir: 0,
                friction: 0,
                shape: {
                    type: 'circle',
                    radius: 32*esc_rnd,
                },
                plugin: {
                    attractors: [
                        Phaser.Physics.Matter.Matter.Plugin.resolve("matter-attractors").Attractors.gravity
                    ]
                },
            });
            cosos.scale=esc_rnd;
            cosos.setVelocity(Phaser.Math.RND.frac(),Phaser.Math.RND.frac());
            }
        };

var game = new Phaser.Game(config);