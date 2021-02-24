class Player {
    constructor(){
      this.index = null
      this.distance = 0
      this.name = null
    }
  
    getCount(){
      var playerCountRef = database.ref('contestantcount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantcount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index
      database.ref(playerIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
    static getPlayerInfo(){
      var playerRef = database.ref("players")
      playerRef.on("value",(data) => {
        allPlayers = data.val() 
      })
    }
  }
  