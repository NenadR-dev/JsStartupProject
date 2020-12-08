var fs = require('fs');

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

class Doctor extends Person{
    constructor(firstName, lastName, speciality){
        super(firstName,lastName);
        this._speciality = speciality;
        LogData('Doctor Created');
    }
    set speciality(value) {
        this._speciality = value;
    }
    get speciality() {
        return this._speciality;
    }

    async scheduleExam() {
        console.log('BloodPressure Examination in proccess . . .');
        new Promise((response,reject) =>{
            setTimeout(() => response(new BloodPressureExam('11/11/2011','12:22','192','111','90')), 1000);
        }).then(response => {
            console.log(response);
            LogData('BloodPressudeExam method executed');
        });
        console.log('BloodSugar Examination in proccess . . .');
        new Promise((response,reject) =>{
            setTimeout(() => response(new BloodSugarExam('11/11/2011','12:22','123','1 hour')), 2000);
        }).then(response => {
            console.log(response);
            LogData("BloodSugarExam method executed");
        });
        console.log('Cholesterol Examination in proccess . . .');
        new Promise((response,reject) =>{
            setTimeout(() => response(new CholesterolExam('11/11/2011','12:22','192','3 hours')), 3000);
        }).then(response => {
            console.log(response);
            LogData('CholesterolExam method executed')
        });
    }
}

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

class BloodPressureExam extends LaboratoryExamination{
    constructor(date, time, upper_value, lower_value, puls){
        super(date,time);
        this._upper_value=upper_value;
        this._lower_value = lower_value;
        this._puls = puls;
    }
}

class BloodSugarExam extends LaboratoryExamination{
    constructor(date, time, sugar_value, time_since_last_meal){
        super(date,time);
        this._sugar_value = sugar_value;
        this._time_since_last_meal = time_since_last_meal;
    }
}
class CholesterolExam extends LaboratoryExamination{
    constructor(date, time, scholesterol_value, time_since_last_meal){
        super(date,time);
        this._scholesterol_value = scholesterol_value;
        this._time_since_last_meal = time_since_last_meal;
    }
}

LogData = (data) => {
    var date = new Date();
    var log = '['+ date.toLocaleDateString() +'] ['+ date.toLocaleTimeString()+'] ' + data + '\n';
    fs.appendFile('logger.txt', log, err => {
        if(err){
            throw err;
        }
        console.log('New log added');
    });
}


let doctor = new Doctor('Nikola','Pacariz','Php expert and consultant');
let patient = new Patient('Nenad', 'Radulovic', '123456789','44332211');

patient.doctor = doctor;
patient.doctor.scheduleExam();