const myDictionary = {};

function addWord(dictionary, word, definition) {
  dictionary[word] = definition;
}

function getDefinition(dictionary, word) {
  return dictionary[word];
}

addWord(
  myDictionary,
  'TypeScript',
  'A superset of JavaScript that adds static typing.'
);
console.log(getDefinition(myDictionary, 'TypeScript')); // Ska skriva ut "A superset of JavaScript that adds static typing."

addWord(myDictionary, 'JavaScript', 'A dynamic programming language.');
console.log(getDefinition(myDictionary, 'JavaScript')); // Ska skriva ut "A dynamic programming language."
console.log(getDefinition(myDictionary, 'Java')); // Ska skriva ut undefined
