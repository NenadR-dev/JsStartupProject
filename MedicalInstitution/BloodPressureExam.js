class BloodPressureExam extends LaboratoryExamination{
    constructor(date, time, upper_value, lower_value, puls){
        super(date,time);
        this._upper_value=upper_value;
        this._lower_value = lower_value;
        this._puls = puls;
    }
}