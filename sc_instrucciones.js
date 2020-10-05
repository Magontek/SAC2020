var sc_instrucciones = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_instrucciones(){
            Phaser.Scene.call(this, { key: 'sc_instrucciones'});
        },

    preload (){
    	this.load.image('i_instruct', 'assets/explicacion.jpg');
    },

    create (){
    	var background = this.add.sprite(0, 0, 'i_instruct');
        background.setOrigin(0, 0);

        texto = this.add.text(1000,100, '', {
            fontSize: '30px',
            fill: '#f2fd83'
        });
    },

    update(){


    },
});