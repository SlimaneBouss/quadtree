import { Quadtree } from "./quadtree.js";
import { Rectangle} from "./rectangle.js";

let canvas = document.querySelector('canvas');
canvas.height = 512;
canvas.width = 512;
let ctx = canvas.getContext('2d');

let rec = new Rectangle({x : 256, y : 256}, 256, 256);

let qt = new Quadtree(rec,ctx);

for(let i = 0; i<1000; i++)
{
    qt.insert({x : Math.random()*512, y: Math.random()*512});
}







