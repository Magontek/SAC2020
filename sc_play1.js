//Escena JUEGO
var sc_play1 = new Phaser.Class({
    

    Extends: Phaser.Scene,
    initialize:
        function sc_play1(){
            Phaser.Scene.call(this, { key: 'sc_play1'});
            var variable = [];
        },

    preload (){
        this.load.image('i_sun', 'assets/tierra.png');
        this.load.image('i_fondo', 'assets/espacio-exterior.png');
        this.load.image('i_red', 'assets/red.png');
        this.load.image('i_exp', 'assets/explosion.png');
        this.load.image('i_shooter', 'assets/satelite_laser_2.png');
        this.load.image('i_iss', 'assets/iss.png');
        this.load.image('i_opciones', 'assets/opciones.png');
        this.load.image('i_target', 'assets/input/red.png');
        this.load.spritesheet('trash', 'assets/basura.png',
            { frameWidth: 64, frameHeight: 64 }
        );
        this.load.audio('s_laser','assets/blaster.mp3');
        this.load.audio('s_prop','assets/explode1.wav');
    },

    
    create (){
        score=0
        this.sound.add('s_laser');
        this.sound.add('s_prop');
        //delta consistente
        this.matter.set30Hz();

        //BACKGROUND
        var background = this.add.sprite(0, 0, 'i_fondo');
        background.setOrigin(0, 0);
        background.setScale(2);

        // TIERRA
        tierra = this.matter.add.sprite(game.config.width / 2,game.config.height / 2, 'i_sun', null, {
            label: 'tierra',
            mass: 200,
            isStatic: true,
            shape: {
                type: 'circle',
                radius: 64
            },
            plugin: {
                attractors: [
                    Phaser.Physics.Matter.Matter.Plugin.resolve("matter-attractors").Attractors.gravity
                ]
            }
        });
        can_shoot = this.can_shoot;
        can_shoot = true;
        tierra.setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });
        tierra.on('pointerover', function(){
            can_shoot = false;
        });
        tierra.on('pointerout', function(){
            can_shoot = true;
        });


        //MOUSE
        this.input.setDefaultCursor('url(assets/input/mira.cur), pointer');
        
        //BOTON DE PAUSA ENGRANAJE
        var pausa = this.add.sprite(game.config.width - 45, 5, 'i_opciones').setInteractive();
        pausa.setOrigin(0, 0);
        pausa.setScale(0.8);
        pausa.on('pointerover', function() {
            pausa.setTint(0x7878ff);
        });
        pausa.on('pointerout', function() {
            pausa.clearTint();
        });
        pausa.on('pointerdown', ()=>{
            this.scene.start('sc_menu')
        });

        //fuego sat
        var particles = this.add.particles('i_red');
               

        //SATELITE
        var vec_s = new Phaser.Math.Vector2(0,110);
        //console.log(vec_n);
        vec_s.rotate(Phaser.Math.RND.rotation());
        shooter = this.shooter;
        shooter = this.matter.add.sprite((game.config.width/2)+vec_s.x,(game.config.height/2)+vec_s.y,'i_shooter', null, {
            label: 'nave',
            mass: 0.01,
            ignorePointer: true,
            inertia: Infinity,
            frictionAir: 0,
            friction: 0,
            shape: {
                    type: 'circle',
                    radius: 32*0.5
                },
        });
        shooter.scale=0.5;

        r_vec=vec_s.length();
        //console.log("r_vec = " + r_vec);
        dir_vec_s=vec_s.rotate(3.1416/2).normalize();
        //console.log(dir_vec);
        mag_vec_s=Math.sqrt(60/r_vec);

        shooter.setVelocity(dir_vec_s.x*mag_vec_s,dir_vec_s.y*mag_vec_s);

        //ISS
        var vec_s = new Phaser.Math.Vector2(0,160);
        //console.log(vec_n);
        vec_s.rotate(Phaser.Math.RND.rotation());
        iss = this.shooter;
        iss = this.matter.add.sprite((game.config.width/2)+vec_s.x,(game.config.height/2)+vec_s.y,'i_iss', null, {
            label: 'estacion',
            mass: 0.01,
            ignorePointer: true,
            inertia: Infinity,
            frictionAir: 0,
            friction: 0,
        });
        r_vec=vec_s.length();
        //console.log("r_vec = " + r_vec);
        dir_vec_s=vec_s.rotate(3.1416/2).normalize();
        //console.log(dir_vec);
        mag_vec_s=Math.sqrt(60/r_vec);
        iss.setVelocity(dir_vec_s.x*mag_vec_s,dir_vec_s.y*mag_vec_s);



        iss.setInteractive({ cursor: 'url(assets/input/mira_dark.cur), pointer' });
        iss.on('pointerover', function(){
            can_shoot = false;
        });
        iss.on('pointerout', function(){
            can_shoot = true;
        });

        fuego = particles.createEmitter({
            speed: { min: 400, max: 600 },
            angle: {
                onEmit: function (particle, key, t, value)
                {
                    return shooter.angle-90;
                }
            },
            on: {
                onEmit: function (particle, key, t, value)
                {
                    return prop_on;
                }
            },
            lifespan: 100,
            scale: { start: 0.5, end: 2 },
            alpha: { start: 0.5, end: 0 },
            blendMode: 'ADD',

        });        
        
        fuego.startFollow(shooter);

        //BARRAS DE COMBUSTIBLE Y ENERGIA
        gasbar = this.add.graphics();
        gasbar.fillStyle(0x48c9b0,1);
        gasbar.fillRect(0, 0, game.config.width, 20);
        gasbar.x = 0;
        gasbar.y = game.config.height - 41;
        gastotal = this.gastotal;
        gastotal = 100;
        gasname = this.add.text(game.config.width / 2 - 20, game.config.height - 40, 'Fuel', {
            fontSize: '19px',
            fill: '#34495e'
        });

        energybar = this.add.graphics();
        energybar.fillStyle(0xf4d03f,1);
        energybar.fillRect(0, 0, game.config.width, 20);
        energybar.x = 0;
        energybar.y = game.config.height - 20;
        energytotal = this.gastotal;
        energytotal = 100;
        energyname = this.add.text(game.config.width / 2 - 30, game.config.height - 21, 'Energy', {
            fontSize: '18px',
            fill: ' #d35400'
        });


        //OTROS
        center = new Phaser.Geom.Point(game.config.width / 2, game.config.height / 2);
        input = this.input;


        // emisor de particulas de choque
        explosion = this.add.particles('i_exp').createEmitter({
            x: 400,
            y: 300,
            speed: { min: -800, max: 800 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.5, end: 0 },
            blendMode: 'SCREEN',
            //active: false,
            lifespan: 600,
            on: false
        });

        // BASURA

        n_basura=10;
        var center= new Phaser.Math.Vector2(game.config.width / 2,game.config.height / 2);
        console.log(center);
        for (var i = 0; i < n_basura; i++)
        {
            // generacion aleatoria de angulos
            // 1º creo vector en la esquina
            // 2º lo apunto a un x entre 90 y 250
            // 3º le doy un angulo aleatorio
            var vec_n = new Phaser.Math.Vector2();
            vec_n.x=Phaser.Math.RND.between(200, 400);
            //console.log(vec_n);
            vec_n.rotate(Phaser.Math.RND.rotation());
            //console.log(vec_n);

            //rand de escala
            esc_rnd=Phaser.Math.RND.frac()*0.5+0.1;
            cosos = this.matter.add.sprite(vec_n.x+center.x,vec_n.y+center.y,'trash', i, {
                label: 'coso',
                mass: 0.001,
                inertia: Infinity,
                ignoreGravity: false,
                frictionAir: 0,
                friction: 0,
                shape: {
                    type: 'circle',
                    radius: 32*esc_rnd
                },
                plugin: {
                    attractors: [
                        Phaser.Physics.Matter.Matter.Plugin.resolve("matter-attractors").Attractors.gravity
                    ]
                },
            });

            cosos.scale=esc_rnd;

            cosos.setInteractive({ cursor: 'url(assets/input/mira_shooting.cur), pointer' });
            cosos.on('pointerover', function(){
                este_coso = this;
                console.log(este_coso);
            });
            cosos.on('pointerout', function(){
                este_coso = null;
                console.log(este_coso);
            });
            // asignacion de velocidad
            // constante de gravitacion G*M mas o menos 54
            // la velocidad es perpendicular, por lo que giro pi/2 y calculo seno y coseno
            // velocidad angular=raiz(GM/r) 

            r_vec=vec_n.length()
            
            dir_vec=vec_n.rotate(3.1416/2).normalize();
            
            mag_vec=Math.sqrt(60/r_vec);
            cosos.setVelocity(dir_vec.x*mag_vec,dir_vec.y*mag_vec);
           
        }

        // si el objeto es la tierra, borra el otro
        this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {
            this.sound.play('s_prop');
            //Si algo colisiona contra la tierra
            if (bodyA.label==='tierra'){
                if(bodyB.label==='coso'){
                    test=bodyB;
                    bodyB.position.x=-100;
                    bodyB.destroy();
                    score+=10;
                    n_basura-=1;
                } else{
                    ending=1;
                    this.scene.start('sc_game_over')
                }
            } else if (bodyB.label==='tierra'){
                if(bodyB.label==='coso'){
                    test=bodyB;
                    bodyA.position.x=-100;
                    bodyA.destroy();
                    score+=10;
                    n_basura-=1;
                } else{
                    ending=1;
                    this.scene.start('sc_game_over')
                }
            //Si algo colisiona contra la nave
            } else if (bodyA.label==='nave'||bodyB.label==='nave'||bodyA.label==='estacion'||bodyB.label==='estacion'){
                //genera basura en impacto
                for (var i = 0; i < 3; i++)
                {
                    esc_rnd=Phaser.Math.RND.frac()*0.3+0.1;
                    cosos = this.matter.add.sprite(shooter.x-i*20,shooter.y+i*20,'trash', i, {
                        label: 'coso',
                        mass: 0.001,
                        inertia: Infinity,
                        ignoreGravity: false,
                        frictionAir: 0,
                        friction: 0,
                        shape: {
                            type: 'circle',
                            radius: 32*esc_rnd,
                        },
                        plugin: {
                            attractors: [
                                Phaser.Physics.Matter.Matter.Plugin.resolve("matter-attractors").Attractors.gravity
                            ]
                        },
                    });
                    cosos.scale=esc_rnd;
                    cosos.setVelocity(shooter.body.velocity.x+Phaser.Math.RND.frac(),shooter.body.velocity.y+Phaser.Math.RND.frac());
                }
                bodyA.position.x=-100;
                bodyA.destroy();
                bodyB.position.x=-100;
                bodyB.destroy();
                ending=2;
                this.time.addEvent({
                delay: 5000,
                callback: ()=>{
                    this.scene.start('sc_game_over');
                    },
                });
                
            } else{
                // genera explosion en impacto
                explosion.setPosition(bodyA.position.x,bodyA.position.y);
                explosion.on=true;
                this.time.addEvent({
                    delay: 100,
                    callback: ()=>{
                        explosion.on=false;
                    },
                });
                bodyA.position.x=-100;
                bodyA.destroy();
                bodyB.position.x=-100;
                bodyB.destroy();
                score-=5;
                n_basura-=2;
            }
            ;
        });
        scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
        trashleft = this.add.text(16, 48, 'Trash left: 0', { fontSize: '32px', fill: '#fff' });
    },


    update(){
        // puntaje

        scoreText.setText('Score: ' + score);
        trashleft.setText('Trash left: ' + n_basura);

        //APUNTADOR
        var shooter_angle = Phaser.Math.Angle.Between(shooter.x,shooter.y,input.x,input.y)-Math.PI/2;
        var shooter_angledelta = Phaser.Math.Angle.Wrap(shooter_angle - shooter.rotation);
        if (shooter_angledelta > 0.1 && shooter_angledelta < Math.PI){
            shooter.setAngularVelocity(0.1*shooter_angledelta)
        }
        else{
            if(shooter_angledelta == 0 ){
                shooter.setAngularVelocity(0)
            }
            else{
                shooter.setAngularVelocity(0.1*shooter_angledelta)
            }
        };

        //PROPULSION Y BARRAS DE ESTADO
        var pointer = this.input.activePointer;
        if (pointer.leftButtonDown() && energytotal > 0 && can_shoot == true){
            var line = this.add.line(0,0,shooter.x,shooter.y,input.x,input.y,0xe74c3c).setOrigin(0, 0);
            if(sound==1){
                this.sound.play('s_laser');
            }
            this.time.addEvent({
                delay: 40,
                callback: ()=>{
                    line.destroy()
                    },
                loop: true
            });
            energytotal -= 0.2;
            energybar.scaleX = energytotal/100;
            energyname.x =(game.config.width / 2 - 30) * energytotal/100;

            //Impulsa el coso cuando haces click
            if(este_coso!=null){
                var vec_impulso=new Phaser.Math.Vector2(input.x-shooter.x,input.y-shooter.y)
                este_coso.applyForceFrom(vec_impulso, vec_impulso.normalize().scale(0.00000001));
            }
        };
        if (energytotal < 100){
            energytotal += 0.02;
            energybar.scaleX = energytotal/100
            energyname.x =(game.config.width / 2 - 30) * energytotal/100
        }
        if (pointer.rightButtonDown() && gastotal > 0){
            if(sound==1){
                this.sound.play('s_prop');
            }
            shooter.thrustRight(0.0000001);
            gastotal -= 0.15;
            gasbar.scaleX = gastotal/100
            gasname.x =(game.config.width / 2 - 20) * gastotal/100
            
            //emitter
            fuego.on= true;
        }
        else{
            fuego.on= false;
        };

    }
});