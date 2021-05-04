class Goti{
    constructor(x,y,r){
    var options={
        isStatic: true,
      //  restitution:0.3,
       // friction:0.5,
       // density:1.2 
    }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
    
        World.add(world,this.body);
    }
    display(){
       var pos =this.body.position;
       
        push();
        
        ellipseMode(RADIUS);
       // strokeWeight(4);
        stroke(222,68,174);
        fill(222,68,174);
        ellipse(pos.x,pos.y,20);
        
        pop();
    }
    }