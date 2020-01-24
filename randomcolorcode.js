const m = require('Materials');
const s = require('Scene');
const t = require("TouchGestures");
const r = require("Reactive");
const d = require("Diagnostics");


var min =0;
var max  =1;

function ran(){
    return Math.random() * (max - min) + min ;
}


t.onTap(s.root.find("Heart")).subscribe(()=>{
    var a1=ran();
    var a2=ran();
    var a3=ran();
    var color = r.RGBA(a1,a2,a3,1);
    d.log(a1+" "+a2+" "+a3);
    m.get("Heart_mat").baseColorFactor=color;


});

