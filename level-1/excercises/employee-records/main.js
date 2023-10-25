employees = [];

function Employee (name, job, salary, status) {
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = "Full Time";
    // this.jobstatus = function(){
    //     console.log(this.status)
    // };
};

var gon = new Employee("Gon", "Hunter", "$60,000", "Full Time");
var killua = new Employee("Killua", "Assassin", "$60,000", "Full Time");
var leorio = new Employee("Leorio", "Doctor", "$60,000", "Part-time");

//employees.push(gon, killua, leorio);

//console.log(employees);

Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + " Job: " + this.job + " Salary: " + this.salary + " Status: " + this.status);
};

 Employee.prototype.jobStatus = function() {
     console.log(this.status)
 }

gon.printEmployeeForm();
killua.printEmployeeForm();
leorio.printEmployeeForm();

employees.push(gon, killua, leorio);

console.log(employees);

// cannot complete only way to fix is to set this.status = status
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"