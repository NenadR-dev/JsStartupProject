class BloodSugarExam extends LaboratoryExamination{
    constructor(date, time, sugar_value, time_since_last_meal){
        super(date,time);
        this._sugar_value = sugar_value;
        this._time_since_last_meal = time_since_last_meal;
    }
}
