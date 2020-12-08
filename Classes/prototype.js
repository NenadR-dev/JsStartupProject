let Character = {
    x: 0,
    y: 0,
    setPosition(x,y) {
        if(x > 10 || y > 10) {
            throw new Error("Position exceeds map range 10x10");
        } else {
            this.x = x;
            this.y = y;
        }
    },
    getPosition: function() {

    }
}

var players = []

for(var i = 0; i < 10; i++ ){
    if(i%2 == 0) {
        var p = {
            __proto__ : Character
        };
        p.setPosition(10 - i, i);
        p.getPosition = function(){
            return "Player position => x="+this.x + ' y='+this.y;
        }
        players.push(p)
    } else {
        var np = {
            __proto__ : Character
        };
        np.getPosition = function(){
            return "NonPlayer position => x="+this.x + ' y='+this.y;
        }
        np.setPosition(i, 10 - i);
        players.push(np)
    }
}

players.forEach(p => {
    console.log(p.getPosition())
});