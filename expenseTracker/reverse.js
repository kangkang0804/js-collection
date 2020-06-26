function reverse (str) {
  return str.split('').reduce((rev, char) => {
    console.log(rev)
    return char + rev
  }, '')
}

const string = 'hello'

let reversed = reverse(string)

console.log(reversed)
