// configuracion del juego
var config = {
        type: Phaser.AUTO,
        width: 1880,
        height: 1056,
        scene: [sc_menu, sc_play1, sc_play3],
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
var right;
var left;
var vec_n;
var fuego;
var prop_on=false;

var game = new Phaser.Game(config);