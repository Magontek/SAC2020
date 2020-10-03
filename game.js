// configuracion del juego
var config = {
        type: Phaser.AUTO,
        width: 940,
        height: 528,
        parent: 'SAC2020',
        scene: [sc_menu,sc_play], //ESTO ES NECESARIO, SE AGREGAN TODAS LAS ESCENAS ACÁ
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
};

    var game = new Phaser.Game(config);