var Player = {
  initialize: function(symbol){
    this.symbol = symbol;
  },
  create: function(symbol){
    var newPlayer = Object.create(Player);
    newPlayer.initialize(symbol);
    return newPlayer;
  }
}

var Space = {
  initialize: function(x,y){
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function(x,y){
    var newSpace = Object.create(Space);
    newSpace.initialize(x,y);
    return newSpace;
  },
  markBy: function(player) {
    this.markedBy = player;
  }

}

var Board = {
  initialize: function() {
    var newBoard = Object.create(Board);
    newBoard.spaces = [
                        Space.create(1,1),
                        Space.create(1,2),
                        Space.create(1,3),
                        Space.create(2,1),
                        Space.create(2,2),
                        Space.create(2,3),
                        Space.create(3,1),
                        Space.create(3,2),
                        Space.create(3,3)
                      ];

    newBoard.winningCombinations = [
                        [Space.create(1,1),Space.create(1,2),Space.create(1,3)],
                        [Space.create(1,1),Space.create(2,2),Space.create(3,3)],
                        [Space.create(1,1),Space.create(2,1),Space.create(3,1)],
                        [Space.create(1,2),Space.create(2,2),Space.create(3,2)],
                        [Space.create(1,3),Space.create(2,2),Space.create(3,3)],
                        [Space.create(3,1),Space.create(3,2),Space.create(3,3)],
                        [Space.create(2,1),Space.create(2,2),Space.create(2,3)],
                      ];
    console.log(newBoard.spaces);


    // ;
    // for(var i=0; i< 9; i++){
    //   this.spaces.push(Object.create(Space))


  }
};

var Game = {
  initialize: function(){
  var newGame = Object.create(Game);
  newGame.players = [
                    Player.create("X"),
                    Player.create("O")
                    ]
  console.log(newGame.players);

  var newBoard = Board.initialize();
  console.log(this.newBoard);
 }
}

// var player1 = Player.create("X");
// game.players.push(player1)
