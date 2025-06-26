/* // FUNCTION EXAMPLES--

//BASIC FUNCTION GREETING MYSELF
function greetMatthew() {
  'Hello Matthew'
}
console.log(greet())

//FUNCTION LOOPING OVER AND MODIFYING AN ARRAY
let familyArray = ['dad', 'mum', 'sister', 'cousin']

function addHello(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += ' is looking a bit fat nowadays'
  }
}

let fatFamily = addHello(familyArray)
console.log(familyArray)

//FUNCTION LOOPING OVER THE SAME ARRAY AND THEN RETURNING SOMETHING USING A CONDTIONAL
function findDad(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'dad') {
      return 'We found dad'
    } else {
      return 'you aint dad'
    }
  }
}

console.log(findDad(familyArray))
*/
