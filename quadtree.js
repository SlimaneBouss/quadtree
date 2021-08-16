import { Rectangle } from "./rectangle.js";

export class Quadtree 
{
    constructor(rec,ctx)
    {
        this.ctx = ctx;
        this.root = rec;
        this.maxCap = 4;
        this.divided = false;

        //sub quadtrees
        this.upLeftQt = undefined;
        this.downLeftQt = undefined;
        this.upRightQt = undefined;
        this.downRightQt = undefined;
    }

    insert(point) 
    {
        if(!this.isCapAttainted())
        {
            let bool = this.root.addPoint(point);
            if(bool){this.drawPoint(point)}
            return bool
        }

        if(!this.divided)
        {
            this.root.createSubRec();
            this.createSubQts();
            this.drawLine();
            this.divided = true;
        }

        if(this.upLeftQt.insert(point)) {return true;}
        if(this.downLeftQt.insert(point)) {return true;}
        if(this.upRightQt.insert(point)) {return true;}
        if(this.downRightQt.insert(point)) {return true;}
    }

    isCapAttainted()
    {
        return this.maxCap <= this.root.points.length;
    }

    createSubQts () 
    {
        this.upLeftQt = new Quadtree(this.root.upLeftRec, this.ctx);
        this.upRightQt = new Quadtree(this.root.upRightRec, this.ctx);
        this.downLeftQt = new Quadtree(this.root.downLeftRec, this.ctx);
        this.downRightQt = new Quadtree(this.root.downRightRec, this.ctx);
    }

    drawPoint(point)
    {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(point.x,point.y,2,2);

    }

    drawLine() 
    {
        this.ctx.strokeStyle = 'black';
        this.ctx.rect(this.root.boundaries.up, this.root.boundaries.left, this.root.width, this.root.height);
        this.ctx.rect(this.root.boundaries.up + this.root.width, this.root.boundaries.left, this.root.width, this.root.height);
        this.ctx.rect(this.root.boundaries.up, this.root.boundaries.left + this.root.height, this.root.width, this.root.height);
        this.ctx.rect(this.root.boundaries.up + this.root.width, this.root.boundaries.left + this.root.height, this.root.width, this.root.height);
        this.ctx.stroke();
    }
}