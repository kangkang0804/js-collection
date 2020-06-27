function reverse (str) {
  return str.split('').reduce((rev, char) => {
    console.log(rev)
    return char + rev
  }, '')
}

const string = 'hello'

let reversed = reverse(string)

console.log(reversed)

let identifier = null

if (!identifier) {
  console.log('not true')
}

console.log("4" + 5 - "Hello world")
console.log("42" == 42)