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
        this.load.image('how', 'assets/how.png')
    },
    create(){
        this.input.mouse.disableContextMenu();

        //BACKGROUND
        var background = this.add.sprite(0, 0, 'menufondo');
        background.setOrigin(0, 0);
        background.setScale(0.979166667,0.843450479);

        texto = this.add.text(game.config.width / 2 - 450, 120, 'Orbital Scrap De-Orbiter', {//ORBITAL SCRAP DE-ORBITER
            fontSize: '60px',
            fill: '#d19f47',
            fontStyle: 'bold'
        });

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

        //OPCION INSTRUCCIONES
        var opcion4 = this.add.sprite(game.config.width / 2 + 70, 720, 'how').setInteractive();
        opcion4.setScale(1.5)
        opcion4.on('pointerover', function() {
            opcion4.setTint(0x348cd0);
        });
        opcion4.on('pointerout', function() {
            opcion4.clearTint();
        });
        opcion4.on('pointerdown', ()=>{
            this.scene.start('sc_instrucciones')
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
        if (sound == 0){
            soundbars.visible = false;
        };
        opcion2.on('pointerdown', ()=>{
        if (soundbars.visible == false){
            soundbars.visible = true;
            sound = 1
        }
        else{
            soundbars.visible = false;
            sound = 0
        }
        });

        //OPCION EXPLICACION Y CREDITOS
        var opcion3 = this.add.sprite(0, 500, 'information').setOrigin(0,0).setInteractive();
        opcion3.on('pointerover', function() {
            opcion3.setTint(0x9b0cff);
        });
        opcion3.on('pointerout', function() {
            opcion3.clearTint();
        });
        opcion3.on('pointerdown', ()=>{
            this.scene.start('sc_credits')
        });
    }
});