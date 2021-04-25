class Compartment{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage('images/coach.png')
      World.add(world,this.body);
      this.width = width;
      this.height = height;
      Matter.Body.setMass(this.body,this.body.mass*5)
    }
    show()
    {
        imageMode(CENTER);
        fill('brown');
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }