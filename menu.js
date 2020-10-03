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
        texto = this.add.text(game.config.width / 2, game.config.height / 2 - 150, 'Menu Principal', {
            fontSize: '40px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        var opcion1 = this.add.sprite(game.config.width / 2, game.config.height / 2, 'boton').setInteractive();
        opcion1.on('pointerover', function() {
            opcion1.setTint(0x7878ff);
        });
        opcion1.on('pointerout', function() {
            opcion1.clearTint();
        });
        opcion1.on('pointerdown', ()=>{
            this.scene.start('sc_play')
        });


        var opcion2 = this.add.sprite(game.config.width / 2, game.config.height / 2 + 60, 'boton').setInteractive();
        opcion2.on('pointerover', function() {
            opcion2.setTint(0x7878ff);
        });
        opcion2.on('pointerout', function() {
            opcion2.clearTint();
        });
        opcion2.on('pointerdown', ()=>{
            this.scene.start('orbiter_play')
        });
    }
});