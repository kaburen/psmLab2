const _ = require('lodash');

const collections = [
  {},
  15,
  "hello@test.pl",
  null,
  ['aaa', 'bbb', 5],
  'admin@gmail.com',
  undefined,
  'a34@yahoo.com',
  '321@a',
  '321.pl'
];

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}

function weightOne(user){
  console.log(_.find(user.allGrades, {'weight': 1}).subjectName);
}

function weightAv(user){
  let waga = 0;
  let numerator = 0;
  user.allGrades.forEach((i) => {
    let sum = 0;
      i.grades.forEach((k) => {
      sum += k;
    });
    numerator += sum/(i.grades.length) * i.weight
    waga += i.weight;
  });
  console.log(user.name +", "+ user.surname +" średnia ważona: "+ numerator/waga);
}

function getMails(e){
  let valid = [];
  e.forEach((email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
      valid.push(email);
    }
  });
  console.log(valid);
}

numsArray = [5, 4, 3, 5, 2];
console.log("pierwsze:");
console.log(_.mean(numsArray));
console.log("drugie:");
console.log("max: "+ _.max(numsArray));
console.log("min: "+ _.min(numsArray));
console.log("trzecie:");
weightAv(user);
console.log("czwarte:");
weightOne(user);
console.log("piąte:");
getMails(collections);
