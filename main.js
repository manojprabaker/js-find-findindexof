const labors = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];

// let found = labors.find(labor=>labor.name =="John Cena");

// console.log(found);


// const laborInfo = laborDetail=>laborDetail.name=="John Carte";

// console.log(labors.findIndex(laborInfo));

let founds=labors.find(function(result){
	return result.name.indexOf("John")>=0;
});
console.log(founds);

// let founds=labors.find(function(result){
	// return result.name==="John Carte"
// });
// console.log(founds);

let founds1=labors.findIndex(function(result1){
	return result1.name.indexOf("John")>=0
})
console.log(founds1);


function count()
{
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit]=(tally[fruit]||0) + 1 ;
  return tally;
} , {})
console.log(count);
}
count();