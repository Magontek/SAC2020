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

        texto = this.add.text(1000,100, 'The goal of the games is to deorbit all the \ntrash without hit the ISS, the laser satellite \nor other trash.\nThe laser can push the trash by ablatin material \nand photonic push.\nWe want the atmosphere to destroy the trash, not \nmake more space trash.\nThe laser ir programed to not hit the ISS or the \nearth. We don\'t want to accidentaly hit someone.\n\nScoring:\nDeorbiting trash gives 10 points in the score.\nIf thash hit trash you lose 5 points.\nIf something hits the laser or the ISS you lose.\n\nHint:\nThis game uses real like orbital physics. For \nrising orbit you need to propulse forward and for \nlower the orbit backward.\nThis aply to everthing to the trash too. So, for \nthe trash to fall to earth you need to slow down \nit\'s orbit.\n', {
            fontSize: '30px',
            fill: '#f2fd83'
        });
        //BOTON RETRODECER
        back = this.add.text(game.config.width -225, game.config.height - 50, 'GO BACK', {
            fontSize: '40px',
            fill: '#ffffff'
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

    update(){


    },
});