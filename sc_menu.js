var sc_menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function sc_menu(){
            Phaser.Scene.call(this, { key: 'sc_menu'});
        },
    preload (){
        this.load.image('boton', 'assets/button.png')
    },
    create(){
        this.input.mouse.disableContextMenu();
        texto = this.add.text(game.config.width / 2, 150, 'Menu Principal', {
            fontSize: '40px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        //OPCION JUGAR
        var opcion1 = this.add.sprite(game.config.width / 2, game.config.height / 2, 'boton').setInteractive();
        opcion1.on('pointerover', function() {
            opcion1.setTint(0x7878ff);
        });
        opcion1.on('pointerout', function() {
            opcion1.clearTint();
        });
        opcion1.on('pointerdown', ()=>{
            this.scene.start('sc_play1')
        });

        //OPCION SONIDO
        var opcion2 = this.add.sprite(game.config.width / 2, game.config.height / 2 + 60, 'boton').setInteractive();
        opcion2.on('pointerover', function() {
            opcion2.setTint(0x7878ff);
        });
        opcion2.on('pointerout', function() {
            opcion2.clearTint();
        });
        opcion2.on('pointerdown', ()=>{
            this.scene.start('sc_play2')
        });

        //OPCION EXPLICACION
        var opcion3 = this.add.sprite(game.config.width / 2, game.config.height / 2 + 120, 'boton').setInteractive();
        opcion3.on('pointerover', function() {
            opcion3.setTint(0x7878ff);
        });
        opcion3.on('pointerout', function() {
            opcion3.clearTint();
        });
        opcion3.on('pointerdown', ()=>{
            this.scene.start('sc_play2')
        });

        //OPCION CREDITOS
        var opcion4 = this.add.sprite(game.config.width / 2, game.config.height / 2 + 180, 'boton').setInteractive();
        opcion4.on('pointerover', function() {
            opcion4.setTint(0x7878ff);
        });
        opcion4.on('pointerout', function() {
            opcion4.clearTint();
        });
        opcion4.on('pointerdown', ()=>{
            this.scene.start('sc_play2')
        });
    }
});