export class Boundaries 
{

    constructor(centerPoint, height, width) 
    {
        this.right = centerPoint.x + width;
        this.left = centerPoint.x - width;
        this.down =  centerPoint.y + height;
        this.up =  centerPoint.y - height;
    }

    
    isWithInBoundaries (point) 
    {
        return (point.x <= this.right && point.x > this.left) &&
               (point.y <= this.down && point.y > this.up);
    }
}