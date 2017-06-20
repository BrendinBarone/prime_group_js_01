var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

var newArray = [];

function bonusCalc(employees){
  for(i = 0; i < employees.length; i++){
    //console.log(employees[i]);
    var currentEmployee = employees[i];
    // baseBonus(currentEmployee);
    // timeBonus(currentEmployee);
    // annualBonus(currentEmployee);
    var totalBonusPercent = baseBonus(currentEmployee) + timeBonus(currentEmployee) + annualBonus(currentEmployee);
    if(totalBonusPercent > 0.13){
      totalBonusPercent = 0.13
    }
    else if (totalBonusPercent < 0) {
      totalBonusPercent = 0
    }
    console.log(totalBonusPercent);
    var yearlyIncome = currentEmployee[2];
    var totalBonus = yearlyIncome * totalBonusPercent
    console.log(totalBonus);
    var totalCompensation = (totalBonus * 1) + (yearlyIncome * 1);
    console.log(totalCompensation);
    var employee = [currentEmployee[0], totalBonusPercent, totalCompensation, totalBonus];
    console.log(employee);
    newArray.push(employee);
  }
}
bonusCalc(employees);
console.log(newArray)

var bonus

function baseBonus(currentEmployee){
  var rating = currentEmployee[3];
  var bonus = 0;
  if(rating <= 2){
    bonus = 0
  }
  else if (rating == 3) {
    bonus = 0.04
  }
  else if (rating == 4) {
    bonus = 0.06
  }
  else {
    bonus = 0.10
  }
  console.log(bonus);
  return(bonus);
}

function timeBonus(currentEmployee) {
  number = currentEmployee[1]
  var bonus = 0;
  if (number.length <= 4){
    yearBonus = 0.05
  }
  else {
    yearBonus = 0
  }
  return(yearBonus);
}

function annualBonus(currentEmployee){
  income = currentEmployee[2];
  incomeBonus = 0
  if(income > 65000){
    incomeBonus = -0.01
  }
  else{
    incomeBonus = 0
  }
  return(incomeBonus);
}

$(document).ready(function() {
            $("employee").ready(function () {
               $(this).after('.info');
            })
          });
