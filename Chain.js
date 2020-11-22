class Chain {
    constructor(bodyA,bodyB) {
      var options = {
          bodyA : bodyA,
          bodyB : bodyB,
          stiffness : 0.04,
          length : 10
          
      }
      this.chain = Constraint.create(options);
     
      World.add(world, this.chain);
    }
    display(){
      var posA = this.chain.bodyA.position;
      var posB = this.chain.bodyA.position;
      strokeWeight(5);

      line(posA.x, posB.x, posA.y, posB.y);
    }
  };