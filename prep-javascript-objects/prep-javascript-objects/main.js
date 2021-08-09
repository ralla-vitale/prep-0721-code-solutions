// Upon saving, let variable becomes const variable

const person = {
  firstName: 'Ralla',
  lastName: 'Vitale',
  hobby: 'Reading novels',
  job: 'Research',
  previousJob: 'Pharmaceutical Sales'
};
const fullName = person.firstName + ' ' + person.lastName;

console.log(person);
console.log("The person's name is:", fullName);
console.log("The person's job is:", person.job);
console.log("The person's previousJob is:", person.previousJob);
console.log("The complete person's object ", person);
