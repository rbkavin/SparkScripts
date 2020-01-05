const s = require("Scene");
const t = require("TouchGestures");
const m = require("Materials");

//array always starts with 0 

//material names
var  materials = ["coal","gold","lava","dimand","tree"];

var mat =[0,0];
//for first object
t.onTap(s.root.find("Cube")).subscribe(
    ()=>{
        if(mat[0]==5){
            mat[0] =0;
        }
        s.root.find("Cube").material = m.get(materials[mat[0]]);
        mat[0]++;

    }
);


//for second object
t.onTap(s.root.find("Cube1")).subscribe(
    ()=>{
        if(mat[1]==5){
            mat[1] =0;
        }
        s.root.find("Cube1").material = m.get(materials[mat[1]]);
        mat[1]++;

    }
);
