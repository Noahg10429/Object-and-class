class Bird extends BaseClass {
  constructor(x,y,image){
    super(x,y,50,50);
    this.image = image
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
