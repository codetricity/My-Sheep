var game = new Phaser.Game(800, 120, Phaser.AUTO, 'deerBox');

var GameState = {

    init: function(){

    },

    preload: function(){
        this.load.spritesheet('deer', 'assets/04_deer_70x114x7.jpg', 70, 114, 7);
    },

    create: function(){
        this.deer = this.add.sprite(342, 10, 'deer');
        this.stage.backgroundColor = 0xffffff;
        this.deer.animations.add('walk', [0, 1, 2, 3, 4, 5, 6], 6, true);


    },

    update: function(){
        this.deer.animations.play('walk');
        

    }
}

game.state.add('GameState', GameState);
game.state.start('GameState');