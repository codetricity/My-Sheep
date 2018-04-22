var game = new Phaser.Game(600, 480);

var GameState = {
    init: function(){

    },

    preload: function(){
        this.load.spritesheet('girl', 'assets/girl-75x93x8.png', 75, 93, 8);

    },

    create: function(){
        this.girl = this.add.sprite(255, 195, 'girl');
        this.girl.animations.add('walk', [0, 1, 2, 3], 6, true);

    },

    update: function(){
        // this.girl.frame = 5;
        this.girl.scale.setTo(1, 1);
        this.girl.animations.play('walk');

    }

}

game.state.add('GameState', GameState);
game.state.start('GameState');