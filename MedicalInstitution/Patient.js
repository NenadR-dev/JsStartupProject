class Patient extends Person{
    constructor(firstName, lastName, jmbg, healthChartId){
        super(firstName,lastName);
        this._jmbg = jmbg;
        this._healthChartId = healthChartId;
        this._doctor;
        LogData('Patient created');
    }
    set jmbg(value) {
        this._jmbg = value;
    }
    get jmbg () {
        return this._jmbg;
    }
    set healthChartId(value) {
        this._healthChartId = value;
    }
    get healthChartId() {
        return this._healthChartId;
    }
    set doctor(value) {
        this._doctor = value;
    }
    get doctor() {
        return this._doctor;
    }
}