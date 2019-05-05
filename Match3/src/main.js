window.onload = function () {
    var gameWidth = 1280,
        gameHaight = 960;
    var game = new Phaser.Game(gameWidth, gameHaight + 140, Phaser.AUTO);
    game.state.add('start', start.state1);
    game.state.start('start');
};
