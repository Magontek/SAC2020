var sc_game_over = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_game_over(){
            Phaser.Scene.call(this, { key: 'sc_game_over'});
        },

    preload (){

    },

    create (){
        texto1 = this.add.text(800, 150, '   GAME OVER\n Final Score: ' + score, {
            fontSize: '40px',
            fill: '#c96520'
        });

        //FINALES
        //if(ending == 1){
        texto2 = this.add.text(30,920, 'Game ended beacuse...', {
            fontSize: '30px',
            fill: '#fdb083'
        });//};

        //BOTON RETRODECER
        back = this.add.text(game.config.width -300, game.config.height - 50, 'GO TO MENU', {
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