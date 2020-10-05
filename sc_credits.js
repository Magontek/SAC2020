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
        texto = this.add.text(1200,200, 'This game was developed for \nthe Space Apps Challenge Orbital \nScrap Metal – The Video Game V2.0. \nduring the 2020 pandemic.\nOrbital Scrap De-Orbiter is coded on javascript, \nusing Phaser 3. It was constructed \nsharing files over github and \ninformation over discord.\nThe biggest problem was simulating \ngravity and forces without making \nthe game too resources expensive.\n\nPutting links here is silly so if \nyou want to know more about space \ntrash google "nasa space trash" \nit\'s a very intresting toppic.\n', {
            fontSize: '30px',
            fill: '#f2fd83'
        });

        //TEXTO CREDITOS
        texto = this.add.text(30,920, 'This game was designed by Timothy and Matias\nfor the "Orbital Scrap Metal - The Video Game V2.0" challenge\nfrom the Space Apps Challenge 2020', {
            fontSize: '30px',
            fill: '#fdb083'
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

    }
});