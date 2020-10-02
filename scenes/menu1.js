class title extends Phaser.Scene {

        constructor () {
                super({key: 'title'});
        }

        preload () {
        this.load.image('fondo', 'assets/fondo_menu.jpg');
        }

        create () {
                let background = this.add.sprite(0, 0, 'fondo')
                background.setOrigin(0, 0);
        }
}

export default title;