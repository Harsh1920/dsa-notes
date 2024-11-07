// INPUT:
// let a = [
//   { name: "Laxy", age: 20 },
//   { name: "Harsh", age: 20 },
//   { name: "Ss", age: 21 },
// ];

// OUTPUT:
// {
//   20: [
//     { name: "Laxy", age: 20 },
//     { name: "Harsh", age: 20 }
//   ],
//   21: [
//     { name: "Ss", age: 21 }
//   ]
// }

let groupedByAge = {};

for (let person of a) {
  if (!groupedByAge[person.age]) {
    groupedByAge[person.age] = [];
  }
  groupedByAge[person.age].push(person);
}

console.log(groupedByAge);
