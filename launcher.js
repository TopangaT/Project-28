class Launcher {
 constructor(bodyA,pointB) {
   var options = {
   bodyA: bodyA,
   pointB: pointB,
   length: 30,
   stiffness: 0.05,
   }
   
   this.pointB = pointB;
   this.sling = Constraint.create(options);
   World.add(world,this.sling);
 }
 fly() {
  this.sling.bodyA = null; 
 }
  attach(body) {
   this.sling.bodyA = body;  
  }
 display() {
  if(this.sling.bodyA) {
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    stroke("#301608");
    strokeWeight(3);
    line(pointA.x, pointA.y, pointB.x, pointB.y); 
    }
  }
}