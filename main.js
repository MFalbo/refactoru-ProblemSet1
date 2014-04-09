
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

// -----------Prime Number--------------

// C code from application
#include <stdio.h>
#include <math.h>

main(void)
{

    OptimusPrime(); //Run function "OptimusPrime

    return 0;
}
OptimusPrime() //OptimusPrime function
{
    int X = 0; //declare local variables
    int i=0;
    float y=0;

    printf("Enter an integer: "); //Request user input
    scanf("%d", &X);

     if(X==2)  //Unique conditions
        {
            printf("\nThe number is prime\n");
        }
    if(X<2)
        {
            printf("\nA prime number must be greater than one.\n");
        }

    for(i=2; i<X ; i++) //Determine if number is prime and print result
    {

        y=X%i;

        if(y==0)
        {

            printf("\nThe number is not prime\n");
            break;
        }
    }

    if(y!=0)
    {
        printf("\nThe number is prime\n");
    }

}