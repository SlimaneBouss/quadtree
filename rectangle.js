import { Point } from "./point.js";
import { Boundaries } from "./boundaries.js";

export class Rectangle 
{
    
    constructor(center, height, width)
    {
        this.height = height;
        this.width = width;
        this.center = center;
        this.points = [];
        this.boundaries = new Boundaries (center, height, width);
        this.upLeftRec = undefined;
        this.downLeftRec = undefined;
        this.upRightRec = undefined;
        this.downRightRec = undefined;
    }


    createSubRec() 
    {
            this.upLeftRec = new Rectangle(new Point( this.boundaries.left + this.width/2, this.boundaries.up + this.height/2), this.height/2, this.width/2 );
            this.downLeftRec = new Rectangle(new Point( this.boundaries.left + this.width/2, this.boundaries.down - this.height/2), this.height/2, this.width/2 )
            this.upRightRec = new Rectangle(new Point( this.boundaries.right - this.width/2, this.boundaries.up + this.height/2), this.height/2, this.width/2 )
            this.downRightRec = new Rectangle(new Point( this.boundaries.right - this.width/2, this.boundaries.down - this.height/2), this.height/2, this.width/2 )
    }

    addPoint(point) 
    {
        if(this.boundaries.isWithInBoundaries(point))
        {
            this.points.push(point);
            return true;
        }
        
        return false;
    }

    

}