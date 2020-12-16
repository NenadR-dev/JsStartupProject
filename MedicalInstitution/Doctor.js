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