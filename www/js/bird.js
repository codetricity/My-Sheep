var game = new Phaser.Game(800, 600);
var GameState = {
    init: function(){

    },
    
    preload: function(){
        this.load.spritesheet('bird', 'assets/bird.png', 75, 50, 8);
    },

    create: function(){
        this.bird = this.add.sprite(343, 295, 'bird');
        this.bird.animations.add('flapping', [0, 1, 2, 3, 4, 5, 6, 7], 8, true);

    }, 
    
    update: function(){
        this.bird.scale.setTo(-1, 1);
        this.bird.animations.play('flapping');
    }
}

game.state.add('GameState', GameState);
game.state.start('GameState');