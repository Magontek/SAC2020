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

        texto = this.add.text(1000,100, 'The goal of the games is to deorbit all the \ntrash without crashing the ISS, \nthe laser satellite or other trash.\nThe laser can the trash by ablating material \nand photonic push.\nYou need to destroy the trash, not \nmake more space trash.\nThe laser ir programed to not hit the ISS\n or the earth. We don\'t want to \naccidentally hit someone.\n\nLEFT CLICK to shoot the laser\nRIGHT CLICK to fire the thruster\n\nScoring:\nDeorbiting trash gives 10 points.\nIf trash hit trash you lose 5 points.\nIf something hits the laser or the ISS you lose.\n\nHint:\nThis game uses realistic orbital physics. \nFor rising orbit you need to propulse forward \nand for lower the orbit fire the \nthruster backward.\nThis applies to everthing. So, for \nthe trash to fall to earth you need to\n slow down it\'s orbit.\n', {
            fontSize: '30px',
            fill: '#f2fd83'
        }).setOrigin(0,0);
        //BOTON RETRODECER
        back = this.add.text(game.config.width -225, game.config.height - 80, 'GO BACK', {
            fontSize: '40px',
            fill: '#a1a1a1',
            fontStyle: 'bold'
        }).setOrigin(0.0).setInteractive();

        back.on('pointerover', function() {
            back.setTint(0x554bbb);
        });
        back.on('pointerout', function() {
            back.clearTint();
        });
        back.on('pointerdown', ()=>{
            this.scene.start('sc_menu')
        });
    },
});