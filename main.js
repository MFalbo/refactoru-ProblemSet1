
// ---------Title Case Funtion------------------

String.prototype.toTitleCase = function(){
	return this.split(' ').map(function(word){
		word = word[0].toUpperCase() + word.substring(1).toLowerCase();
		return word;
	}).join(' ');
};

var sentence = "this iS a sTrinG";

console.log(sentence.toTitleCase());


// -----Word Counting Function----

var wordCount = function(string){
	var array = [];
	array = string.split(' ')
	console.log(array.length);
}

var string = "This is a string";

wordCount(string);