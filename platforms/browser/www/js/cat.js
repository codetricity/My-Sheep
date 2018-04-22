var game = new Phaser.Game(800, 600);

var GameState = {

    init: function(){

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    preload: function(){

        this.load.spritesheet('cat', 'assets/06-cat_31x32x12.png', 31, 32, 12);
    },

    create: function(){
        this.cat = this.add.sprite(204, 294, 'cat');
        this.cat.animations.add('walk', [3, 4, 5], 6, true);
        this.cat.animations.add('walkUp', [9, 10, 11], 6, true);
        this.cat.animations.add('walkDown', [0, 1, 2], 6, true);

        this.game.physics.arcade.enable(this.cat);
        this.cat.anchor.setTo(0.5);

    },

    update: function(){
        
        if(this.cursors.right.isDown){
            this.cat.animations.play('walk');
            this.cat.body.velocity.x = 100;
            this.cat.scale.setTo(-1, 1)
        }
        
        else if(this.cursors.left.isDown){
            this.cat.animations.play('walk');
            this.cat.body.velocity.x = -100;
            this.cat.scale.setTo(1, 1);
        }

        else if(this.cursors.up.isDown){
            this.cat.animations.play('walkUp');
            this.cat.body.velocity.y = -100;
            
        }

        else if(this.cursors.down.isDown){
            this.cat.animations.play('walkDown');
            this.cat.body.velocity.y = 100;
        }

        else{
            this.cat.frame = 1;
            this.cat.body.velocity.x = 0;
            this.cat.body.velocity.y = 0;
        }

    }
}

game.state.add('GameState', GameState);
game.state.start('GameState');