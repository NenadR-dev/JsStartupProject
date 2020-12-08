class Character{
    
    static count = 0;

    constructor(){
        if(this.constructor === Character){
            throw new Error("This class is abstract");
        } else {
            this.x = 0;
            this.y = 0;
            Character.count++;
        }  
    }

    setPosition(x,y) {
        if(x <=10 && y <=10){
            this.x = x;
            this.y = y;
        } else {
            console.log('Position exceeds the range of map 10x10');
        }
    }
    getLocation(){
        return 'x: ' + this.x + ' | y: ' + this.y;
    }

    getNumOfCharacters(){
        return count;
    }
}

class PlayerCharacter extends Character {

}

class NonPlayerCharacter extends Character {

}

generateRandomPosition = () => {
    return Math.floor(Math.random() * 10);
}

var players = [];
for(var i = 0; i < 10; i++){
    if(i%2 == 0){
        var p = new PlayerCharacter();
        p.setPosition(generateRandomPosition(),generateRandomPosition())
        players.push(p);
    } else {
        var np = new NonPlayerCharacter();
        np.setPosition(generateRandomPosition(),generateRandomPosition());
        players.push(np);
    }
}
players[1].setPosition(11,11);
console.log([...players]);
console.log('Count: ' + Character.count);
var test = new Character();
