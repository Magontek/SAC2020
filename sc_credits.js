//Escena CREDITOS
var sc_credits = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_credits(){
            Phaser.Scene.call(this, { key: 'sc_credits'});
        },

    preload (){
        this.load.image('menufondo', 'assets/menu_background.jpg')
    },

    
    create (){

        //FONDO
        var background = this.add.sprite(0, 0, 'menufondo');
        background.setOrigin(0, 0);
        background.setScale(0.979166667,0.843450479);

        //TEXTO PRINCIPAL
        texto = this.add.text(1500,400, 'BLA BLA ZARASA ZARAZA\nMAS ZARAZA\nMUCHA FRUTA Y\nCUALQUIER COSA\nARRELOCO', {
            fontSize: '30px',
            fill: '#f2fd83'
        }).setOrigin(0.5);

        //TEXTO CREDITOS
        texto = this.add.text(510,980, 'This game was designed by Timothy and Matias\nfor the "Orbital Scrap Metal - The Video Game V2.0" challenge\nfrom the Space Apps Challenge 2020', {
            fontSize: '30px',
            fill: '#fdb083'
        }).setOrigin(0.5);

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

    }
});