class Question{
    constructor() {
    this.title = createElement('h2')
    this.question = createElement('h3')
    this.option1=createElement('h4')
    this.option2=createElement('h4')
    this.input = createInput("name")
    this.button = createButton("answer")  
    }
    hide(){
      this.title.hide()
     ////// this.question.hide()
      this.input.hide()
      this.button.hide()
    }
    display(){
        this.title.html("My Quiz Game")
        this.title.position(350,0)
        this.question.html("Question:-what starts and ends with a letter E , but only has one letter")
        this.question.position(150,80)
        this.option1.html("1:everyone")
        this.option1.position(150,100)
        this.option2.html("2:envolope")
        this.option2.position(150,120)

        this.input.position(150,230)
        this.button.mousePressed(()=>{
          this.title.hide()
          this.input.hide()
          this.button.hide()
          player.name=this.input.value()
          playerCount+=1
          player.index=playerCount
          player.update()
          player.updateCount(playerCount)
        })
    }
}
