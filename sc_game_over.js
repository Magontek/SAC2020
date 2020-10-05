var sc_game_over = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_game_over(){
            Phaser.Scene.call(this, { key: 'sc_game_over'});
        },

    preload (){

    },

    create (){


        //FINALES
        //Final 1 - toca tierra
        if (ending === 1){
        texto2 = this.add.text(650,520, 'The satellite re-entered the earth, \nburning through the atmosphere \nand leaving no remains', {
            fontSize: '40px',
            fill: '#848484'
        })};
        //Final 2 - toca basura
        if (ending === 2){
        texto2 = this.add.text(610,520, 'The satellite got hit and was destroyed, \nincreasing the amount of scrap in orbit', {
            fontSize: '40px',
            fill: '#848484'
        })};
        //Final 3 - estacion destruida
        if (ending === 3){
        texto2 = this.add.text(650,520, 'The International Space Station was destroyed!', {
            fontSize: '40px',
            fill: '#848484'
        })};
        //Final 4 - ????
        if (ending === 4 || ending === 0){
        texto2 = this.add.text(650,520, 'Error Unkown End', {
            fontSize: '40px',
            fill: '#848484'
        })};


        //PUNTAJE FINAL
        texto1 = this.add.text(800, 150, '  GAME OVER\n Final Score: ' + score, {
            fontSize: '50px',
            fill: '#c96520'
        });

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