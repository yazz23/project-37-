class Quiz{
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }

update (state){
    database.ref('/').update({
      gameState: state
    })
}
async start(){
  if(gameState === 0){
    player = new Player ();
    var playerCountRef = await database.ref('contestantcount').once("value")
    console.log("check1")
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val()
      player.getCount()
    }
    question = new Question()
    question.display();
  }
}




}
