//destructing object
const personInf0 = {
  fname: "Matt",
  lname: "Atterholt",
  city: "New Liberty",
  state: "Iowa",
  zipCode: 12345
};

const { fname, lname } = personInf0;
console.log(`
destructing ${fname} ${lname}`);
console.log(`
instead of ${personInf0.city}`);

const { state: st } = personInf0;
console.log(`
state of orgin ${st}`);

//destructing array
let [P1, P2, P3] = ["John", "Tod", "Tyler"];

P2 = "Joe";

console.log(`
${P2} lives in town house,
${P3} lives in farm house.`);
