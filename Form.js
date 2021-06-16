class Form{
    constructor(){
        //this.title=createElement("h2");
        this.input=createInput("Name");
        this.button=createButton("Let's Begin");
        this.greetings=createElement("h1");
        

    }
    
    hide(){
        //this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }

    display(){
        //this.title.html("Zombie Apocalpse");
        //this.title.position(400,150);

        this.input.position(450,250);

        this.button.position(550,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            var name=this.input.value();
            this.greetings.html("Welcome To The New World Of Zombies, " +name);
            this.greetings.position(180,220);

            var  buttonPlay=createSprite(500,400,20,20);
            buttonPlay.addImage(continueButton);
        })
        drawSprites();


    }
}
