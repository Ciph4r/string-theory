function crazyCase(str) {
  let x = ''
  let count = 1
  for (let i = 0 ; str.length > i ; i++){
  if (count === i ){
    count += 2
    x+= str[i].toUpperCase() 
  }
  else x+= str[i].toLowerCase()
  }return x
}

function ciEmailify(str) {
  let x = ''
  for (let i = 0 ; str.length > i ; i++){
  if (str[i] === ' ')  x+= '.' 
  else x+= str[i] 
  }return (x + '@codeimmersives.com').toLowerCase()

}

function exclaim(str) {
  let x = ''
  for (let i = 0 ; str.length > i ; i++){
  if (str[i] === '?' || str[i] === '.' )  x+= '!' 
  else x+= str[i]
  }return x
  
}

function reverse(str) {
  let x = ''
  for (let i = str.length; i>0; i--){
      x += str[i-1]
  } console.log(x)
  return x
  
}

function crazyCase2ReturnOfCrazyCase(str) {
  let x = ''
  let count = 1
  for (let i = 0 ; str.length > i ; i++){
  if (str[i]===' ') count++
    if (count === i){
    count += 2
    x+= str[i].toUpperCase() 
  }
  else x+= str[i].toLowerCase()
  }return x
}

function titleCase(str) {
  let x = ''
  let spaceCount = 1
  for (let i = 0 ; str.length > i ; i++){
   if (str[i] === ' ' && spaceCount === spaceCount) {
    x+= str[i+1].toUpperCase() 
    spaceCount++
     
    } else x+= str[i].toLowerCase()
  }return x
}

function onlyVowels(str) {
  let x = ''
  for (let i = 0 ; i < str.length ; i++){
        if (str[i] === 'a'|| 
            str[i] === 'e'|| 
            str[i] === 'i'||
            str[i] === 'o'|| 
            str[i] === 'u'|| 
            str[i] === 'A'|| 
            str[i] === 'E'|| 
            str[i] === 'I'|| 
            str[i] === 'O'|| 
            str[i] === 'U') x+= str[i]
          }return x


}


function crazyCase3SonOfCrazyCase() {
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}