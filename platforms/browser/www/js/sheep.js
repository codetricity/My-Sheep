var game = new Phaser.Game(720, 1280);

var GameState = {

    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.game.world.setBounds(0, 0, 720, 1280);
        
    },

    preload: function(){

        this.load.spritesheet('sheep', 'assets/07-sheep_86x87x20.png', 86, 87, 20);
        this.load.image('button', 'assets/arrowButton.png');
        this.load.image('grass', 'assets/grass2.png');
        this.load.image('bush', 'assets/bush2.png');

    },

    create: function(){
        this.add.image(0, 0, 'grass');
        this.add.image(340, 204, 'bush');
        this.add.image(501, 405, 'bush');
        this.add.image(204, 701, 'bush');
        this.sheep = this.add.sprite(305, 205, 'sheep');
        this.sheep.animations.add('walk', [5, 6, 7], 6, true);
        this.sheep.animations.add('walkUp', [0, 1, 2], 6, true);
        this.sheep.animations.add('walkDown', [11, 12, 13], 6, true);
        this.downButton = this.add.button(495, 1085, 'button');
        this.upButton = this.add.button(495, 935, 'button');
        this.rightButton = this.add.button(600, 1005, 'button');
        this.leftButton = this.add.button(390, 1005, 'button');

        this.game.physics.arcade.enable(this.sheep);
        this.sheep.anchor.setTo(0.5);

        
        
        this.sheep.body.collideWorldBounds = true;
        this.sheep.customParams = {direction: 'stop'};

    },

    update: function(){
        
        if(this.cursors.right.isDown || this.sheep.customParams.direction == "right"){
            this.sheep.body.velocity.x = 100;
            this.sheep.scale.setTo(1, 1);
            this.sheep.animations.play('walk');
        }

        else if(this.cursors.left.isDown || this.sheep.customParams.direction == 'left'){
            this.sheep.body.velocity.x = -100;
            this.sheep.scale.setTo(-1, 1);
            this.sheep.animations.play('walk');
        }

        else if(this.cursors.up.isDown || this.sheep.customParams.direction == "up"){
            this.sheep.body.velocity.y = -100;
            this.sheep.animations.play('walkUp');
        }

        else if(this.cursors.down.isDown || this.sheep.customParams.direction == "down"){
            this.sheep.body.velocity.y = 100;
            this.sheep.animations.play('walkDown');
        }

        else{
            this.sheep.frame = 11;
            this.sheep.body.velocity.x = 0;
            this.sheep.body.velocity.y = 0;
            this.sheep.customParams.direction = 'stop';
        }
        this.leftButton.events.onInputDown.add(function(){
            this.sheep.customParams.direction = 'left';
          
        }, this);

        this.rightButton.events.onInputDown.add(function(){
            this.sheep.customParams.direction = "right";
        }, this);

        this.upButton.events.onInputDown.add(function(){
            this.sheep.customParams.direction = "up";
        }, this);

        this.downButton.events.onInputDown.add(function(){
            this.sheep.customParams.direction = "down";
        }, this);

    }
}

game.state.add('GameState', GameState);
game.state.start('GameState');