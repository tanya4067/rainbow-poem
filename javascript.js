var target;
var guess_input_text;
var guess_input;
var finished=false;
var guesses=0;
function do_game()
{
    var random_number=Math.random()*100;
    alert("I am so good   "+random_number);
    var random_number_integer=Math.floor(random_number);
    alert("I am so good part2    "+random_number_integer);
    target=random_number_integer + 1;
    alert("I am so good part3    "+target);
    while(!finished)
    {
        guess_input_text=prompt("I am thinking of a number"+"in the range 1 to 100.\n\n"+"What is the number?");
        alert("guess_input_text   "+guess_input_text);
        guess_input=parseInt(guess_input_text);
        alert("guess_input   "+guess_input);
        guesses+=1;
        finished=check_guess();
    }
    alert("the number of guesses   "+guesses);
}
function check_guess()
{
    if(isNaN(guess_input))
    {
        alert("you have not entere a number.\n \n"+"please enter an integer number in between 1 to 100");

    }
    if((guess_input<1)||(guess_input>100))
    {
        alert("please enter an integer number in between range 1 to 100");
        return false;
    }
    if(guess_input<target)
    {
        alert("your number is too small!");
        return false;
    }
    if(guess_input>target)
    {
        alert("your number is too large");
        return false;
    }
    alert("you got it !The number was"+target+".\n\n It took you"+guesses+"guesses to get the number!");
    return true;

}