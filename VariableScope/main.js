var outsideVar = 15;

function VarVariable() {
    for(var i = 0; i < 10; i ++ ) {
        var x;
        x = i;
    }
    console.log("x: " + x);
}

function LetVariable() {
    for(var j = 0; j < 10; j ++) {
        let y;
        y=j;
    }
    console.log("y: "+ y );
}

function LogOutsideVar() {
    var insideVar = 10;
    console.log("Outside var: " + outsideVar);
}

VarVariable();
LogOutsideVar();
LetVariable();
console.log("Inside var: " + insideVar);