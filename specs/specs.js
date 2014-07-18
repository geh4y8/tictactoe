describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("create", function(){
    it("creates a new Space object", function(){
      var newSpace = Space.create(1,2);
      Space.isPrototypeOf(newSpace).should.equal(true);
    });
  }); // you write the rest of this one!

  describe("find", function() {
    it("finds an space by its coordinates", function() {
      var foundSpace = Space.find(1,3);
      foundSpace.should.equal(1,3)
    })
  })
  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  it("creates 9 spaces when it is initialized", function(){
      var newBoard = Object.create(Board);
      newBoard.initialize();
      newBoard.spaces.length.should.equal(9)
  });
  // it("alerts when a player has marked 3 spaces in a row", function() {
  //     var
  // });
});

 describe("Game", function(){
  it("should create 2 players and a board", function(){
    var newGame = Object.create(Game);
    newGame.initialize();
    newGame.players.length.should.equal(2);
  });
});
