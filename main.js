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
  let lc = str.toLowerCase()
  let x = str[0].toUpperCase()
  let spaceCount = 1
  for (let i = 1 ; lc.length > i ; i++){
   if (lc[i] === ' ') {
    x+= lc[i]
    i++
    x+= lc[i].toUpperCase()  
    } else x+= lc[i]
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





onlyLetters = (str) => {
  let onlyLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ'
  for (let i = 0 ; onlyLetters.length > i ; i ++ ){
    if (str === onlyLetters[i])
    return onlyLetters[i]
  }
}


function crazyCase3SonOfCrazyCase(str) {
  let x = ''
  let count = 1
  for (let i = 0 ; str.length > i ; i++){
  if (str[i] !== onlyLetters(str[i])) count++
    if (count === i){
    count += 2
    x+= str[i].toUpperCase() 
  }
  else x+= str[i].toLowerCase()
  }return x
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