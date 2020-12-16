let doctor = new Doctor('Nikola','Pacariz','Php expert and consultant');
let patient = new Patient('Nenad', 'Radulovic', '123456789','44332211');

patient.doctor = doctor;
patient.doctor.scheduleExam();
