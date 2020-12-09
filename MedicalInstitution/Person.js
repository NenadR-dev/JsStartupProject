class Person{
    constructor(firstName, lastName){
        if(this.constructor == Person){
            throw new Error("Cannot instance Person");
        } else {
            this._firstName = firstName;
            this._lastName = lastName;
        }
    }
    set firstName(value) {
        this._firstName = value;
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get lastName(){
        return this._lastName;
    }
}