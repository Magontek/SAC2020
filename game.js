// configuracion del juego
var config = {
        type: Phaser.AUTO,
        width: 940,
        height: 528,
        scene: [sc_menu,sc_play1,sc_play2], //ESTO ES NECESARIO, SE AGREGAN TODAS LAS ESCENAS ACÁ
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

var game = new Phaser.Game(config);