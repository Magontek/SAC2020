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
        var background = this.add.sprite(0, 0, 'menufondo');
        background.setOrigin(0, 0);
        background.setScale(0.979166667,0.843450479);
    }
});