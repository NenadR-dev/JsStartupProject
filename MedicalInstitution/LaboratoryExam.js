class LaboratoryExamination{
    constructor(date, time){
        this._date = date;
        this._time = time;
    }
    set date(value) {
        this._date = value;
    }
    get date() {
        return this._date;
    }
    set time(value) {
        this._time = value;
    }
    get time() {
        return this._time;
    }
}