var game = new Phaser.Game(800, 600);

var GameState = {

    init: function(){

    },
    
    preload: function(){
        this.load.spritesheet('bird', 'assets/bird2.png', 120, 157, 20);
    },

    create: function(){
        this.bird = this.add.sprite(364, 163, 'bird');
        this.bird.animations.add('flying', [0, 1, 2, 3, 4, 5, 6, 
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 15, true);

    },

    update: function(){
        this.bird.animations.play('flying');

    }
}

game.state.add('GameState', GameState);
game.state.start('GameState');