//Escena MENU
var sc_menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_menu(){
            Phaser.Scene.call(this, { key: 'sc_menu'});
        },
    preload (){
        this.load.image('menufondo', 'assets/menu_background.jpg')
        this.load.image('play', 'assets/boton_play.png')
        this.load.image('sound', 'assets/boton_sonido.png')
        this.load.image('soundbars', 'assets/barras_sonido.png')
        this.load.image('information', 'assets/solar_panel.png')
    },
    create(){
        this.input.mouse.disableContextMenu();

        //BACKGROUND
        var background = this.add.sprite(0, 0, 'menufondo');
        background.setOrigin(0, 0);
        background.setScale(0.979166667,0.843450479);

        texto = this.add.text(game.config.width / 2, 150, 'Scrap Pusher RL', {
            fontSize: '60px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        //OPCION JUGAR
        var opcion1 = this.add.sprite(game.config.width / 2, game.config.height / 2 - 150, 'play').setInteractive();
        opcion1.on('pointerover', function() {
            opcion1.setTint(0xe7b33c);
        });
        opcion1.on('pointerout', function() {
            opcion1.clearTint();
        });
        opcion1.on('pointerdown', ()=>{
            this.scene.start('sc_play1')
        });

        //OPCION SONIDO
        var opcion2 = this.add.sprite(game.config.width - 400, game.config.height - 160, 'sound').setInteractive();
        opcion2.on('pointerover', function() {
            opcion2.setTint(0x99df93);
        });
        opcion2.on('pointerout', function() {
            opcion2.clearTint();
        });
        var soundbars = this.add.sprite(game.config.width - 400, game.config.height - 160, 'soundbars');
        opcion2.on('pointerdown', ()=>{
        if (soundbars.visible == false){
            soundbars.visible = true
        }
        else{
            soundbars.visible = false
        }
        });

        //OPCION EXPLICACION Y CREDITOS
        var opcion3 = this.add.sprite(0, 500, 'information').setOrigin(0,0).setInteractive();
        opcion3.on('pointerover', function() {
            opcion3.setTint(0x828282);
        });
        opcion3.on('pointerout', function() {
            opcion3.clearTint();
        });
        opcion3.on('pointerdown', ()=>{
            this.scene.start('sc_play2')
        });
    }
});