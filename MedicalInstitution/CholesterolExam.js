class CholesterolExam extends LaboratoryExamination{
    constructor(date, time, scholesterol_value, time_since_last_meal){
        super(date,time);
        this._scholesterol_value = scholesterol_value;
        this._time_since_last_meal = time_since_last_meal;
    }
}