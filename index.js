const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials = tutorials.map(title => title.split(" "))
  let capedTutorials = newTutorials.map(title => {
  let newTitle = title.map(word => {
    let firstLetter = word[0].toUpperCase()
    let newWord = word.replace(word[0],firstLetter)
    return newWord
  })

  let capedTitle = newTitle.join(" ")
  return capedTitle
  })
  return capedTutorials
 
  //return tutorials
}

//-----------------
/*
let newTutorials = tutorials.map(title => title.split(" "))
let capedTutorials = newTutorials.map(title => {
  let newTitle = title.map(word => {
    let firstLetter = word[0].toUpperCase()
    let newWord = word.replace(word[0],firstLetter)
    return newWord
  })

  let capedTitle = newTitle.join(" ")
  return capedTitle
})
return capedTutorials
*/


