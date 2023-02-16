let words = [
	  'laboratory',
	  'experiment',
	  'flab',
	  'Pans Labyrinth',
	  'elaborate',
	  'polar bear',
];

function allMatches(words, pattern) {
  return words.filter(function(word) {
    return pattern.test(word);
  });
}


console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

